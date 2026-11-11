// Icon names map to simple-icons (e.g. 'kubernetes' -> siKubernetes); 'azure' and 'aws' are text badges.
export const stack = [
  {
    group: 'Cloud & infrastructure',
    items: [
      ['kubernetes', 'Kubernetes'],
      ['terraform', 'Terraform'],
      ['docker', 'Docker'],
      ['azure', 'Azure'],
      ['googlecloud', 'Google Cloud'],
      ['aws', 'AWS'],
      ['helm', 'Helm'],
      ['linux', 'Linux'],
      ['cloudflare', 'Cloudflare'],
      ['nginx', 'OpenResty / Nginx'],
    ],
  },
  {
    group: 'Delivery, reliability & tooling',
    items: [
      ['githubactions', 'GitHub Actions'],
      ['jenkins', 'Jenkins'],
      ['bitbucket', 'Bitbucket Pipelines'],
      ['prometheus', 'Prometheus'],
      ['grafana', 'Grafana'],
      ['letsencrypt', 'cert-manager / TLS'],
      ['apachekafka', 'Kafka / Redpanda'],
      ['vim', 'Vim'],
      ['vscode', 'VS Code'],
      ['intellijidea', 'IntelliJ IDEA'],
    ],
  },
  {
    group: 'Languages, frameworks & data',
    items: [
      ['python', 'Python'],
      ['go', 'Go'],
      ['java', 'Java'],
      ['javascript', 'JavaScript'],
      ['typescript', 'TypeScript'],
      ['nodedotjs', 'Node.js'],
      ['express', 'Express.js'],
      ['gnubash', 'Bash'],
      ['postgresql', 'PostgreSQL'],
      ['mysql', 'MySQL'],
      ['redis', 'Redis'],
      ['mongodb', 'MongoDB'],
      ['dynamodb', 'DynamoDB'],
    ],
  },
] as const;

export const stats = [
  { n: '7', l: 'Kubernetes clusters owned across Azure & GCP' },
  { n: '55%', l: 'cloud spend cut' },
  { n: '4', l: 'compliance frameworks led: SOC 2, ISO 27001, HIPAA, GDPR' },
  { n: '3', l: 'cloud certifications: AWS & Google Cloud' },
];
