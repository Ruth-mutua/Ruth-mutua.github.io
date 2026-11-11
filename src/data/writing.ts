export type Article = { title: string; url: string; date: string; blurb: string; early?: boolean };

// Newest first. Add new articles at the top.
export const articles: Article[] = [
  {
    title: 'A peer mesh runs itself, as long as your seed, network policy and autoscaler say it can',
    url: 'https://www.linkedin.com/pulse/peer-mesh-runs-itself-long-your-seed-network-policy-autoscaler-mutua-ndzcf/',
    date: 'October 2026',
    blurb:
      'A peer-to-peer agent mesh has no central coordinator, but it still depends on the platform underneath it: a stable seed address, reachable IPs and network policies that allow the right traffic. Why dead peers linger, and how periodic reconciliation fixes it.',
  },
  {
    title: 'The cheapest insurance in your cluster is a component that does nothing',
    url: 'https://www.linkedin.com/pulse/cheapest-insurance-your-cluster-component-does-nothing-ruth-mutua-3nhgf/',
    date: 'October 2026',
    blurb:
      'Some pods serve no traffic yet keep something critical alive. How a standby cluster\'s secrets went three weeks stale, and why "do-nothing" components need to be documented before someone cleans them up.',
  },
  {
    title: 'Would I know if it weren\'t working? The health check question that changed how I build',
    url: 'https://www.linkedin.com/pulse/would-i-know-werent-working-health-check-question-changed-ruth-mutua-vxmof/',
    date: 'September 2026',
    blurb:
      'A health check existing isn\'t the same as a person finding out something broke. Kubernetes probes restart pods and reroute traffic, but nobody hears about it unless you alert on it. Heartbeats, missing check-ins and unusual data volumes catch the silent failures.',
  },
  {
    title: 'Building my first Android application',
    url: 'https://www.linkedin.com/pulse/building-my-first-android-application-ruth-mutua/',
    date: 'May 2023',
    blurb: 'A Java Android app with login and facial recognition through AWS Rekognition.',
    early: true,
  },
];
