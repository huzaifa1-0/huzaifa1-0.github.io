const proof = [
  { value: '4', label: 'LLM and computer vision features built for production platforms' },
  { value: '~92%', label: 'face-recognition accuracy, with inference running locally' },
  { value: '0', label: 'lines of client code sent to third-party APIs during repository audits' },
];

const capabilities = [
  {
    name: 'LLM applications and agents',
    text: 'Prompted and structured LLM features such as note drafting, text-to-query analytics, resume parsing and tool-using agents, including local open-source models when data cannot leave the machine.',
  },
  {
    name: 'Retrieval and semantic search',
    text: 'RAG pipelines with document chunking, embeddings and vector stores (FAISS, ChromaDB, Pinecone), plus prompts that keep answers inside the retrieved text.',
  },
  {
    name: 'Computer vision',
    text: 'Face recognition and medical image analysis with OpenCV, TensorFlow and VGG-based models, from live frame capture to matching and clinician review.',
  },
  {
    name: 'Speech and language',
    text: 'Speech-to-text, text categorization and structured data extraction that turn audio and unstructured documents into clean records.',
  },
  {
    name: 'Deployment and APIs',
    text: 'FastAPI and Django services, Docker, CI/CD and event-driven automation that carry models out of notebooks and into products.',
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <div className="section__head">
          <h2 className="section__title">What I build</h2>
        </div>
        <div className="section__body">
          <p className="intro">
            I'm a Computer Science graduate from the University of the Punjab. I work across the whole path of an AI
            feature: choosing the model, grounding it in data, wrapping it in an API and shipping it.
          </p>

          <dl className="proof">
            {proof.map((item) => (
              <div className="proof__item" key={item.label}>
                <dt className="proof__value">{item.value}</dt>
                <dd className="proof__label">{item.label}</dd>
              </div>
            ))}
          </dl>

          <dl className="defs">
            {capabilities.map((item) => (
              <div className="defs__row" key={item.name}>
                <dt className="defs__term">{item.name}</dt>
                <dd className="defs__text">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
