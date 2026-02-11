export type ProductCategory = "reliability" | "delivery" | "cost" | "security";
export type ProductTier = "entry" | "core" | "premium";

export interface ProductAddOn {
  name: string;
  price: string;
}

export interface ProductFAQ {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  categoryLabel: string;
  tier: ProductTier;
  tierLabel: string;
  timeline: string;
  priceEur: string;
  pricePln: string;
  icp: string;
  problem: string;
  description: string;
  deliverables: string[];
  inputs: string[];
  definitionOfDone: string[];
  outOfScope: string[];
  addOns: ProductAddOn[];
  faq: ProductFAQ[];
}

export interface Retainer {
  slug: string;
  name: string;
  tagline: string;
  priceEur: string;
  pricePln: string;
  includes: string[];
  idealFor: string;
}

export const categoryMeta: Record<
  ProductCategory,
  { label: string; description: string; icon: string }
> = {
  reliability: {
    label: "Reliability & SRE",
    description:
      "Reduce incidents, define SLOs, and build runbooks that keep your systems running.",
    icon: "shield",
  },
  delivery: {
    label: "Delivery & CI/CD",
    description:
      "Ship faster with automated pipelines, GitOps workflows, and release engineering.",
    icon: "rocket",
  },
  cost: {
    label: "Cloud Cost & FinOps",
    description:
      "Find waste, right-size infrastructure, and build cost visibility into your workflow.",
    icon: "trending-down",
  },
  security: {
    label: "Security & Hardening",
    description:
      "Lock down containers, manage secrets, and build security into your platform from day one.",
    icon: "lock",
  },
};

