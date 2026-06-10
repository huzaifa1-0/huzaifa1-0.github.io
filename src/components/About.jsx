import React from 'react';

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="heading-line">
        <h1>About Me</h1>
        <hr className="purple-line" />
      </div>
      <p>
        I'm an AI Engineer and recent Computer Science graduate from the University of the Punjab, currently working as an Associate Software Engineer (AI/ML) at The Dev Corporate. My work sits at the intersection of large language models, backend engineering, and real-world product development — building systems that are not just technically sound but genuinely useful.
      </p>
      <p>
        My core focus is on LLMs, RAG pipelines, and agentic AI systems. I've built projects ranging from an AI-powered MCP marketplace with semantic search and Web3 billing, to a legal advisory chatbot backed by vector databases, to a GitHub security auditor powered by static analysis and language models. I enjoy the full stack of AI product development — from vector embeddings and retrieval systems to FastAPI backends, Docker deployments, and clean integrations.
      </p>
      <p>
        What drives me is the challenge of taking complex AI capabilities and turning them into reliable, production-ready tools. Whether it's reducing hallucinations in a RAG pipeline, automating a GitHub-to-deployment workflow, or building natural language interfaces for structured tasks — I care about systems that actually work.
      </p>
      <p>
        I'm always looking to collaborate with teams building ambitious things at the frontier of AI.
      </p>
    </div>
  );
};

export default About;
