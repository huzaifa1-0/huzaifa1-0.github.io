const groups = [
  { title: 'Programming', items: ['Python', 'JavaScript', 'C++'] },
  {
    title: 'LLMs and generative AI',
    items: [
      'LLM integration',
      'AI agents',
      'Local and open-source LLMs (Phi-2)',
      'Prompt engineering',
      'Structured data extraction',
      'Text-to-query',
      'Speech-to-text',
      'Text categorization',
      'NLP',
    ],
  },
  {
    title: 'RAG and vector search',
    items: ['RAG pipelines', 'LangChain', 'FAISS', 'Pinecone', 'ChromaDB', 'Embeddings', 'Document chunking', 'Semantic search'],
  },
  {
    title: 'ML and computer vision',
    items: ['scikit-learn', 'TensorFlow', 'Hugging Face', 'OpenCV', 'VGG', 'Medical image analysis', 'Face recognition', 'Model training and evaluation'],
  },
  {
    title: 'Backend and APIs',
    items: ['Django', 'FastAPI', 'RESTful APIs', 'GitHub API', 'API integration', 'Workflow automation', 'Event-driven automation'],
  },
  {
    title: 'Deployment and tools',
    items: ['Docker', 'Git', 'CI/CD', 'Model deployment', 'Static code analysis (Bandit, Pylint, ESLint)'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__inner">
        <div className="section__head">
          <h2 className="section__title">Skills</h2>
          <p className="section__note">The stack I reach for, grouped by the job it does.</p>
        </div>
        <div className="section__body">
          <dl className="skill-groups">
            {groups.map((group) => (
              <div className="skill-groups__row" key={group.title}>
                <dt className="skill-groups__title">{group.title}</dt>
                <dd className="skill-groups__items">
                  <ul className="tags">
                    {group.items.map((item) => (
                      <li className="tags__item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
