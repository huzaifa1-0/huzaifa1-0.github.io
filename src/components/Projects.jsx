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

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="section__inner">
        <div className="section__head">
          <h2 className="section__title">Selected work</h2>
          <p className="section__note">Retrieval, vision and deployment, built end to end.</p>
        </div>
        <div className="section__body">
          <ul className="projects">
            {projects.map((project) => (
              <li className="project" key={project.title}>
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

                <ul className="bullets">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <a className="link" href={project.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </li>
            ))}
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
