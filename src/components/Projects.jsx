import React from 'react';

const projectsData = [
  {
    title: 'eMCP Nexus (FYP)',
    description: 'Designed and developed an AI-powered MCP marketplace enabling AI engineers to deploy, monetize, and scale MCP tools using a pay-per-task execution model with integrated Stripe and Web3/crypto billing. Built a semantic search and discovery engine using FAISS and vector embeddings, integrated a RAG-powered chatbot, and engineered a GitHub-to-deployment workflow.',
    link: 'https://github.com/huzaifa1-0/eMCP-Nexus'
  },
  {
    title: 'AI GitHub Auditor',
    description: 'Built an AI-powered tool to audit GitHub repositories, detect security/code quality issues, and track project metrics. Integrated Bandit, ESLint and PyLint with Phi-2 to produce clear audit summaries and detailed recommendations. Designed a modular, plugin-ready architecture to support future AI automation and reporting capabilities.',
    link: 'https://github.com/huzaifa1-0/AI-Github-Auditor'
  },
  {
    title: 'LegalSense',
    description: 'Designed a Retrieval-Augmented Generation chatbot for legal advisory use cases, delivering accurate, precedent-backed responses. Indexed legal documents using vector embeddings, significantly reducing hallucinations and improving real-time document retrieval accuracy.',
    link: 'https://github.com/huzaifa1-0/LEGALSENSE'
  },
  {
    title: 'Presence.AI',
    description: 'Developed a real-time face recognition attendance system using OpenCV and VGG, achieving ~92% recognition accuracy and reducing false attendance entries. Implemented advanced deep learning models and notification workflows, including automated email alerts for low attendance thresholds.',
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
            <p className="description">{project.description}</p>
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
