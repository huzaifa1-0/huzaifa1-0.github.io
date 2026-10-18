import React from 'react';

const projectsData = [
  {
    title: 'eMCP Nexus (FYP)',
    tech: 'Python, FastAPI, RAG, FAISS, Docker',
    points: [
      'Built a full-stack AI/MCP tool marketplace on FastAPI, allowing developers to publish, deploy, and monetize their tools through a pay-per-task execution model with integrated Stripe and Web3/crypto billing.',
      'Developed a semantic search engine using vector embeddings and a FAISS index, so users can find the right tool by describing what they need in natural language.',
      'Integrated a RAG-powered support chatbot that retrieves from tool documentation to answer integration and troubleshooting questions, alongside a recommendation system based on usage rankings.',
      'Engineered a GitHub-to-deployment pipeline that parses a repository and automatically deploys it as a containerized FastAPI endpoint.',
    ],
    link: 'https://github.com/huzaifa1-0/eMCP-Nexus'
  },
  {
    title: 'AI GitHub Auditor',
    tech: 'Python, GitHub API, Static Code Analysis, Phi-2',
    points: [
      'Built an AI-assisted tool that audits GitHub repositories through the GitHub API, flags security and code-quality issues, and tracks project metrics over time.',
      'Combined Bandit, ESLint, and Pylint with the Phi-2 language model, run locally, to turn raw analyzer output into plain-language audit summaries and prioritized recommendations.',
      'Designed a modular, plugin-ready architecture to support future AI automation and reporting capabilities.',
    ],
    link: 'https://github.com/huzaifa1-0/AI-Github-Auditor'
  },
  {
    title: 'LegalSense',
    tech: 'Python, RAG, LangChain, Vector Databases',
    points: [
      'Built a RAG-based legal advisory chatbot that retrieves relevant passages from legal documents using vector embeddings, so answers are grounded in source material.',
      'Created the ingestion pipeline: chunked legal documents, generated embeddings with an open-source Hugging Face model, and stored them in a vector database for semantic search.',
      'Used LangChain to orchestrate retrieval and generation, passing the top-ranked passages as context to a locally run LLM for each question.',
      'Designed prompts that restrict the model to the retrieved text, reducing hallucinated answers and making legal information easier for non-experts to follow.',
    ],
    link: 'https://github.com/huzaifa1-0/LEGALSENSE'
  },
  {
    title: 'Presence.AI',
    tech: 'Python, scikit-learn, OpenCV, TensorFlow',
    points: [
      'Built and deployed a real-time face-recognition attendance system using OpenCV and a VGG-based deep learning model, reaching roughly 92% recognition accuracy with inference running locally.',
      'Designed the end-to-end ML pipeline, from live frame capture and face detection to feature extraction and matching against enrolled users.',
      'Trained and evaluated the recognition model with TensorFlow and scikit-learn, tuning it until results were consistently reliable.',
      'Automated attendance logging and notifications, including email alerts for low attendance, so recognition results become attendance records and alerts without manual follow-up.',
    ],
    link: 'https://github.com/huzaifa1-0/Face-Recognition-Using-VGG'
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="heading-line">
        <h1>Projects</h1>
        <hr className="purple-line" />
      </div>
      <div className="projects-details">
        {projectsData.map((project, index) => (
          <div className="project-item" key={index}>
            <h2>{project.title}</h2>
            <p className="tech">{project.tech}</p>
            <ul className="project-points">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
      <a href="https://www.kaggle.com/huzaifa10" target="_blank" rel="noopener noreferrer" className="show-more-link">
        Show More Projects
      </a>
    </div>
  );
};

export default Projects;
