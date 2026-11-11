// What I do: capability cards for the home page (and the GitHub profile).
// Deliberately general: skills and approach, no employer stories or figures.
export type Capability = {
  id: string; // also the cover illustration id in Cover.astro
  title: string;
  blurb: string;
  tools: string[];
  article?: { title: string; url: string };
};

export const capabilities: Capability[] = [
  {
    id: 'kubernetes',
    title: 'Kubernetes platforms',
    blurb:
      'Production clusters across staging, production and disaster recovery: autoscaling, network policies, safe rollouts, and DR that has actually been drilled.',
    tools: ['kubernetes', 'helm', 'kustomize', 'keda'],
    article: {
      title: 'The cheapest insurance in your cluster is a component that does nothing',
      url: 'https://www.linkedin.com/pulse/cheapest-insurance-your-cluster-component-does-nothing-ruth-mutua-3nhgf/',
    },
  },
  {
    id: 'iac',
    title: 'Infrastructure as code',
    blurb:
      'Clusters and cloud resources defined in Terraform, deployments in Kustomize overlays, and CI/CD that takes a merge all the way to production.',
    tools: ['terraform', 'kustomize', 'github actions', 'docker'],
  },
  {
    id: 'security',
    title: 'Cloud security',
    blurb:
      'Least privilege by default: workload identity instead of static keys, secrets in a vault, default-deny networking, and controls verified at the source, not on a dashboard.',
    tools: ['workload identity', 'key vault', 'network policies', 'soc 2 / iso 27001'],
  },
  {
    id: 'observability',
    title: 'Reliability & observability',
    blurb:
      'Metrics, logs and alerts that tell a person when something breaks, then root-cause analysis and postmortems so the same failure is recognised in minutes next time.',
    tools: ['prometheus', 'grafana', 'loki', 'alertmanager'],
    article: {
      title: "Would I know if it weren't working? The health check question that changed how I build",
      url: 'https://www.linkedin.com/pulse/would-i-know-werent-working-health-check-question-changed-ruth-mutua-vxmof/',
    },
  },
  {
    id: 'ai-gateway',
    title: 'AI infrastructure',
    blurb:
      'One identity-aware front door for model access: usage attribution, quotas, and routing across hosted and self-hosted models, plus the agent meshes behind them.',
    tools: ['openresty', 'lua', 'vllm', 'ollama'],
    article: {
      title: 'A peer mesh runs itself, as long as your seed, network policy and autoscaler say it can',
      url: 'https://www.linkedin.com/pulse/peer-mesh-runs-itself-long-your-seed-network-policy-autoscaler-mutua-ndzcf/',
    },
  },
];