export const products: Product[] = [
  // ─── RELIABILITY / SRE ───────────────────────────────────────
  {
    slug: "alert-fatigue-fix",
    name: "Alert Fatigue Fix",
    tagline: "Kill the noise. Keep the signal.",
    category: "reliability",
    categoryLabel: "Reliability & SRE",
    tier: "entry",
    tierLabel: "Entry",
    timeline: "1–2 days",
    priceEur: "€990",
    pricePln: "4,200 PLN",
    icp: "SRE leads and on-call engineers drowning in alert noise",
    problem:
      "Your team gets 200+ alerts per day. 90% are noise. Real incidents get buried. Engineers burn out and start ignoring pages.",
    description:
      "We audit your current alerting rules across Prometheus, Datadog, PagerDuty, or OpsGenie. We eliminate redundant and low-signal alerts, create proper routing and escalation policies, and deliver a clean alerting config that surfaces only what matters.",
    deliverables: [
      "Full alert audit report (current state + noise ratio analysis)",
      "Cleaned alerting rules configuration",
      "Escalation policy and routing matrix",
      "On-call rotation recommendations",
      "Alert runbook template for top 10 critical alerts",
    ],
    inputs: [
      "Access to monitoring tool (Prometheus/Datadog/New Relic)",
      "Access to alerting platform (PagerDuty/OpsGenie/Slack)",
      "30-min kickoff call with on-call lead",
    ],
    definitionOfDone: [
      "Alert volume reduced by minimum 60%",
      "Zero critical alerts without a runbook link",
      "Escalation policy documented and configured",
    ],
    outOfScope: [
      "New monitoring instrumentation",
      "Dashboard creation",
      "On-call scheduling tool migration",
    ],
    addOns: [
      { name: "Custom Grafana dashboard for alert metrics", price: "€490" },
      { name: "Monthly alert hygiene review (3 months)", price: "€290/mo" },
    ],
    faq: [
      {
        q: "Which monitoring tools do you support?",
        a: "Prometheus, Datadog, New Relic, CloudWatch, Grafana Alerting, PagerDuty, OpsGenie.",
      },
      {
        q: "Will you delete our existing alerts?",
        a: "No. We create a new cleaned configuration. Your existing rules stay untouched until you approve the changes.",
      },
      {
        q: "What if we have custom exporters?",
        a: "We work with whatever produces alerts. Custom exporters are fine — we audit the rules, not the sources.",
      },
      {
        q: "How do you determine what's noise?",
        a: "We analyze alert frequency, acknowledgement rates, resolution times, and correlation with actual incidents over the past 30 days.",
      },
    ],
  },
  {
    slug: "sre-foundations-kit",
    name: "SRE Foundations Kit",
    tagline: "From firefighting to engineering reliability.",
    category: "reliability",
    categoryLabel: "Reliability & SRE",
    tier: "core",
    tierLabel: "Core",
    timeline: "5–7 days",
    priceEur: "€4,900",
    pricePln: "20,900 PLN",
    icp: "Engineering leads building their first SRE practice",
    problem:
      "Your team reacts to every incident the same way — panic. No SLOs, no error budgets, no structured incident response. Reliability is a hope, not a practice.",
    description:
      "We build your SRE foundation: define SLOs and error budgets for your critical services, set up an incident management workflow, create on-call runbooks, and deliver a post-incident review template. You get a working reliability framework, not a slide deck.",
    deliverables: [
      "SLO definitions for up to 5 critical services (availability, latency, error rate)",
      "Error budget policy document",
      "Incident severity classification matrix (SEV1–SEV4)",
      "Incident response workflow (detection → triage → mitigation → review)",
      "On-call runbooks for top 10 failure scenarios",
      "Post-incident review template and process",
      "Team training walkthrough (90 min)",
    ],
    inputs: [
      "Access to monitoring/APM tools",
      "Architecture overview or service map",
      "List of critical services and their SLA commitments",
      "60-min kickoff call with engineering lead",
    ],
    definitionOfDone: [
      "SLOs defined and measurable in existing tooling",
      "Incident workflow documented and agreed upon",
      "Runbooks written and accessible to on-call team",
      "Training session completed",
    ],
    outOfScope: [
      "Monitoring tool setup or migration",
      "Automated remediation scripts",
      "SLO dashboard implementation (available as add-on)",
    ],
    addOns: [
      { name: "SLO monitoring dashboard (Grafana/Datadog)", price: "€1,900" },
      {
        name: "Automated incident Slack bot setup",
        price: "€1,200",
      },
      { name: "Quarterly SLO review retainer", price: "€990/quarter" },
    ],
    faq: [
      {
        q: "Do we need a dedicated SRE team to use this?",
        a: "No. This kit is designed for teams that don't have SREs yet. It works with your existing engineering team.",
      },
      {
        q: "What if we don't know our SLA commitments?",
        a: "We help you derive them from business requirements and historical uptime data during the kickoff.",
      },
      {
        q: "Can you implement this in our monitoring tool?",
        a: "The core kit focuses on definitions and processes. SLO dashboard implementation is available as an add-on.",
      },
      {
        q: "How long until we see results?",
        a: "You'll have a working incident workflow within the first week. SLO-driven decisions typically start showing impact within 4-6 weeks.",
      },
    ],
  },
  {
    slug: "observability-stack-deploy",
    name: "Observability Stack Deploy",
    tagline: "See everything. Miss nothing.",
    category: "reliability",
    categoryLabel: "Reliability & SRE",
    tier: "core",
    tierLabel: "Core",
    timeline: "5–7 days",
    priceEur: "€5,900",
    pricePln: "25,200 PLN",
    icp: "Teams with no centralized monitoring or fragmented observability",
    problem:
      "Your metrics are in one tool, logs in another, traces nowhere. When something breaks, you SSH into servers and grep logs. That's not observability — that's archaeology.",
    description:
      "We deploy a complete observability stack: metrics collection (Prometheus/VictoriaMetrics), log aggregation (Loki/Elasticsearch), distributed tracing (Tempo/Jaeger), and unified dashboards (Grafana). Everything as Infrastructure-as-Code, ready for production.",
    deliverables: [
      "Metrics pipeline: Prometheus or VictoriaMetrics with service discovery",
      "Log aggregation: Loki or Elasticsearch with structured logging",
      "Distributed tracing: Tempo or Jaeger with auto-instrumentation guidance",
      "Grafana dashboards: infrastructure overview, service health, golden signals",
      "Alert rules for critical infrastructure metrics",
      "IaC modules (Terraform/Helm) for the entire stack",
      "Runbook for stack maintenance and scaling",
    ],
    inputs: [
      "Cloud account access (AWS/GCP/Azure) or Kubernetes cluster",
      "List of services to instrument",
      "Current monitoring setup (if any)",
      "60-min kickoff with infrastructure lead",
    ],
    definitionOfDone: [
      "All three pillars (metrics, logs, traces) collecting data",
      "Minimum 3 dashboards operational in Grafana",
      "Alert rules firing correctly for critical metrics",
      "IaC modules committed to your repo",
    ],
    outOfScope: [
      "Application-level instrumentation (code changes)",
      "Custom business metrics dashboards",
      "24/7 monitoring or on-call coverage",
    ],
    addOns: [
      {
        name: "Application instrumentation (OpenTelemetry SDK setup, per service)",
        price: "€790/service",
      },
      { name: "Custom business KPI dashboard", price: "€1,200" },
    ],
    faq: [
      {
        q: "Do you support managed services like Datadog?",
        a: "This package focuses on open-source stacks. For Datadog/New Relic setup, contact us for a custom quote.",
      },
      {
        q: "What about storage costs?",
        a: "We configure retention policies and sampling to keep costs predictable. We'll provide a cost estimate during kickoff.",
      },
      {
        q: "Can this run on Kubernetes?",
        a: "Yes. The default deployment targets Kubernetes via Helm charts. We can also deploy on VMs with Docker Compose.",
      },
    ],
  },

  // ─── DELIVERY / CI-CD ────────────────────────────────────────
  {
    slug: "pipeline-forge",
    name: "Pipeline Forge",
    tagline: "Push code. Ship with confidence.",
    category: "delivery",
    categoryLabel: "Delivery & CI/CD",
    tier: "entry",
    tierLabel: "Entry",
    timeline: "1–2 days",
    priceEur: "€1,290",
    pricePln: "5,500 PLN",
    icp: "Dev teams deploying manually or with fragile CI scripts",
    problem:
      "Your deployments are manual, slow, and scary. The CI pipeline was written 3 years ago by someone who left. Nobody dares touch it.",
    description:
      "We build or rebuild your CI/CD pipeline from scratch. GitHub Actions, GitLab CI, or CircleCI — we deliver a production-ready pipeline with build, test, security scan, and deploy stages. Templated, documented, and fast.",
    deliverables: [
      "CI/CD pipeline configuration (build → test → scan → deploy)",
      "Environment-specific deployment configs (staging + production)",
      "Docker build optimization (multi-stage, layer caching)",
      "Pipeline documentation and troubleshooting guide",
      "PR-based deployment workflow",
    ],
    inputs: [
      "Access to source repository",
      "Target deployment platform (K8s, ECS, Cloud Run, etc.)",
      "Existing CI config (if any)",
      "30-min kickoff call",
    ],
    definitionOfDone: [
      "Pipeline runs successfully on merge to main",
      "Build time under 5 minutes (application-dependent)",
      "Deployment to staging automated on PR merge",
    ],
    outOfScope: [
      "Infrastructure provisioning",
      "Application code changes",
      "Production deployment approval workflows (available as add-on)",
    ],
    addOns: [
      {
        name: "Production deployment with manual approval gate",
        price: "€490",
      },
      { name: "Slack/Teams deployment notifications", price: "€290" },
      { name: "Pipeline for monorepo (per additional service)", price: "€690" },
    ],
    faq: [
      {
        q: "Which CI platforms do you support?",
        a: "GitHub Actions, GitLab CI, CircleCI, and Jenkins. GitHub Actions is our default recommendation.",
      },
      {
        q: "Can you set up pipelines for a monorepo?",
        a: "The base package covers one service. Monorepo pipelines with selective builds are available as an add-on.",
      },
      {
        q: "Do you handle infrastructure provisioning in the pipeline?",
        a: "The base package deploys to existing infrastructure. If you need Terraform in the pipeline, see our GitOps Kickstart package.",
      },
    ],
  },
  {
    slug: "gitops-kickstart",
    name: "GitOps Kickstart",
    tagline: "Git is your single source of truth.",
    category: "delivery",
    categoryLabel: "Delivery & CI/CD",
    tier: "core",
    tierLabel: "Core",
    timeline: "5–7 days",
    priceEur: "€4,900",
    pricePln: "20,900 PLN",
    icp: "Kubernetes teams ready to adopt GitOps but unsure where to start",
    problem:
      "You're running Kubernetes but deploying with kubectl apply and hope. Environment drift is real. Nobody knows what's actually running in production.",
    description:
      "We set up a full GitOps workflow with ArgoCD or Flux. Your infrastructure and application manifests live in Git. Every change goes through PR review. Environments stay in sync. Drift is detected and corrected automatically.",
    deliverables: [
      "ArgoCD or Flux installation and configuration",
      "Git repository structure for multi-environment manifests",
      "Application definitions for up to 5 services",
      "Environment promotion workflow (dev → staging → prod)",
      "Sealed Secrets or External Secrets Operator for secret management",
      "Drift detection and auto-sync configuration",
      "Team walkthrough and documentation",
    ],
    inputs: [
      "Kubernetes cluster access (admin)",
      "Git repository access",
      "Existing Kubernetes manifests or Helm charts",
      "60-min kickoff call with platform lead",
    ],
    definitionOfDone: [
      "ArgoCD/Flux operational and syncing all configured applications",
      "Environment promotion tested end-to-end",
      "Secrets management integrated",
      "Drift detection alerts configured",
    ],
    outOfScope: [
      "Kubernetes cluster provisioning",
      "Application containerization",
      "CI pipeline changes (see Pipeline Forge)",
    ],
    addOns: [
      {
        name: "Additional environment (per environment)",
        price: "€990",
      },
      { name: "Image automation (auto-update on new image)", price: "€790" },
    ],
    faq: [
      {
        q: "ArgoCD or Flux — which should we use?",
        a: "We recommend ArgoCD for teams that want a UI and multi-cluster support. Flux for teams that prefer pure Git-driven workflows. We'll advise during kickoff.",
      },
      {
        q: "Do we need Helm charts?",
        a: "Not necessarily. We work with plain manifests, Helm, or Kustomize — whatever your team already uses.",
      },
      {
        q: "What about secrets?",
        a: "The package includes Sealed Secrets or External Secrets Operator setup. Your secrets never appear in plain text in Git.",
      },
    ],
  },
  {
    slug: "release-engineering-sprint",
    name: "Release Engineering Sprint",
    tagline: "Deploy 10x more often. Break 10x less.",
    category: "delivery",
    categoryLabel: "Delivery & CI/CD",
    tier: "premium",
    tierLabel: "Premium",
    timeline: "8–12 days",
    priceEur: "€9,900",
    pricePln: "42,300 PLN",
    icp: "Scale-ups shipping weekly who want to ship daily with confidence",
    problem:
      "Releases take an entire afternoon. Feature branches live for weeks. Hotfixes bypass the pipeline. Every deploy is a gamble. Your release process is the bottleneck.",
    description:
      "Complete release engineering overhaul: trunk-based development workflow, automated canary or blue-green deployments, feature flags integration, environment management, and rollback automation. We transform your deployment from a ceremony into a non-event.",
    deliverables: [
      "Trunk-based development workflow and branching strategy",
      "Canary or blue-green deployment pipeline",
      "Feature flag integration (LaunchDarkly, Unleash, or Flipt)",
      "Automated rollback mechanism with health checks",
      "Environment management (ephemeral preview environments)",
      "Release dashboard and deployment metrics",
      "Deployment runbook and team training (2h session)",
      "Post-deployment smoke test automation",
    ],
    inputs: [
      "Full access to CI/CD platform and Kubernetes cluster",
      "Access to source repositories",
      "Current deployment documentation",
      "Architecture overview and service dependencies",
      "90-min kickoff workshop with engineering team",
    ],
    definitionOfDone: [
      "Automated canary/blue-green deployment working in production",
      "Feature flags operational for at least 2 features",
      "Rollback tested and completing in under 5 minutes",
      "Deployment frequency measurably increased",
    ],
    outOfScope: [
      "Application architecture refactoring",
      "Database migration automation",
      "Multi-region deployment",
    ],
    addOns: [
      { name: "Database migration pipeline", price: "€2,900" },
      { name: "Multi-region deployment extension", price: "€4,900" },
      { name: "Load testing integration", price: "€1,900" },
    ],
    faq: [
      {
        q: "Do we need Kubernetes for this?",
        a: "Canary/blue-green is most effective on Kubernetes. We can adapt for ECS or Cloud Run, but some features may be limited.",
      },
      {
        q: "What about database migrations during deployments?",
        a: "The base package handles application deployments. Database migration automation is available as an add-on.",
      },
      {
        q: "How many services can you cover?",
        a: "The base package covers up to 3 services. Additional services are priced individually.",
      },
    ],
  },

  // ─── CLOUD COST / FINOPS ─────────────────────────────────────
  {
    slug: "cloud-cost-xray",
    name: "Cloud Cost X-Ray",
    tagline: "Find the waste. Keep the value.",
    category: "cost",
    categoryLabel: "Cloud Cost & FinOps",
    tier: "entry",
    tierLabel: "Entry",
    timeline: "1 day",
    priceEur: "€690",
    pricePln: "2,900 PLN",
    icp: "CTOs and engineering managers shocked by the last cloud bill",
    problem:
      "Your cloud bill grows 20% every quarter but your traffic didn't. Orphaned resources, oversized instances, and unused storage eat your margins. You don't know where the money goes.",
    description:
      "One-day deep dive into your cloud spend. We analyze your AWS, GCP, or Azure billing data, identify the top waste areas, and deliver a prioritized list of savings actions with estimated impact. No tools to install, no agents to deploy.",
    deliverables: [
      "Cloud spend breakdown by service, team, and environment",
      "Top 10 savings opportunities ranked by impact",
      "Quick wins checklist (implementable in 1 week)",
      "Cost anomaly identification (unexpected spikes)",
      "Executive summary with total savings potential",
    ],
    inputs: [
      "Read-only access to cloud billing console or Cost Explorer",
      "30-min kickoff call",
    ],
    definitionOfDone: [
      "Report delivered with minimum 10 actionable savings items",
      "Estimated savings potential quantified in EUR/month",
      "Quick wins clearly marked and implementable by your team",
    ],
    outOfScope: [
      "Implementing the savings (see Right-Size Sprint)",
      "Reserved instance / savings plan purchasing",
      "Multi-cloud consolidated analysis",
    ],
    addOns: [
      {
        name: "Implementation of top 5 quick wins",
        price: "€1,900",
      },
      {
        name: "Monthly cost review (3 months)",
        price: "€490/mo",
      },
    ],
    faq: [
      {
        q: "Which clouds do you support?",
        a: "AWS, GCP, and Azure. We can analyze one cloud per engagement.",
      },
      {
        q: "Do you need admin access?",
        a: "No. Read-only billing/cost access is sufficient. We never modify your infrastructure.",
      },
      {
        q: "What kind of savings can we expect?",
        a: "Typical findings range from 15-40% of total spend. Results depend on your current optimization level.",
      },
      {
        q: "Is our billing data safe?",
        a: "We analyze data in your environment or via screen-shared sessions. We don't export or store your billing data.",
      },
    ],
  },
  {
    slug: "finops-dashboard-pack",
    name: "FinOps Dashboard Pack",
    tagline: "Cost visibility for every team, every day.",
    category: "cost",
    categoryLabel: "Cloud Cost & FinOps",
    tier: "core",
    tierLabel: "Core",
    timeline: "5–7 days",
    priceEur: "€4,900",
    pricePln: "20,900 PLN",
    icp: "Engineering orgs scaling cloud spend past €10k/month",
    problem:
      "Finance asks engineering about cloud costs. Engineering shrugs. Nobody owns cost allocation. Tagging is inconsistent. Budget alerts don't exist.",
    description:
      "We build a complete FinOps visibility layer: cost allocation dashboards by team/service/environment, budget alerts, anomaly detection, and a tagging strategy that makes cost ownership clear. Built on your existing cloud tools or Grafana.",
    deliverables: [
      "Cost allocation tagging strategy and implementation guide",
      "Dashboard: total spend, trend, forecast",
      "Dashboard: cost by team/service/environment",
      "Budget alerts (per team, per environment)",
      "Cost anomaly detection rules",
      "Monthly cost report template",
      "FinOps process documentation (who owns what)",
    ],
    inputs: [
      "Cloud billing API access",
      "Team/service ownership mapping",
      "Current tagging conventions (if any)",
      "60-min kickoff call",
    ],
    definitionOfDone: [
      "Dashboards operational with live cost data",
      "Budget alerts triggering correctly",
      "Tagging strategy documented and applied to top resources",
    ],
    outOfScope: [
      "Cost optimization implementation",
      "Reserved instance purchasing",
      "Custom FinOps tooling development",
    ],
    addOns: [
      { name: "Slack cost digest bot (daily/weekly)", price: "€790" },
      { name: "Terraform tagging enforcement module", price: "€990" },
    ],
    faq: [
      {
        q: "Do we need a FinOps tool like Kubecost?",
        a: "Not required. We build on native cloud cost tools and Grafana. If you have Kubecost, we integrate with it.",
      },
      {
        q: "Can you split costs by Kubernetes namespace?",
        a: "Yes, with Kubecost or Prometheus cost metrics. We set this up as part of the package.",
      },
    ],
  },
  {
    slug: "infrastructure-right-size-sprint",
    name: "Infrastructure Right-Size Sprint",
    tagline: "Same performance. Smaller bill.",
    category: "cost",
    categoryLabel: "Cloud Cost & FinOps",
    tier: "premium",
    tierLabel: "Premium",
    timeline: "8–12 days",
    priceEur: "€8,900",
    pricePln: "38,000 PLN",
    icp: "Teams spending €20k+/month on cloud with no optimization practice",
    problem:
      "Your instances are sized for peak traffic from 2 years ago. Dev environments run 24/7. Nobody touched the RDS instance type since launch. You're paying for capacity you don't use.",
    description:
      "Hands-on optimization sprint: we analyze utilization data, right-size compute and databases, implement scheduling for non-production, clean up orphaned resources, and update your IaC to reflect the changes. Real savings, not just a report.",
    deliverables: [
      "Resource utilization analysis (compute, storage, databases)",
      "Right-sizing recommendations with before/after comparison",
      "Implementation of approved changes via IaC (Terraform/Pulumi)",
      "Non-production environment scheduling (stop/start automation)",
      "Orphaned resource cleanup",
      "Savings tracking dashboard",
      "Post-optimization report with realized savings",
    ],
    inputs: [
      "Cloud account access (with modification permissions)",
      "IaC repository access (Terraform/Pulumi)",
      "Utilization data (CloudWatch/Stackdriver, 30+ days)",
      "90-min kickoff with infrastructure owner",
    ],
    definitionOfDone: [
      "Minimum 20% cost reduction realized within 30 days",
      "All changes committed as IaC",
      "No performance degradation (validated with monitoring)",
    ],
    outOfScope: [
      "Architecture redesign",
      "Application-level optimization",
      "Reserved instance / savings plan negotiation",
    ],
    addOns: [
      { name: "Reserved instance / savings plan analysis", price: "€1,900" },
      {
        name: "Spot instance integration for batch workloads",
        price: "€2,400",
      },
    ],
    faq: [
      {
        q: "What if right-sizing breaks our application?",
        a: "We validate all changes in staging first and monitor production closely post-change. We include rollback plans for every modification.",
      },
      {
        q: "Do you guarantee savings?",
        a: "We target minimum 20% reduction. If we can't find at least 15% savings potential in the initial analysis, we refund the engagement fee.",
      },
    ],
  },

  // ─── SECURITY / HARDENING ────────────────────────────────────
  {
    slug: "container-hardening-kit",
    name: "Container Hardening Kit",
    tagline: "Lock it down before they get in.",
    category: "security",
    categoryLabel: "Security & Hardening",
    tier: "core",
    tierLabel: "Core",
    timeline: "3–5 days",
    priceEur: "€3,900",
    pricePln: "16,600 PLN",
    icp: "Kubernetes teams that haven't addressed container security yet",
    problem:
      "Your containers run as root. Images pull from public registries without scanning. Network policies don't exist. One compromised pod means game over.",
    description:
      "We harden your Kubernetes workloads: implement pod security standards, add image scanning to your pipeline, configure network policies, set up RBAC, and create a baseline security policy. Everything as code, everything auditable.",
    deliverables: [
      "Pod Security Standards (restricted baseline) implementation",
      "Image scanning in CI/CD pipeline (Trivy/Grype)",
      "Network policies for namespace isolation",
      "RBAC review and least-privilege configuration",
      "Security baseline documentation",
      "Compliance checklist (CIS Kubernetes Benchmark alignment)",
    ],
    inputs: [
      "Kubernetes cluster admin access",
      "CI/CD pipeline access",
      "Current RBAC configuration",
      "45-min kickoff call with platform/security lead",
    ],
    definitionOfDone: [
      "Pod Security Standards enforced across all namespaces",
      "Image scanning blocking critical vulnerabilities in pipeline",
      "Network policies applied to all production namespaces",
      "RBAC follows least-privilege principle",
    ],
    outOfScope: [
      "Application security testing (SAST/DAST)",
      "Compliance certification",
      "Runtime security monitoring (Falco, etc.)",
    ],
    addOns: [
      {
        name: "Runtime security with Falco",
        price: "€2,400",
      },
      { name: "OPA/Gatekeeper policy engine setup", price: "€1,900" },
    ],
    faq: [
      {
        q: "Will this break our running workloads?",
        a: "We implement in audit/warn mode first, validate, then enforce. No surprise breakages.",
      },
      {
        q: "Do you handle compliance certifications?",
        a: "We align with CIS benchmarks but don't provide certification. The compliance checklist supports your audit process.",
      },
      {
        q: "What about service mesh security?",
        a: "Service mesh (Istio/Linkerd) is out of scope for this package but available as a separate engagement.",
      },
    ],
  },
  {
    slug: "secrets-vault-setup",
    name: "Secrets Vault Setup",
    tagline: "No more secrets in environment variables.",
    category: "security",
    categoryLabel: "Security & Hardening",
    tier: "core",
    tierLabel: "Core",
    timeline: "5–7 days",
    priceEur: "€4,900",
    pricePln: "20,900 PLN",
    icp: "Teams storing secrets in .env files, config maps, or CI variables",
    problem:
      "Your database passwords live in environment variables. API keys are hardcoded in config files. Secret rotation is manual. One leaked .env file and you're in the news.",
    description:
      "We deploy and configure a secrets management solution: HashiCorp Vault, AWS Secrets Manager, or GCP Secret Manager. We integrate it with your applications and Kubernetes, set up rotation policies, and migrate your existing secrets out of insecure storage.",
    deliverables: [
      "Secrets management platform deployment (Vault or cloud-native)",
      "Integration with Kubernetes (External Secrets Operator / CSI driver)",
      "Secret rotation policies for database credentials",
      "Migration of existing secrets from env vars / config maps",
      "Access policies and audit logging configuration",
      "Runbook for secret management operations",
      "Team training on secrets workflow",
    ],
    inputs: [
      "Cloud/cluster admin access",
      "Inventory of current secrets and their locations",
      "Application deployment method (Helm, Kustomize, etc.)",
      "60-min kickoff call",
    ],
    definitionOfDone: [
      "All production secrets migrated to vault/secrets manager",
      "Applications consuming secrets from the new source",
      "Rotation policy configured for database credentials",
      "Audit logging operational",
    ],
    outOfScope: [
      "PKI / certificate management",
      "Secrets in third-party SaaS tools",
      "Custom application code changes for secret consumption",
    ],
    addOns: [
      { name: "PKI and certificate management (Vault PKI)", price: "€2,900" },
      {
        name: "Dynamic database credentials",
        price: "€1,900",
      },
    ],
    faq: [
      {
        q: "HashiCorp Vault or cloud-native — which is better?",
        a: "Cloud-native (AWS SM, GCP SM) for simpler setups. Vault for multi-cloud, advanced policies, or dynamic secrets. We recommend during kickoff.",
      },
      {
        q: "Will our applications need code changes?",
        a: "Usually not. We use Kubernetes-native injection (External Secrets Operator) so your apps read secrets the same way they read env vars.",
      },
      {
        q: "What about secrets in CI/CD?",
        a: "We configure your CI/CD to pull secrets from the vault instead of storing them as pipeline variables.",
      },
    ],
  },
  {
    slug: "platform-self-service-builder",
    name: "Platform Self-Service Builder",
    tagline: "Let developers ship without tickets.",
    category: "security",
    categoryLabel: "Security & Hardening",
    tier: "premium",
    tierLabel: "Premium",
    timeline: "10–15 days",
    priceEur: "€14,900",
    pricePln: "63,600 PLN",
    icp: "Platform teams tired of being the bottleneck for every dev request",
    problem:
      "Developers wait days for a new environment. Creating a service requires 5 Jira tickets. The platform team is a human API. You can't scale people, but you can scale self-service.",
    description:
      "We build your internal developer platform: service templates (golden paths), self-service environment creation, standardized deployment configs, and a developer portal. Developers get autonomy. Platform teams get guardrails. Everyone ships faster.",
    deliverables: [
      "Service template system (cookiecutter / Backstage templates)",
      "Self-service environment provisioning (Terraform modules)",
      "Developer portal (Backstage or lightweight custom)",
      "Golden path documentation for creating new services",
      "Platform API or CLI for common operations",
      "RBAC and guardrails for self-service actions",
      "Onboarding guide for developers",
      "Platform team runbook",
    ],
    inputs: [
      "Kubernetes and cloud admin access",
      "IaC repository access",
      "Current service creation process documentation",
      "Architecture overview and tech stack list",
      "2h kickoff workshop with platform and dev team leads",
    ],
    definitionOfDone: [
      "Developers can create a new service from template in under 10 minutes",
      "Self-service environment creation working",
      "At least 2 golden path templates operational",
      "Developer portal accessible with service catalog",
    ],
    outOfScope: [
      "Application architecture redesign",
      "CI/CD pipeline changes for existing services",
      "Service mesh implementation",
    ],
    addOns: [
      { name: "Additional golden path template (per template)", price: "€2,400" },
      {
        name: "Backstage plugin development (custom)",
        price: "€3,900",
      },
      { name: "Developer experience survey and analysis", price: "€1,200" },
    ],
    faq: [
      {
        q: "Do we need Backstage?",
        a: "Not necessarily. For smaller teams (<30 devs), a lightweight portal or CLI might be more practical. We evaluate during kickoff.",
      },
      {
        q: "How many golden paths do we get?",
        a: "The base package includes 2 golden path templates (e.g., backend API + frontend app). Additional templates are available as add-ons.",
      },
      {
        q: "What if our stack is non-standard?",
        a: "We work with your stack. Templates are customized to your languages, frameworks, and deployment targets.",
      },
      {
        q: "How long until developers adopt it?",
        a: "Adoption depends on your team culture. We include an onboarding guide and recommend a phased rollout starting with one team.",
      },
    ],
  },
];

