// Single source of truth for the portfolio content. It mirrors the latest
// resume, so editing a line here updates the page.

export const profile = {
  name: 'Huzaifa Rashid',
  role: 'AI engineer',
  location: 'Lahore, Pakistan',
  email: 'huzaifaras10@gmail.com',
  phone: '+92-310-7164892',
  phoneHref: 'tel:+923107164892',
  intro:
    'AI engineer in Lahore. At The Dev Corporate I build the AI layer of a dental practice platform for US healthcare providers: clinical notes from speech, plain-English analytics, and X-ray analysis.',
  links: [
    { label: 'LinkedIn', text: 'linkedin.com/in/huzaifarashid1', href: 'https://www.linkedin.com/in/huzaifarashid1' },
    { label: 'GitHub', text: 'github.com/huzaifa1-0', href: 'https://github.com/huzaifa1-0' },
    { label: 'Kaggle', text: 'kaggle.com/huzaifa10', href: 'https://www.kaggle.com/huzaifa10' },
    { label: 'Medium', text: 'medium.com/@huzaifa1', href: 'https://medium.com/@huzaifa1' },
  ],
};

export const about = [
  "I'm an AI engineer and a recent Computer Science graduate of the University of the Punjab. At The Dev Corporate I work on the AI layer of a dental practice platform: clinical notes drafted from speech, plain-English analytics over practice data, and X-ray analysis that clinicians review.",
  "My focus is LLMs, RAG pipelines, and agentic systems. Outside work I've built an MCP tool marketplace with semantic search and Web3 billing, a legal advisory chatbot backed by a vector database, and a GitHub auditor that pairs static analysis with a small language model.",
  'I care about tools that are reliable and ready for production: fewer hallucinations in RAG pipelines, automated deployment workflows, and natural-language interfaces for structured tasks. I like working with teams building ambitious things with AI.',
];

/* Topics used to filter the work map in the hero. */
export const topics = [
  { id: 'speech', label: 'Speech' },
  { id: 'language', label: 'Language' },
  { id: 'vision', label: 'Vision' },
  { id: 'retrieval', label: 'Retrieval' },
  { id: 'local', label: 'Local models' },
  { id: 'automation', label: 'Automation' },
];

/* Points on the hero's work map. x and y are percentages of the map and are
   placed by hand: points that sit close together are closely related work. */
const REPO = 'https://github.com/huzaifa1-0';
const SEE_ROLE = { href: '#experience', linkLabel: 'See this role in Experience' };

