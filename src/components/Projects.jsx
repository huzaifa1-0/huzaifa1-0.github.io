import React from 'react';

const projectsData = [
  {
    title: 'AI Github Auditor',
    description: 'A powerful AI agent that audits your GitHub repositories, detects security & quality issues, tracks project progress, and provides GPT-powered insights — all in a modular, extensible framework.',
    link: 'https://github.com/huzaifa1-0/AI-Github-Auditor'
  },
  {
    title: 'LEGALSENSE | Intelligent Legal Advisor',
    description: 'LegalSense is an AI-powered legal assistant for Pakistan that offers document summarization, smart Q&A, and compliance checks.',
    link: 'https://github.com/huzaifa1-0/LEGALSENSE'
  },
  {
    title: 'Presence.AI',
    description: 'A face recognition attendance system that marks attendance by detecting faces. Sends email notifications to students with less than 75% attendance.',
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
