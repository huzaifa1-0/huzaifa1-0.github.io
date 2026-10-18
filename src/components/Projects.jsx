import { useEffect, useMemo, useRef, useState } from 'react';

const projects = [
  {
    title: 'eMCP Nexus',
    kind: 'Final year project',
    headline: 'A marketplace where developers publish, deploy and monetize AI tools.',
    stack: ['Python', 'FastAPI', 'RAG', 'FAISS', 'Docker'],
    flow: ['Describe a need', 'Embed query', 'FAISS search', 'Ranked tools'],
    points: [
      'Built a full-stack AI/MCP tool marketplace on FastAPI, allowing developers to publish, deploy and monetize their tools through a pay-per-task execution model.',
      'Developed a semantic search engine using vector embeddings and a FAISS index, so users can find the right tool by describing what they need in natural language.',
      'Integrated a RAG-powered support chatbot that retrieves from tool documentation to answer integration and troubleshooting questions, alongside a recommendation system based on usage rankings.',
      'Engineered a GitHub-to-deployment pipeline that parses a repository and automatically deploys it as a containerized FastAPI endpoint.',
    ],
    link: 'https://github.com/huzaifa1-0/eMCP-Nexus',
  },
  {
    title: 'Presence.AI',
    kind: 'Computer vision',
    headline: 'Real-time face recognition at about 92% accuracy, with inference running locally.',
    stack: ['Python', 'scikit-learn', 'OpenCV', 'TensorFlow'],
    flow: ['Live frame', 'Detect face', 'Extract features', 'Match enrolled user', 'Log attendance'],
    points: [
      'Built and deployed a real-time face-recognition attendance system using OpenCV and a VGG-based deep learning model, reaching roughly 92% recognition accuracy with inference running locally.',
      'Designed the end-to-end ML pipeline, from live frame capture and face detection to feature extraction and matching against enrolled users.',
      'Trained and evaluated the recognition model with TensorFlow and scikit-learn, tuning it until results were consistently reliable.',
      'Automated attendance logging and notifications so recognition results become attendance records and alerts, removing manual roll calls and follow-up.',
    ],
    link: 'https://github.com/huzaifa1-0/Face-Recognition-Using-VGG',
  },
  {
    title: 'LegalSense',
    kind: 'Retrieval-augmented generation',
    headline: 'A legal advisor chatbot whose answers stay inside the source documents.',
    stack: ['Python', 'RAG', 'LangChain', 'Vector databases'],
    flow: ['Question', 'Retrieve passages', 'Constrain prompt', 'Local LLM answer'],
    points: [
      'Built a RAG-based legal advisory chatbot that retrieves relevant passages from legal documents using vector embeddings, so answers are grounded in source material.',
      'Created the ingestion pipeline: chunked legal documents, generated embeddings with an open-source Hugging Face model, and stored them in a vector database for semantic search.',
      'Used LangChain to orchestrate retrieval and generation, passing the top-ranked passages as context to a locally run LLM for each question.',
      'Designed prompts that restrict the model to the retrieved text, reducing hallucinated answers and making legal information easier for non-experts to follow.',
    ],
    link: 'https://github.com/huzaifa1-0/LEGALSENSE',
  },
];

const SUGGESTIONS = ['RAG', 'FastAPI', 'FAISS', 'OpenCV', 'LangChain', 'Docker', 'TensorFlow', 'Hugging Face'];

