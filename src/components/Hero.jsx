const resumeUrl = `${import.meta.env.BASE_URL}Huzaifa_Rashid_Resume.pdf`;

const facts = [
  { term: 'Based in', value: 'Lahore, Pakistan' },
  { term: 'Education', value: 'BS Computer Science, University of the Punjab' },
  { term: 'Focus', value: 'LLMs, RAG and computer vision' },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <h1 className="hero__name">
          <span className="hero__line">Huzaifa</span> <span className="hero__line">Rashid</span>
        </h1>

        <div className="hero__lower">
          <p className="hero__role">
            AI Engineer building LLM, RAG and computer vision systems that hold up in production.
          </p>
          <div className="hero__side">
            <p className="hero__bio">
              I turn messy real-world workflows into reliable AI features, from retrieval and structured extraction to
              model deployment, and I spell out the trade-offs between accuracy, latency and data privacy.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={resumeUrl} download="Huzaifa_Rashid_Resume.pdf">
                Download resume
              </a>
              <a className="btn btn--ghost" href="#search">
                Search my work
              </a>
            </div>
          </div>
        </div>

        <dl className="facts">
          {facts.map((fact) => (
            <div className="facts__item" key={fact.term}>
              <dt className="facts__term">{fact.term}</dt>
              <dd className="facts__value">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
