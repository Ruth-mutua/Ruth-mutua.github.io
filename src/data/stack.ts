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
    group: 'Delivery & reliability',
    items: [
      ['githubactions', 'GitHub Actions'],
      ['bitbucket', 'Bitbucket Pipelines'],
      ['prometheus', 'Prometheus'],
      ['grafana', 'Grafana'],
      ['letsencrypt', 'cert-manager / TLS'],
      ['apachekafka', 'Kafka / Redpanda'],
    ],
  },
  {
    group: 'Languages, data & editors',
    items: [
      ['python', 'Python'],
      ['go', 'Go'],
      ['typescript', 'TypeScript'],
      ['postgresql', 'PostgreSQL'],
      ['redis', 'Redis'],
      ['mongodb', 'MongoDB'],
      ['gnubash', 'Bash'],
      ['vim', 'Vim'],
      ['vscode', 'VS Code'],
    ],
  },
] as const;

export const stats = [
  { n: '7', l: 'Kubernetes clusters owned across Azure & GCP' },
  { n: '55%', l: 'cloud spend cut' },
  { n: '4', l: 'compliance frameworks led: SOC 2, ISO 27001, HIPAA, GDPR' },
  { n: '3', l: 'cloud certifications: AWS & Google Cloud' },
];
