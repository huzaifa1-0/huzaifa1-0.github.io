const principles = [
  {
    title: 'Ground every answer',
    text: 'Prompts restrict the model to the passages it retrieved, which cuts hallucinated answers and lets a reader check the source.',
    proof: 'LegalSense',
  },
  {
    title: 'Keep data where it belongs',
    text: 'Small open-source models run locally, so client code is never sent to a third-party API, and face recognition runs with local inference.',
    proof: 'GitHub Auditor with Phi-2, Presence.AI',
  },
  {
    title: 'Measure, then tune',
    text: 'Models are trained and evaluated until results are consistently reliable, and the trade-offs between accuracy, latency and privacy are explained to the team.',
    proof: 'Presence.AI at about 92% accuracy',
  },
  {
    title: 'Ship it as a service',
    text: 'Models go behind FastAPI endpoints in Docker containers, so other products can call them like any other API.',
    proof: 'eMCP Nexus deployment pipeline, resume-parsing API',
  },
];

export default function Approach() {
  return (
    <section className="section" id="approach">
      <div className="section__inner">
        <div className="section__head">
          <h2 className="section__title">How I work</h2>
          <p className="section__note">Four habits I bring to every AI feature.</p>
        </div>
        <div className="section__body">
          <ul className="principles">
            {principles.map((item) => (
              <li className="principle" key={item.title}>
                <h3 className="principle__title">{item.title}</h3>
                <p className="principle__text">{item.text}</p>
                <p className="principle__proof">
                  <span className="principle__proof-label">Seen in</span> {item.proof}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
