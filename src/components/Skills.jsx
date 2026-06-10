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
    </div>
  );
};

export default Skills;