export const retainers: Retainer[] = [
  {
    slug: "sre-oncall-booster",
    name: "SRE On-Call Booster",
    tagline: "Expert SRE backup for your on-call team.",
    priceEur: "€2,900/mo",
    pricePln: "12,400 PLN/mo",
    includes: [
      "40 hours/month of SRE support",
      "Incident response assistance during business hours",
      "Weekly alert review and tuning",
      "Monthly reliability report",
      "Slack channel for async support",
    ],
    idealFor:
      "Teams with an on-call rotation that need expert backup and continuous reliability improvement.",
  },
  {
    slug: "platform-reliability-care",
    name: "Platform Reliability Care",
    tagline: "We keep your platform running so you can keep building.",
    priceEur: "€4,900/mo",
    pricePln: "20,900 PLN/mo",
    includes: [
      "80 hours/month of platform engineering support",
      "Proactive infrastructure monitoring and tuning",
      "Monthly security patching and updates",
      "Quarterly architecture review",
      "Priority incident response (4h SLA)",
      "Monthly cost optimization review",
    ],
    idealFor:
      "Scale-ups without a dedicated platform team that need continuous infrastructure care.",
  },
  {
    slug: "devops-acceleration",
    name: "DevOps Acceleration Retainer",
    tagline: "A senior DevOps engineer, on demand.",
    priceEur: "€7,900/mo",
    pricePln: "33,700 PLN/mo",
    includes: [
      "Dedicated senior DevOps engineer (part-time embedded)",
      "120 hours/month of engineering capacity",
      "Infrastructure design and implementation",
      "CI/CD pipeline development and optimization",
      "Team mentoring and knowledge transfer",
      "Weekly sync and monthly planning",
    ],
    idealFor:
      "Engineering teams that need senior DevOps capacity without a full-time hire commitment.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByTier(tier: ProductTier): Product[] {
  return products.filter((p) => p.tier === tier);
}

export function getFeaturedProducts(): Product[] {
  return [
    products.find((p) => p.slug === "pipeline-forge")!,
    products.find((p) => p.slug === "sre-foundations-kit")!,
    products.find((p) => p.slug === "cloud-cost-xray")!,
  ];
}
