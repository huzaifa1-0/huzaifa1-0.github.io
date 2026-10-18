import React from 'react';
import pythonImg from '../assets/python.png';
import tfImg from '../assets/TF.png';
import skImg from '../assets/sk.png';
import pytorchImg from '../assets/pytorch.png';
import gitImg from '../assets/git.png';
import sqlImg from '../assets/sql.png';
import hfImg from '../assets/hf.png';
import nmImg from '../assets/nm.png';
import langchainImg from '../assets/langchain.png';
import langgraphImg from '../assets/langgraph.svg';

const skillsData = [
  { name: 'Python', image: pythonImg },
  { name: 'TensorFlow', image: tfImg },
  { name: 'Scikit Learn', image: skImg },
  { name: 'PyTorch', image: pytorchImg },
  { name: 'Git', image: gitImg },
  { name: 'My Sql', image: sqlImg },
  { name: 'Hugging Face', image: hfImg },
  { name: 'Numpy', image: nmImg },
  { name: 'LangChain', image: langchainImg },
  { name: 'LangGraph', image: langgraphImg },
];

const skillCategories = [
  { title: 'Programming', items: ['Python', 'JavaScript', 'C++'] },
  {
    title: 'LLMs & Generative AI',
    items: ['LLM Integration', 'AI Agents', 'Local & Open-Source LLMs (Phi-2)', 'Prompt Engineering', 'Structured Data Extraction', 'Text-to-Query', 'Speech-to-Text', 'Text Categorization', 'NLP'],
  },
  {
    title: 'RAG & Vector Search',
    items: ['RAG Pipelines', 'LangChain', 'FAISS', 'Pinecone', 'ChromaDB', 'Embeddings', 'Document Chunking', 'Semantic Search'],
  },
  {
    title: 'ML & Computer Vision',
    items: ['scikit-learn', 'TensorFlow', 'Hugging Face', 'OpenCV', 'VGG', 'Medical Image Analysis', 'Face Recognition', 'Model Training & Evaluation'],
  },
  {
    title: 'Backend & APIs',
    items: ['Django', 'FastAPI', 'RESTful APIs', 'GitHub API', 'API Integration', 'Workflow Automation', 'Event-Driven Automation'],
  },
  {
    title: 'Deployment & Tools',
    items: ['Docker', 'Git', 'CI/CD', 'Model Deployment', 'Static Code Analysis (Bandit, Pylint, ESLint)'],
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="heading-line">
        <h1>Skills</h1>
        <hr className="purple-line" />
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="skills-categories">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>
            <div className="skill-chips">
              {category.items.map((item, i) => (
                <span className="skill-chip" key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