export const nodes = [
  {
    id: 'notes',
    label: 'Clinical notes',
    title: 'Clinical notes from speech',
    where: 'The Dev Corporate, dental practice platform',
    summary:
      "Transcribes appointment audio and uses an LLM to draft structured SOAP-style notes grounded in the patient's history and treatment plan.",
    topics: ['speech', 'language'],
    x: 18,
    y: 16,
    ...SEE_ROLE,
  },
  {
    id: 'voice',
    label: 'Voice charting',
    title: 'Hands-free voice charting',
    where: 'The Dev Corporate, dental practice platform',
    summary:
      'Turns spoken findings into structured chart entries and saves them to the patient record automatically.',
    topics: ['speech'],
    x: 8,
    y: 34,
    ...SEE_ROLE,
  },
  {
    id: 'analytics',
    label: 'Plain-English analytics',
    title: 'Plain-English analytics',
    where: 'The Dev Corporate, dental practice platform',
    summary:
      'Staff ask questions about their practice in plain English. An LLM turns each question into a validated data query and returns an interactive report or dashboard.',
    topics: ['language'],
    x: 50,
    y: 10,
    ...SEE_ROLE,
  },
  {
    id: 'parser',
    label: 'Resume parsing',
    title: 'Resume parsing API',
    where: 'The Dev Corporate, HR management platform',
    summary:
      'Prompt-based structured extraction turns unstructured resumes into clean candidate profiles, served as a reusable API.',
    topics: ['language'],
    x: 72,
    y: 26,
    ...SEE_ROLE,
  },
  {
    id: 'xray',
    label: 'X-ray analysis',
    title: 'X-ray analysis',
    where: 'The Dev Corporate, dental practice platform',
    summary:
      'Computer vision models on dental radiographs highlight potential findings for clinician review and feed them into charting and treatment planning.',
    topics: ['vision'],
    x: 14,
    y: 60,
    ...SEE_ROLE,
  },
  {
    id: 'presence',
    label: 'Presence.AI',
    title: 'Presence.AI',
    where: 'Project',
    summary:
      'Real-time face-recognition attendance at roughly 92% accuracy, using OpenCV and a VGG-based model with inference running locally. It logs attendance and sends alerts.',
    topics: ['vision', 'local', 'automation'],
    x: 28,
    y: 80,
    href: `${REPO}/Face-Recognition-Using-VGG`,
    linkLabel: 'View on GitHub',
  },
  {
    id: 'search',
    label: 'Tool search',
    title: 'Semantic tool search',
    where: 'Project: eMCP Nexus',
    summary:
      'Vector embeddings and a FAISS index let users find the right tool by describing what they need in natural language.',
    topics: ['retrieval'],
    x: 76,
    y: 38,
    href: `${REPO}/eMCP-Nexus`,
    linkLabel: 'View on GitHub',
  },
  {
    id: 'support',
    label: 'Support chatbot',
    title: 'Support chatbot',
    where: 'Project: eMCP Nexus',
    summary:
      'A RAG chatbot answers integration and troubleshooting questions by retrieving from tool documentation.',
    topics: ['retrieval', 'language'],
    x: 90,
    y: 50,
    href: `${REPO}/eMCP-Nexus`,
    linkLabel: 'View on GitHub',
  },
  {
    id: 'deploy',
    label: 'Auto-deploy',
    title: 'GitHub-to-deployment pipeline',
    where: 'Project: eMCP Nexus',
    summary:
      'Parses a repository and automatically deploys it as a containerized FastAPI endpoint.',
    topics: ['automation'],
    x: 84,
    y: 84,
    href: `${REPO}/eMCP-Nexus`,
    linkLabel: 'View on GitHub',
  },
  {
    id: 'legal',
    label: 'LegalSense',
    title: 'LegalSense',
    where: 'Project',
    summary:
      'A legal advisory chatbot that answers only from retrieved passages, using open-source embeddings and a locally run LLM.',
    topics: ['retrieval', 'local'],
    x: 58,
    y: 66,
    href: `${REPO}/LEGALSENSE`,
    linkLabel: 'View on GitHub',
  },
  {
    id: 'auditor',
    label: 'Repo auditor',
    title: 'AI GitHub Auditor',
    where: 'Freelance client project',
    summary:
      'Bandit, Pylint, and ESLint findings are turned into plain-language audit summaries by the Phi-2 model, run locally so client code stays private.',
    topics: ['local', 'automation', 'language'],
    x: 46,
    y: 94,
    href: `${REPO}/AI-Github-Auditor`,
    linkLabel: 'View on GitHub',
  },
];

export const experience = [
  {
    id: 'tdc',
    role: 'Associate Software Engineer (AI/ML)',
    org: 'The Dev Corporate (TDC)',
    place: 'Lahore, Pakistan',
    period: 'Mar 2026 – Present',
    points: [
      'Co-develop the AI layer of a cloud-based dental practice management platform for US healthcare providers, working with product and client-facing teams to turn clinical and front-office workflows into production LLM and computer vision features, and to explain model trade-offs such as accuracy, latency, and data privacy.',
      "Built an AI clinical-notes feature that transcribes appointment audio with speech-to-text and uses an LLM to draft structured SOAP-style notes grounded in the patient's history and treatment plan, paired with hands-free voice charting that converts spoken findings into structured chart entries and saves them to the patient record automatically.",
      'Developed a conversational analytics assistant that lets staff ask questions about their practice in plain English; an LLM translates each question into a validated data query and returns an interactive report or dashboard, replacing manual report building.',
      'Integrated AI-assisted X-ray analysis that runs computer vision models on dental radiographs to highlight potential findings for clinician review, and feeds those findings directly into charting and treatment planning.',
      'Built an LLM-powered resume-parsing service that uses prompt-based structured extraction to turn unstructured resumes into clean candidate profiles, exposed as a reusable API for an HR management platform.',
    ],
  },
  {
    id: 'freelance',
    role: 'AI Developer (Freelance)',
    org: 'AI GitHub Auditor, independent client project',
    place: 'Remote',
    period: 'Freelance',
    points: [
      'Developed an AI-assisted repository auditing tool for an independent client, using the GitHub API to collect repository data and track project metrics so code health could be monitored over time.',
      'Automated static analysis with Bandit, Pylint, and ESLint to surface security vulnerabilities, bugs, and code-quality issues across Python and JavaScript codebases.',
      'Ran the Phi-2 small language model locally to convert raw analyzer output into plain-language audit summaries with prioritized recommendations, so client code never had to be sent to third-party APIs.',
    ],
  },
  {
    id: 'bigimmersive',
    role: 'Web Developer (Internship)',
    org: 'BIGIMMERSIVE',
    place: '',
    period: 'June 2023 – Aug 2023',
    points: [],
  },
];

