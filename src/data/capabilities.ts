// What I do: capability cards for the home page (and the GitHub profile).
// Deliberately general: skills and approach, no employer stories or figures.
export type Capability = {
  id: string; // also the cover illustration id in Cover.astro
  title: string;
  blurb: string;
  tools: string[];
  outcome: string; // the value, in one line
  article?: { title: string; url: string };
};

export const capabilities: Capability[] = [
  {
    id: 'kubernetes',
    title: 'Kubernetes platforms',
    blurb:
      'Clusters a team doesn\'t have to babysit: autoscaling that follows real load, capacity right-sized so you pay for what you use, network policies that contain mistakes, and disaster recovery that has been drilled, not just diagrammed.',
    outcome: 'uptime without the babysitting',
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
      'Every environment rebuildable from code. Changes are reviewed instead of clicked, staging and production don\'t drift apart, and a merge reaches production safely, so releases stop being events.',
    outcome: 'safe, repeatable releases',
    tools: ['terraform', 'kustomize', 'github actions', 'docker'],
  },
  {
    id: 'security',
    title: 'Cloud security',
    blurb:
      'Security that holds up when someone checks: no static keys to leak, secrets kept in a vault, networks that deny by default, and controls proven at the source, ready for SOC 2 and ISO 27001.',
    outcome: 'audit-ready by default',
    tools: ['workload identity', 'key vault', 'network policies', 'soc 2 / iso 27001'],
  },
  {
    id: 'observability',
    title: 'Reliability & observability',
    blurb:
      'Problems found before customers find them. Alerts reach a person, diagnosis goes to the real root cause, and every incident ends with a postmortem so the same failure doesn\'t happen twice.',
    outcome: 'fewer pages, faster recovery',
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
      'AI you can afford and govern: every model call tied to a customer and workflow, spend capped before it surprises anyone, and the freedom to switch between hosted and self-hosted models without touching the apps.',
    outcome: 'AI spend you can see and control',
    tools: ['openresty', 'lua', 'vllm', 'ollama'],
    article: {
      title: 'A peer mesh runs itself, as long as your seed, network policy and autoscaler say it can',
      url: 'https://www.linkedin.com/pulse/peer-mesh-runs-itself-long-your-seed-network-policy-autoscaler-mutua-ndzcf/',
    },
  },
];
