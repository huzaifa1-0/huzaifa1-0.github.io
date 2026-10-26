import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'MedFlow',
    kind: 'Healthcare platform · Company project',
    headline: 'A cloud-based dental practice management platform for US healthcare providers, with AI built into charting, analytics and imaging.',
    stack: ['React', 'Vite', 'Material UI', 'Redux Toolkit', 'LLMs', 'Computer vision'],
    flow: ['Appointment audio', 'Speech-to-text', 'LLM drafts SOAP note', 'Saved to patient record'],
    points: [
      'Co-develop the AI layer of MedFlow, turning clinical and front-office workflows into production LLM and computer vision features.',
      'Built an AI clinical-notes feature that transcribes appointment audio and drafts structured SOAP-style notes grounded in the patient history and treatment plan, plus hands-free voice charting that saves spoken findings to the patient record.',
      'Developed a conversational analytics assistant that turns plain-English questions into validated data queries and returns interactive reports and dashboards, and integrated AI-assisted X-ray analysis that feeds findings into charting and treatment planning.',
      'The React frontend covers scheduling, patient records, clinical exams and treatment plans, insurance claims and billing, role-based access, real-time chat and a patient portal.',
    ],
  },
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
    repo: 'huzaifa1-0/eMCP-Nexus',
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
    repo: 'huzaifa1-0/Face-Recognition-Using-VGG',
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
    repo: 'huzaifa1-0/LEGALSENSE',
  },
];

// Live star and fork counts from the public GitHub API. If the request fails or is
// rate limited, the counts are simply left out and nothing else changes.
function useRepoStats(repos) {
  const [stats, setStats] = useState({});

  useEffect(() => {
    const controller = new AbortController();

    repos.forEach(async (repo) => {
      const cacheKey = `repo-stats:${repo}`;
      try {
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          setStats((prev) => ({ ...prev, [repo]: JSON.parse(cached) }));
          return;
        }
      } catch {
        // Storage can be blocked; fall through to the network request.
      }

      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, { signal: controller.signal });
        if (!response.ok) return;
        const data = await response.json();
        const value = { stars: data.stargazers_count, forks: data.forks_count };
        setStats((prev) => ({ ...prev, [repo]: value }));
        try {
          sessionStorage.setItem(cacheKey, JSON.stringify(value));
        } catch {
          // Ignore storage errors.
        }
      } catch {
        // Offline, blocked or rate limited: show no counts.
      }
    });

    return () => controller.abort();
  }, [repos]);

  return stats;
}

const repoList = projects.map((project) => project.repo).filter(Boolean);

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m12 3.2 2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8-5.4 2.8 1.1-6-4.4-4.2 6-.9L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="5.5" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="5.5" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="18.5" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M6.5 7.7v1.3a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7.7M12 11v5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default function Projects() {
  const stats = useRepoStats(repoList);

  return (
    <section className="section" id="work">
      <div className="section__inner">
        <div className="section__head">
          <h2 className="section__title">Selected work</h2>
          <p className="section__note">Retrieval, vision and deployment, built end to end.</p>
        </div>

        <div className="section__body">
          <ul className="projects">
            {projects.map((project) => {
              const repoStats = project.repo ? stats[project.repo] : undefined;
              return (
                <li className="project" key={project.title}>
                  <div className="project__main">
                    <p className="project__kind">{project.kind}</p>
                    <h3 className="project__title">{project.title}</h3>
                    <p className="project__headline">{project.headline}</p>

                    <ul className="tags" aria-label={`${project.title} stack`}>
                      {project.stack.map((tech) => (
                        <li className="tags__item" key={tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <ol className="flow" aria-label={`${project.title} pipeline`}>
                      {project.flow.map((step) => (
                        <li className="flow__step" key={step}>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="project__detail">
                    <ul className="bullets">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="project__foot">
                      {project.repo ? (
                        <a className="link" href={`https://github.com/${project.repo}`} target="_blank" rel="noopener noreferrer">
                          View on GitHub
                        </a>
                      ) : (
                        <span className="stat">Private, company codebase</span>
                      )}
                      {repoStats && repoStats.stars > 0 && (
                        <span className="stat" title="GitHub stars">
                          <StarIcon />
                          <span>
                            {repoStats.stars}
                            <span className="sr-only"> GitHub stars</span>
                          </span>
                        </span>
                      )}
                      {repoStats && repoStats.forks > 0 && (
                        <span className="stat" title="GitHub forks">
                          <ForkIcon />
                          <span>
                            {repoStats.forks}
                            <span className="sr-only"> GitHub forks</span>
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
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