export const projects = [
  {
    id: 'emcp',
    title: 'eMCP Nexus',
    note: 'Final year project',
    stack: 'Python, FastAPI, RAG, FAISS, Docker',
    href: `${REPO}/eMCP-Nexus`,
    points: [
      'Built a full-stack AI/MCP tool marketplace on FastAPI, allowing developers to publish, deploy, and monetize their tools through a pay-per-task execution model with integrated Stripe and Web3/crypto billing.',
      'Developed a semantic search engine using vector embeddings and a FAISS index, so users can find the right tool by describing what they need in natural language.',
      'Integrated a RAG-powered support chatbot that retrieves from tool documentation to answer integration and troubleshooting questions, alongside a recommendation system based on usage rankings.',
      'Engineered a GitHub-to-deployment pipeline that parses a repository and automatically deploys it as a containerized FastAPI endpoint.',
    ],
  },
  {
    id: 'presence',
    title: 'Presence.AI',
    note: '',
    stack: 'Python, scikit-learn, OpenCV, TensorFlow',
    href: `${REPO}/Face-Recognition-Using-VGG`,
    points: [
      'Built and deployed a real-time face-recognition attendance system using OpenCV and a VGG-based deep learning model, reaching roughly 92% recognition accuracy with inference running locally.',
      'Designed the end-to-end ML pipeline, from live frame capture and face detection to feature extraction and matching against enrolled users.',
      'Trained and evaluated the recognition model with TensorFlow and scikit-learn, tuning it until results were consistently reliable.',
      'Automated attendance logging and notifications, including email alerts for low attendance, so recognition results become attendance records and alerts without manual follow-up.',
    ],
  },
  {
    id: 'legalsense',
    title: 'LegalSense',
    note: '',
    stack: 'Python, RAG, LangChain, Vector Databases',
    href: `${REPO}/LEGALSENSE`,
    points: [
      'Built a RAG-based legal advisory chatbot that retrieves relevant passages from legal documents using vector embeddings, so answers are grounded in source material.',
      'Created the ingestion pipeline: chunked legal documents, generated embeddings with an open-source Hugging Face model, and stored them in a vector database for semantic search.',
      'Used LangChain to orchestrate retrieval and generation, passing the top-ranked passages as context to a locally run LLM for each question.',
      'Designed prompts that restrict the model to the retrieved text, reducing hallucinated answers and making legal information easier for non-experts to follow.',
    ],
  },
  {
    id: 'auditor',
    title: 'AI GitHub Auditor',
    note: '',
    stack: 'Python, GitHub API, Static Code Analysis, Phi-2',
    href: `${REPO}/AI-Github-Auditor`,
    points: [
      'Built an AI-assisted tool that audits GitHub repositories through the GitHub API, flags security and code-quality issues, and tracks project metrics over time.',
      'Combined Bandit, ESLint, and Pylint with the Phi-2 language model, run locally, to turn raw analyzer output into plain-language audit summaries and prioritized recommendations.',
      'Designed a modular, plugin-ready architecture to support future AI automation and reporting capabilities.',
    ],
  },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'JavaScript', 'C++'] },
  {
    group: 'LLMs & Generative AI',
    items: ['LLM Integration', 'AI Agents', 'Local & Open-Source LLMs (Phi-2)', 'Prompt Engineering', 'Structured Data Extraction', 'Text-to-Query', 'Speech-to-Text', 'Text Categorization', 'NLP'],
  },
  {
    group: 'RAG & Vector Search',
    items: ['RAG Pipelines', 'LangChain', 'FAISS', 'Pinecone', 'ChromaDB', 'Embeddings', 'Document Chunking', 'Semantic Search'],
  },
  {
    group: 'ML & Computer Vision',
    items: ['scikit-learn', 'TensorFlow', 'Hugging Face', 'OpenCV', 'VGG', 'Medical Image Analysis', 'Face Recognition', 'Model Training & Evaluation'],
  },
  {
    group: 'Backend & APIs',
    items: ['Django', 'FastAPI', 'RESTful APIs', 'GitHub API', 'API Integration', 'Workflow Automation', 'Event-Driven Automation'],
  },
  {
    group: 'Deployment & Tools',
    items: ['Docker', 'Git', 'CI/CD', 'Model Deployment', 'Static Code Analysis (Bandit, Pylint, ESLint)'],
  },
];

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'University of the Punjab',
  place: 'Lahore, Pakistan',
  period: '2022 – 2026',
};
