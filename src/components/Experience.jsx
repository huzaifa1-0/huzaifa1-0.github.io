import React from 'react';

const experienceData = [
  {
    role: 'Associate Software Engineer (AI/ML)',
    company: '(TDC) THE DEV CORPORATE',
    period: 'March 2026 – Present | Lahore, Pakistan',
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
    company: 'AI GitHub Auditor – Independent Client Project',
    period: 'Freelance | Remote',
    points: [
      'Developed an AI-assisted repository auditing tool for an independent client, using the GitHub API to collect repository data and track project metrics so code health could be monitored over time.',
      'Automated static analysis with Bandit, Pylint, and ESLint to surface security vulnerabilities, bugs, and code-quality issues across Python and JavaScript codebases.',
      'Ran the Phi-2 small language model locally to convert raw analyzer output into plain-language audit summaries with prioritized recommendations, so client code never had to be sent to third-party APIs.',
    ],
  },
  {
    role: 'Web Developer (Internship)',
    company: 'BIGIMMERSIVE',
    period: 'June 2023 – Aug 2023',
    points: [],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <div className="heading-line">
        <h1>Experience</h1>
        <hr className="purple-line" />
      </div>
      <div className="experience-details">
        {experienceData.map((item, index) => (
          <div
            className="experience-item"
            key={index}
            style={index > 0 ? { marginTop: '30px' } : undefined}
          >
            <h2>{item.role}</h2>
            <p className="subtext">{item.company}</p>
            <p className="details">{item.period}</p>
            {item.points.length > 0 && (
              <ul className="experience-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
