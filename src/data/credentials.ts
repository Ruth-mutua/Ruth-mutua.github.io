const credly = (id: string) => `https://www.credly.com/badges/${id}/public_url`;

export const certifications = [
  { name: 'AWS Certified Solutions Architect – Associate', url: credly('cd024613-866d-4f6c-b996-1c4ca9b17180') },
  { name: 'AWS Certified Cloud Practitioner', url: credly('33a85446-9845-4c0f-bcbf-a2bb5f1f6060') },
  { name: 'Google Cloud Associate Cloud Engineer', url: credly('1245cc4b-20ec-430c-8dde-99c753cd1bdf') },
  { name: 'Google Professional Cloud Architect', note: 'in progress' },
];

export const skillBadges = [
  { name: 'Build Infrastructure with Terraform on Google Cloud', url: credly('8c8ab712-e19a-4708-af07-19a98c86da4b') },
  { name: 'Manage Kubernetes in Google Cloud', url: credly('f0fb97bb-aac1-422d-b4a6-a783023125b3') },
  { name: 'Implement Load Balancing on Compute Engine', url: credly('059d9855-d707-42a3-918d-12cb9a7bbfbd') },
  { name: 'Set Up an App Dev Environment on Google Cloud', url: credly('630ba525-a926-4886-a4d9-8fdfbc070c6e') },
  { name: 'Prompt Design in Vertex AI', url: credly('5d5a634e-6046-4bc0-b4ed-009c271316cc') },
  // TODO: names for these three, then uncomment.
  // { name: '', url: credly('000a6212-83b7-472f-8bf2-7faa780e70b8') },
  // { name: '', url: credly('3caafefb-8be8-46c0-8b4c-b8da187d46f0') },
  // { name: '', url: credly('dccad961-1367-410d-8d06-9db61d7df046') },
];

export const openSource = [
  {
    name: 'JarvisCore',
    role: 'Contributor & maintainer',
    text: 'Open-source Python framework for distributed AI agents and workflows, published on PyPI. Release engineering, CLI tooling, security hardening (outbound TLS verification) and contributor documentation.',
  },
  {
    name: 'swim-p2p',
    role: 'Contributor',
    text: 'Peer-to-peer membership and messaging library based on the SWIM protocol.',
  },
];
