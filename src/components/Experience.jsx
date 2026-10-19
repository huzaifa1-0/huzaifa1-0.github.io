const roles = [
  {
    role: 'Associate Software Engineer (AI/ML)',
    org: 'The Dev Corporate (TDC)',
    meta: 'Mar 2026 to present, Lahore, Pakistan',
    current: true,
    tags: ['LLMs', 'Speech-to-text', 'Computer vision', 'Structured extraction', 'Text-to-query'],
    points: [
      'Co-develop the AI layer of a cloud-based dental practice management platform for US healthcare providers, working with product and client-facing teams to turn clinical and front-office workflows into production LLM and computer vision features, and to explain model trade-offs such as accuracy, latency, and data privacy.',
      "Built an AI clinical-notes feature that transcribes appointment audio with speech-to-text and uses an LLM to draft structured SOAP-style notes grounded in the patient's history and treatment plan, paired with hands-free voice charting that converts spoken findings into structured chart entries and saves them to the patient record automatically.",
      'Developed a conversational analytics assistant that lets staff ask questions about their practice in plain English; an LLM translates each question into a validated data query and returns an interactive report or dashboard, replacing manual report building.',
      'Integrated AI-assisted X-ray analysis that runs computer vision models on dental radiographs to highlight potential findings for clinician review, and feeds those findings directly into charting and treatment planning.',
      'Built an LLM-powered resume-parsing service that uses prompt-based structured extraction to turn unstructured resumes into clean candidate profiles, exposed as a reusable API for an HR management platform.',
    ],
  },
  {
    role: 'AI Developer (Freelance)',
    org: 'AI GitHub Auditor, independent client project',
    meta: 'Freelance, remote',
    current: false,
    link: 'https://github.com/huzaifa1-0/AI-Github-Auditor',
    tags: ['GitHub API', 'Bandit', 'Pylint', 'ESLint', 'Phi-2'],
    points: [
      'Developed an AI-assisted repository auditing tool for an independent client, using the GitHub API to collect repository data and track project metrics so code health could be monitored over time.',
      'Automated static analysis with Bandit, Pylint, and ESLint to surface security vulnerabilities, bugs, and code-quality issues across Python and JavaScript codebases.',
      'Ran the Phi-2 small language model locally to convert raw analyzer output into plain-language audit summaries with prioritized recommendations, so client code never had to be sent to third-party APIs.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__inner">
        <div className="section__head">
          <h2 className="section__title">Experience</h2>
          <p className="section__note">Shipping AI features for real users and clients.</p>
        </div>
        <div className="section__body">
          <ol className="timeline">
            {roles.map((item) => (
              <li className="timeline__item" key={item.role}>
                <div className="timeline__head">
                  <div className="timeline__top">
                    <h3 className="timeline__role">{item.role}</h3>
                    {item.current && <span className="badge">Current</span>}
                  </div>
                  <p className="timeline__org">{item.org}</p>
                  <p className="timeline__meta">{item.meta}</p>
                  <ul className="tags" aria-label="Technologies">
                    {item.tags.map((tag) => (
                      <li className="tags__item" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="timeline__body">
                  <ul className="bullets">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {item.link && (
                    <a className="link" href={item.link} target="_blank" rel="noopener noreferrer">
                      View repository
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
