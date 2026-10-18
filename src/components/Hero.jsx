import EmbeddingField from './EmbeddingField';

const resumeUrl = `${import.meta.env.BASE_URL}Huzaifa_Rashid_Resume.pdf`;

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__name">
            <span className="hero__line">Huzaifa</span>
            <span className="hero__line">Rashid</span>
          </h1>
          <p className="hero__role">
            AI Engineer building LLM, RAG and computer vision systems that hold up in production.
          </p>
          <p className="hero__bio">
            I turn messy real-world workflows into reliable AI features, from retrieval and structured extraction to
            model deployment, and I spell out the trade-offs between accuracy, latency and data privacy.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={resumeUrl} download="Huzaifa_Rashid_Resume.pdf">
              Download resume
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <figure className="field">
          <div className="field__stage">
            <EmbeddingField />
          </div>
          <figcaption className="field__caption">
            Move over the map to retrieve the closest skills. The number is a similarity score.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