// Short forms people are likely to type, mapped to wording used in the project text.
const ALIASES = {
  cv: ['computer vision', 'opencv'],
  llm: ['language model', 'local llm'],
  llms: ['llm'],
  face: ['face recognition'],
  faces: ['face'],
  vectordb: ['vector database'],
  deploy: ['deployment', 'deploys'],
  chatbot: ['chatbot', 'chat bot'],
  ml: ['machine learning', 'deep learning', 'scikit-learn'],
  dl: ['deep learning', 'tensorflow'],
  search: ['semantic search', 'faiss'],
  api: ['fastapi', 'endpoint'],
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function variantsOf(token) {
  const list = [token];
  if (ALIASES[token]) list.push(...ALIASES[token]);
  if (token.length > 3 && token.endsWith('s')) list.push(token.slice(0, -1));
  return [...new Set(list)];
}

// Higher weight when the keyword hits a title or tool, lower in the descriptions.
function scoreProject(project, tokens) {
  const strong = [project.title, ...project.stack].join(' ').toLowerCase();
  const medium = [project.kind, project.headline, ...project.flow].join(' ').toLowerCase();
  const weak = project.points.join(' ').toLowerCase();

  let total = 0;
  for (const token of tokens) {
    const variants = variantsOf(token);
    let best = 0;
    for (const variant of variants) {
      if (strong.includes(variant)) best = Math.max(best, 3);
      else if (medium.includes(variant)) best = Math.max(best, 2);
      else if (weak.includes(variant)) best = Math.max(best, 1);
    }
    if (best === 0) return 0;
    total += best;
  }
  return total;
}

function Highlight({ text, pattern }) {
  if (!pattern) return text;
  return text.split(pattern).map((part, i) =>
    i % 2 === 1 ? (
      <mark className="hit" key={i}>
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function SearchIcon() {
  return (
    <svg className="search__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Projects() {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Press "/" anywhere on the page to jump to the search box.
  useEffect(() => {
    const onKey = (event) => {
      const tag = event.target.tagName;
      if (event.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA' && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const tokens = useMemo(() => query.toLowerCase().split(/\s+/).filter(Boolean), [query]);

  const results = useMemo(() => {
    if (tokens.length === 0) return projects.map((project) => ({ project, score: 0 }));
    return projects
      .map((project, index) => ({ project, index, score: scoreProject(project, tokens) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.index - b.index);
  }, [tokens]);

  const pattern = useMemo(() => {
    if (tokens.length === 0) return null;
    const parts = [...new Set(tokens.flatMap(variantsOf))].sort((a, b) => b.length - a.length).map(escapeRegExp);
    return new RegExp(`(${parts.join('|')})`, 'i');
  }, [tokens]);

  const toggleSuggestion = (term) => setQuery((current) => (current.toLowerCase() === term.toLowerCase() ? '' : term));

  const status =
    tokens.length === 0
      ? `${projects.length} projects. Search by tool, technique or topic.`
      : `${results.length} of ${projects.length} projects match “${query.trim()}”.`;

  return (
    <section className="section" id="work">
      <div className="section__inner">
        <div className="section__head">
          <h2 className="section__title">Selected work</h2>
          <p className="section__note">Retrieval, vision and deployment, built end to end.</p>
        </div>

        <div className="section__body">
          <div className="search" id="search" role="search">
            <label className="search__label" htmlFor="project-search">
              Search my projects by tool, technique or topic
            </label>
            <div className="search__field">
              <SearchIcon />
              <input
                ref={inputRef}
                id="project-search"
                className="search__input"
                type="search"
                autoComplete="off"
                spellCheck="false"
                placeholder="Try “RAG”, “FastAPI” or “face recognition”"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setQuery('');
                }}
              />
              {query ? (
                <button className="search__clear" type="button" onClick={() => setQuery('')} aria-label="Clear search">
                  Clear
                </button>
              ) : (
                <kbd className="search__kbd" aria-hidden="true">
                  /
                </kbd>
              )}
            </div>

            <ul className="chips" aria-label="Suggested keywords">
              {SUGGESTIONS.map((term) => (
                <li key={term}>
                  <button
                    className="chip"
                    type="button"
                    aria-pressed={query.toLowerCase() === term.toLowerCase()}
                    onClick={() => toggleSuggestion(term)}
                  >
                    {term}
                  </button>
                </li>
              ))}
            </ul>

            <p className="search__status" role="status" aria-live="polite">
              {status}
            </p>
          </div>

          {results.length === 0 ? (
            <div className="empty">
              <p className="empty__title">No project matches “{query.trim()}”.</p>
              <p className="empty__text">Try a tool such as FastAPI or OpenCV, or a topic such as semantic search.</p>
              <button className="btn btn--ghost btn--small" type="button" onClick={() => setQuery('')}>
                Show all projects
              </button>
            </div>
          ) : (
            <ul className="projects">
              {results.map(({ project }) => (
                <li className="project" key={project.title}>
                  <p className="project__kind">
                    <Highlight text={project.kind} pattern={pattern} />
                  </p>
                  <h3 className="project__title">
                    <Highlight text={project.title} pattern={pattern} />
                  </h3>
                  <p className="project__headline">
                    <Highlight text={project.headline} pattern={pattern} />
                  </p>

                  <ul className="tags" aria-label={`${project.title} stack`}>
                    {project.stack.map((tech) => (
                      <li className="tags__item" key={tech}>
                        <Highlight text={tech} pattern={pattern} />
                      </li>
                    ))}
                  </ul>

                  <ol className="flow" aria-label={`${project.title} pipeline`}>
                    {project.flow.map((step) => (
                      <li className="flow__step" key={step}>
                        <Highlight text={step} pattern={pattern} />
                      </li>
                    ))}
                  </ol>

                  <ul className="bullets">
                    {project.points.map((point) => (
                      <li key={point}>
                        <Highlight text={point} pattern={pattern} />
                      </li>
                    ))}
                  </ul>

                  <a className="link" href={project.link} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </li>
              ))}
            </ul>
          )}

          <p className="more">
            More repositories on{' '}
            <a className="link" href="https://github.com/huzaifa1-0?tab=repositories" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>{' '}
            and{' '}
            <a className="link" href="https://www.kaggle.com/huzaifa10" target="_blank" rel="noopener noreferrer">
              Kaggle
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
