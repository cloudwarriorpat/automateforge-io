export type ProductCategory =
  | "platform"
  | "compliance"
  | "delivery"
  | "reliability"
  | "ai";

export type ProductTier = "entry" | "core" | "premium";

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
  icp: string;
  problem: string;
  description: string;
  deliverables: string[];
  inputs: string[];
  definitionOfDone: string[];
  outOfScope: string[];
  faq: ProductFAQ[];
}

export interface Retainer {
  slug: string;
  name: string;
  tagline: string;
  includes: string[];
  idealFor: string;
}

export const categoryMeta: Record<
  ProductCategory,
  { label: string; description: string; icon: string }
> = {
  platform: {
    label: "Developer Platform",
    description:
      "Build the internal developer platform your engineers actually want to use. Self-service, golden paths, and developer portals.",
    icon: "layers",
  },
  compliance: {
    label: "Compliance & Governance",
    description:
      "Meet NIS2, DORA, and EU AI Act requirements with automation — not spreadsheets. Policy-as-code, audit trails, and continuous compliance.",
    icon: "shield-check",
  },
  delivery: {
    label: "Engineering Delivery",
    description:
      "Ship faster with automated pipelines, GitOps workflows, and release engineering that turns deploys into non-events.",
    icon: "rocket",
  },
  reliability: {
    label: "Reliability & Observability",
    description:
      "See everything, fix faster, sleep better. SRE foundations, full-stack observability, and alert management that works.",
    icon: "activity",
  },
  ai: {
    label: "AI Infrastructure",
    description:
      "Deploy AI and LLM workloads to production with governance, cost control, and EU AI Act foundations built in.",
    icon: "brain",
  },
};

// ─────────────────────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────────────────────

export const products: Product[] = [
  // ═══ DEVELOPER PLATFORM ════════════════════════════════════

  {
    slug: "platform-maturity-assessment",
    name: "Platform Maturity Assessment",
    tagline: "Know exactly where you stand — and what to build next.",
    category: "platform",
    categoryLabel: "Developer Platform",
    tier: "entry",
    tierLabel: "Assessment",
    timeline: "2 days",
    icp: "CTOs, VPs of Engineering, and Platform team leads evaluating their platform engineering strategy",
    problem:
      "You know you need an internal platform, but you're unsure where to start — or why your current approach isn't gaining traction. Without a clear picture of maturity gaps, you risk investing in the wrong areas.",
    description:
      "A structured 2-day assessment that maps your current platform capabilities against the CNCF Platform Engineering Maturity Model. We interview key stakeholders, audit your tooling and workflows, and deliver a prioritized roadmap with concrete next steps — not a 60-page slide deck.",
    deliverables: [
      "Current-state maturity score across 5 CNCF dimensions (Provisioning, Security, Delivery, Observability, Developer Experience)",
      "Gap analysis with risk-weighted priorities",
      "90-day platform roadmap with phased initiatives",
      "Technology recommendations aligned with your existing stack",
      "Executive summary for leadership buy-in",
      "30-minute readout and Q&A session",
    ],
    inputs: [
      "Architecture diagrams or service map",
      "Access to 3–5 engineering leaders for 45-min interviews",
      "Current tooling and infrastructure inventory",
      "60-min kickoff call",
    ],
    definitionOfDone: [
      "Maturity score established across all 5 dimensions",
      "Top 3 platform priorities identified and validated with stakeholders",
      "90-day roadmap delivered with effort estimates",
    ],
    outOfScope: [
      "Implementation of any recommendations",
      "Tool evaluation PoCs or benchmarks",
      "Organizational redesign or hiring plans",
    ],
    faq: [
      {
        q: "How is this different from a typical consulting discovery?",
        a: "Fixed scope, 2 days, concrete output. You get a roadmap, not an engagement proposal for more discovery.",
      },
      {
        q: "What if we already have a platform team?",
        a: "Even better. We assess what's working, what's not, and where to invest next. Most platform teams have blind spots — we help surface them.",
      },
      {
        q: "Do you use the CNCF maturity model?",
        a: "Yes. It's the industry standard and gives you a common language for communicating platform progress to leadership.",
      },
      {
        q: "What happens after the assessment?",
        a: "You get a standalone roadmap you can execute yourself. If you want us to help implement, we'll scope specific packages from that roadmap.",
      },
    ],
  },

  {
    slug: "golden-path-builder",
    name: "Golden Path Builder",
    tagline: "Make the right way the easy way.",
    category: "platform",
    categoryLabel: "Developer Platform",
    tier: "core",
    tierLabel: "Core",
    timeline: "7–10 days",
    icp: "Platform teams and engineering orgs with 20+ developers where every team builds services differently",
    problem:
      "Every team creates services differently. Onboarding takes weeks because there's no standard way to scaffold a project, configure CI/CD, or provision infrastructure. Developers reinvent the wheel — and often get it wrong.",
    description:
      "We build 2–3 production-ready service templates (golden paths) that codify your best practices. Each golden path includes project scaffolding, CI/CD pipeline templates, infrastructure-as-code, and documentation. New services go from zero to deployed in under 10 minutes.",
    deliverables: [
      "2–3 service templates with project scaffolding (cookiecutter or custom CLI)",
      "CI/CD pipeline template per golden path (GitHub Actions / GitLab CI)",
      "Infrastructure templates (Terraform or Crossplane) per golden path",
      "Developer documentation and quickstart guide",
      "Onboarding walkthrough for engineering teams",
    ],
    inputs: [
      "Tech stack inventory (languages, frameworks, databases)",
      "Deployment target (Kubernetes, Cloud Run, ECS, etc.)",
      "Current service creation process (if any)",
      "Access to source repos and CI/CD platform",
      "60-min kickoff with platform and dev leads",
    ],
    definitionOfDone: [
      "New service creatable from template in under 10 minutes",
      "CI/CD pipeline running on first push from template",
      "Infrastructure provisioned automatically from template",
      "Documentation reviewed and approved by dev team",
    ],
    outOfScope: [
      "Developer portal UI (see Developer Portal Implementation)",
      "Migration of existing services to golden paths",
      "Infrastructure cluster provisioning",
    ],
    faq: [
      {
        q: "What languages and frameworks do you support?",
        a: "We work with your stack. Common golden paths: Go/gRPC microservice, Node/TypeScript API, Python ML service, React frontend. We customize to your needs.",
      },
      {
        q: "How do golden paths differ from boilerplate?",
        a: "Golden paths include the full lifecycle: scaffolding + CI/CD + infrastructure + documentation. They encode your organization's decisions, not just code structure.",
      },
      {
        q: "Can we modify the templates after delivery?",
        a: "Absolutely. You own everything. Templates are designed to be forked and evolved by your platform team.",
      },
      {
        q: "Do we need Backstage for this?",
        a: "No. Golden paths work with or without a developer portal. If you want a portal, see our Developer Portal Implementation package.",
      },
    ],
  },

  {
    slug: "developer-portal-implementation",
    name: "Developer Portal Implementation",
    tagline: "One place to find everything. Finally.",
    category: "platform",
    categoryLabel: "Developer Platform",
    tier: "core",
    tierLabel: "Core",
    timeline: "7–10 days",
    icp: "Platform teams wanting a service catalog and central developer hub",
    problem:
      "Developers can't find anything. Services, APIs, documentation, runbooks — scattered across wikis, repos, and Slack channels. Discoverability is zero. New engineers take weeks to become productive.",
    description:
      "We deploy and configure a developer portal (Backstage, Port, or alternative) with your service catalog populated, TechDocs integrated, authentication configured, and up to 2 custom plugins. Your developers get one place to find services, documentation, and self-service actions.",
    deliverables: [
      "Developer portal deployment (Backstage or Port)",
      "Service catalog populated with existing services (up to 25)",
      "TechDocs integration for documentation rendering",
      "SSO/authentication setup (OIDC, SAML, or GitHub)",
      "Up to 2 custom plugins or integrations",
      "Admin documentation and maintenance guide",
      "Team onboarding walkthrough",
    ],
    inputs: [
      "SSO / identity provider access",
      "Service inventory (names, repos, owners)",
      "CI/CD access for TechDocs pipeline",
      "2h kickoff workshop with platform and dev leads",
    ],
    definitionOfDone: [
      "Portal deployed, accessible, and authenticated via SSO",
      "Minimum 15 services cataloged and discoverable",
      "TechDocs rendering for at least 5 services",
      "Custom plugins functional and documented",
    ],
    outOfScope: [
      "Custom plugin development beyond 2 integrations",
      "Self-service infrastructure provisioning (see Internal Developer Platform)",
      "Portal hosting and ongoing maintenance (retainer available)",
    ],
    faq: [
      {
        q: "Backstage or Port — which do you recommend?",
        a: "Backstage for teams that want full customization and open-source. Port for teams that want faster setup and managed infrastructure. We'll advise during kickoff.",
      },
      {
        q: "We tried Backstage and it didn't stick. Can you help?",
        a: "Yes. Low adoption usually means the portal lacks value beyond a catalog. We focus on making it genuinely useful — not just pretty.",
      },
      {
        q: "How long does adoption take?",
        a: "We've seen teams reach 80% portal usage within 6 weeks when the catalog is accurate and TechDocs are populated. The key is launching with real data, not empty templates.",
      },
      {
        q: "Can you connect it to our existing tools?",
        a: "The 2 included plugins cover common integrations: PagerDuty, ArgoCD, Kubernetes, GitHub, GitLab, Jira, etc. Additional integrations are scoped separately.",
      },
    ],
  },

  {
    slug: "internal-developer-platform",
    name: "Internal Developer Platform",
    tagline: "Let developers ship without tickets.",
    category: "platform",
    categoryLabel: "Developer Platform",
    tier: "premium",
    tierLabel: "Premium",
    timeline: "15–25 days",
    icp: "Engineering orgs (50–200+ devs) where the platform team is the bottleneck for every infrastructure request",
    problem:
      "Developers wait days for a new environment. Creating a service requires 5 Jira tickets across 3 teams. The platform team is a human API. You can't scale people — but you can scale self-service.",
    description:
      "We build your Internal Developer Platform end-to-end: self-service infrastructure provisioning via Crossplane or Terraform, golden path templates, developer portal, environment management, and guardrails. Developers get autonomy. Platform teams get control. Everyone ships faster.",
    deliverables: [
      "Self-service infrastructure provisioning (Crossplane or Terraform modules)",
      "2–3 golden path service templates with full lifecycle automation",
      "Developer portal (Backstage) with service catalog and self-service actions",
      "Environment management (dev, staging, production + ephemeral preview)",
      "RBAC and policy guardrails (OPA/Kyverno)",
      "Platform API or CLI for common developer operations",
      "Onboarding documentation and developer quickstart",
      "Platform team runbook and operational guide",
      "2h team training session",
    ],
    inputs: [
      "Kubernetes and cloud admin access",
      "IaC repository access",
      "Current service creation and environment request process",
      "Architecture overview, tech stack list, service dependency map",
      "2h kickoff workshop with platform team, dev leads, and engineering management",
    ],
    definitionOfDone: [
      "Developers can create a new service from template in under 10 minutes",
      "Self-service environment provisioning operational without platform team involvement",
      "At least 2 golden path templates working end-to-end",
      "Developer portal accessible with service catalog and self-service actions",
      "RBAC and guardrails enforced — no unapproved infrastructure changes",
    ],
    outOfScope: [
      "Application architecture redesign or microservices migration",
      "CI/CD pipeline changes for existing services (see Pipeline Forge)",
      "Service mesh implementation",
      "24/7 platform operations (retainer available)",
    ],
    faq: [
      {
        q: "Do we need Kubernetes?",
        a: "The full IDP experience works best on Kubernetes. For teams on ECS or Cloud Run, we adapt the self-service layer but some features may be limited.",
      },
      {
        q: "Crossplane or Terraform — which do you use?",
        a: "Crossplane for Kubernetes-native teams that want declarative cloud resources. Terraform/OpenTofu for teams with existing IaC. We use what fits your context.",
      },
      {
        q: "How many golden paths do we get?",
        a: "The base package includes 2–3 templates. Additional golden paths are available as follow-on work.",
      },
      {
        q: "What about existing services?",
        a: "New services use golden paths immediately. Migrating existing services is phased separately to avoid disruption.",
      },
      {
        q: "How long until developers actually adopt it?",
        a: "Early adopter teams typically onboard in week 1. Org-wide adoption depends on your rollout strategy — we include an onboarding guide to support it.",
      },
    ],
  },

  // ═══ COMPLIANCE & GOVERNANCE ═══════════════════════════════

  {
    slug: "compliance-gap-assessment",
    name: "Compliance Gap Assessment",
    tagline: "Know your gaps before regulators find them.",
    category: "compliance",
    categoryLabel: "Compliance & Governance",
    tier: "entry",
    tierLabel: "Assessment",
    timeline: "2 days",
    icp: "CTOs, compliance officers, and engineering leads at companies subject to NIS2 or DORA",
    problem:
      "NIS2 is being enforced across EU member states. DORA is in force since January 2025. You know these regulations apply to you — but you don't know how far you are from compliance, or where to focus first.",
    description:
      "A rapid 2-day assessment of your infrastructure and engineering practices against NIS2 and/or DORA requirements. We identify gaps, score risk by area, and deliver a prioritized remediation roadmap with effort estimates. No legal fluff — just engineering-actionable findings.",
    deliverables: [
      "Gap analysis against NIS2 and/or DORA technical requirements",
      "Risk scoring by compliance area (critical / high / medium / low)",
      "Prioritized remediation roadmap with effort estimates",
      "Quick wins list (implementable within 2 weeks)",
      "Executive briefing document",
      "30-minute readout session",
    ],
    inputs: [
      "Architecture overview and infrastructure documentation",
      "Current security policies and incident response procedures",
      "Read-only access to infrastructure for automated scanning",
      "60-min kickoff with engineering and compliance leads",
    ],
    definitionOfDone: [
      "All compliance areas assessed and risk-scored",
      "Top 5 critical gaps identified with remediation paths",
      "Roadmap delivered with phased timeline",
    ],
    outOfScope: [
      "Remediation implementation (scoped separately per finding)",
      "Legal interpretation or regulatory advisory",
      "Certification or audit preparation",
      "Penetration testing",
    ],
    faq: [
      {
        q: "Do you cover NIS2 or DORA or both?",
        a: "Both if applicable. Many organizations — especially fintechs — face overlapping requirements. We map the common controls to avoid duplicate effort.",
      },
      {
        q: "Is this a legal assessment?",
        a: "No. This is a technical engineering assessment. We evaluate your infrastructure, processes, and tooling against the technical requirements. For legal interpretation, work with your legal counsel.",
      },
      {
        q: "What about GDPR?",
        a: "We focus on NIS2 and DORA technical requirements. GDPR overlaps in data protection areas — we flag those but don't provide a dedicated GDPR assessment.",
      },
      {
        q: "Can you also fix what you find?",
        a: "Yes. The assessment produces a roadmap. From there, we scope specific remediation packages — NIS2 Compliance Kit, DORA Resilience Automation, or custom work.",
      },
    ],
  },

  {
    slug: "nis2-compliance-kit",
    name: "NIS2 Platform Compliance Kit",
    tagline: "Compliance baked into your platform, not bolted on.",
    category: "compliance",
    categoryLabel: "Compliance & Governance",
    tier: "core",
    tierLabel: "Core",
    timeline: "7–10 days",
    icp: "Engineering teams at NIS2-regulated entities (energy, healthcare, digital infrastructure, manufacturing, transport)",
    problem:
      "NIS2 requires supply chain governance, incident reporting within 24 hours, continuous risk management, and tamper-evident audit trails. Your infrastructure supports none of this automatically. Compliance is manual, inconsistent, and audit-risky.",
    description:
      "We implement NIS2 technical controls directly into your platform: policy-as-code enforcement, automated compliance scanning in CI/CD, immutable audit trail logging, incident detection and alerting workflows, asset inventory automation, and a compliance dashboard. Compliance becomes a platform feature, not a checkbox exercise.",
    deliverables: [
      "Policy-as-code rules (OPA or Kyverno) for NIS2 security baselines",
      "Automated compliance scanning integrated into CI/CD pipelines",
      "Immutable audit trail logging for all infrastructure changes",
      "Incident detection and alerting workflow (24h reporting readiness)",
      "Asset inventory automation (cloud resources, services, dependencies)",
      "Compliance posture dashboard (Grafana or cloud-native)",
      "Incident reporting runbook aligned with NIS2 timelines",
      "Documentation and team walkthrough",
    ],
    inputs: [
      "Kubernetes cluster admin access",
      "CI/CD platform access",
      "Cloud account access (AWS/GCP/Azure)",
      "Current security policies and incident procedures",
      "90-min kickoff with engineering and security leads",
    ],
    definitionOfDone: [
      "Policy-as-code enforcing NIS2 security baselines across all namespaces",
      "Audit trail capturing all infrastructure and deployment changes",
      "Incident alerting triggering within 15 minutes of detection",
      "Compliance dashboard operational with real-time posture view",
      "Asset inventory generated and validated",
    ],
    outOfScope: [
      "Legal interpretation or regulatory filings",
      "Certification or formal audit preparation",
      "Application-level security testing (SAST/DAST)",
      "Penetration testing",
      "Organizational policy writing",
    ],
    faq: [
      {
        q: "Does this make us NIS2 compliant?",
        a: "It implements the key technical controls. Full compliance also requires organizational measures, risk management processes, and governance — areas where we partner with your compliance team.",
      },
      {
        q: "Which policy engine do you use?",
        a: "OPA/Gatekeeper for Kubernetes-native enforcement. Kyverno as an alternative for simpler policy sets. We recommend based on your team's experience.",
      },
      {
        q: "Can this work alongside our existing security tooling?",
        a: "Yes. We integrate with your existing SIEM, alerting, and monitoring tools. We add capabilities, not replace what's working.",
      },
      {
        q: "What about supply chain security?",
        a: "The kit includes SBOM generation and image signing foundations. Full supply chain governance is available as follow-on work.",
      },
    ],
  },

  {
    slug: "dora-resilience-automation",
    name: "DORA Resilience Automation",
    tagline: "Prove resilience with automation, not paperwork.",
    category: "compliance",
    categoryLabel: "Compliance & Governance",
    tier: "core",
    tierLabel: "Core",
    timeline: "7–10 days",
    icp: "Fintech, banking, insurance companies, and their ICT service providers subject to DORA",
    problem:
      "DORA is in force since January 2025. It requires tested failover with measured RTO/RPO, automated incident detection and classification, ICT asset registers, and third-party risk visibility. Most of this is manual, undocumented, or untested.",
    description:
      "We implement DORA technical requirements into your infrastructure: resilience testing automation, RTO/RPO measurement, incident detection and classification workflows, ICT asset register generation, third-party dependency mapping, and compliance dashboards. You get provable resilience, not just documentation.",
    deliverables: [
      "Resilience testing framework (controlled failure injection for critical paths)",
      "RTO/RPO measurement automation for critical services",
      "Incident detection and severity classification workflow",
      "ICT asset register automation (services, dependencies, third parties)",
      "Third-party ICT dependency mapping and risk scoring",
      "DORA compliance dashboard with evidence collection",
      "DORA incident reporting templates and runbook",
      "Documentation and team walkthrough",
    ],
    inputs: [
      "Infrastructure admin access",
      "Service dependency map (or we'll help build one)",
      "Current disaster recovery and incident response procedures",
      "List of critical business services and third-party ICT providers",
      "90-min kickoff with infrastructure, security, and compliance leads",
    ],
    definitionOfDone: [
      "Resilience tests executable on demand for critical services",
      "RTO and RPO measured and documented for top 5 critical services",
      "Incident classification automated and triggering correct workflows",
      "ICT asset register generated and validated",
      "Compliance dashboard showing DORA posture with evidence",
    ],
    outOfScope: [
      "Full chaos engineering suite (Chaos Monkey-style random failure)",
      "Business continuity planning",
      "Penetration testing or threat-led testing (TLPT)",
      "Regulatory filings or communications with supervisors",
    ],
    faq: [
      {
        q: "Is DORA only for banks?",
        a: "No. DORA applies to 20 types of financial entities AND their critical ICT service providers. If you provide cloud, software, or managed services to financial companies, DORA likely applies to you.",
      },
      {
        q: "Do you do threat-led penetration testing (TLPT)?",
        a: "TLPT is out of scope for this package. We focus on operational resilience automation. We can recommend TLPT partners if needed.",
      },
      {
        q: "How does this relate to NIS2?",
        a: "DORA and NIS2 have overlapping requirements. If both apply, we map common controls to avoid duplicate work. The Compliance Gap Assessment is a good starting point.",
      },
      {
        q: "What if we don't have a service dependency map?",
        a: "We'll help build one as part of the engagement. The ICT asset register deliverable covers this.",
      },
    ],
  },

  // ═══ ENGINEERING DELIVERY ══════════════════════════════════

  {
    slug: "pipeline-forge",
    name: "Pipeline Forge",
    tagline: "Push code. Ship with confidence.",
    category: "delivery",
    categoryLabel: "Engineering Delivery",
    tier: "entry",
    tierLabel: "Entry",
    timeline: "1–2 days",
    icp: "Dev teams deploying manually or with fragile, undocumented CI scripts",
    problem:
      "Your deployments are manual, slow, and scary. The CI pipeline was written 3 years ago by someone who left. Nobody dares touch it. Every deploy feels like a gamble.",
    description:
      "We build or rebuild your CI/CD pipeline from scratch. GitHub Actions, GitLab CI, or your platform of choice — we deliver a production-ready pipeline with build, test, security scan, and deploy stages. Templated, documented, and fast.",
    deliverables: [
      "CI/CD pipeline configuration (build → test → scan → deploy)",
      "Environment-specific deployment configs (staging + production)",
      "Docker build optimization (multi-stage builds, layer caching)",
      "Pipeline documentation and troubleshooting guide",
      "PR-based deployment workflow",
    ],
    inputs: [
      "Access to source repository",
      "Target deployment platform (Kubernetes, ECS, Cloud Run, etc.)",
      "Existing CI config (if any)",
      "30-min kickoff call",
    ],
    definitionOfDone: [
      "Pipeline runs successfully on merge to main",
      "Build time under 5 minutes (application-dependent)",
      "Staging deployment automated on PR merge",
      "Documentation delivered and reviewed",
    ],
    outOfScope: [
      "Infrastructure provisioning",
      "Application code changes",
      "Production approval workflows (available as follow-on)",
    ],
    faq: [
      {
        q: "Which CI platforms do you support?",
        a: "GitHub Actions, GitLab CI, CircleCI, and Jenkins. GitHub Actions is our default recommendation for new setups.",
      },
      {
        q: "Can you set up pipelines for a monorepo?",
        a: "The base package covers one service. Monorepo pipelines with selective builds are available as follow-on work.",
      },
      {
        q: "Do you include security scanning?",
        a: "Yes. We add container image scanning (Trivy) and dependency vulnerability checks as pipeline stages.",
      },
    ],
  },

  {
    slug: "gitops-kickstart",
    name: "GitOps Kickstart",
    tagline: "Git is your single source of truth.",
    category: "delivery",
    categoryLabel: "Engineering Delivery",
    tier: "core",
    tierLabel: "Core",
    timeline: "5–7 days",
    icp: "Kubernetes teams ready to adopt GitOps but unsure where to start",
    problem:
      "You're running Kubernetes but deploying with kubectl apply and hope. Environment drift is real. Nobody knows what's actually running in production vs. what's in the repo.",
    description:
      "We set up a full GitOps workflow with ArgoCD or Flux. Your infrastructure and application manifests live in Git. Every change goes through PR review. Environments stay in sync. Drift is detected and corrected automatically.",
    deliverables: [
      "ArgoCD or Flux installation and configuration",
      "Git repository structure for multi-environment manifests",
      "Application definitions for up to 5 services",
      "Environment promotion workflow (dev → staging → production)",
      "Sealed Secrets or External Secrets Operator for secret management",
      "Drift detection and auto-sync configuration",
      "Team walkthrough and documentation",
    ],
    inputs: [
      "Kubernetes cluster admin access",
      "Git repository access",
      "Existing Kubernetes manifests or Helm charts",
      "60-min kickoff with platform lead",
    ],
    definitionOfDone: [
      "ArgoCD/Flux operational and syncing all configured applications",
      "Environment promotion tested end-to-end",
      "Secrets management integrated and working",
      "Drift detection alerts configured and firing correctly",
    ],
    outOfScope: [
      "Kubernetes cluster provisioning",
      "Application containerization",
      "CI pipeline changes (see Pipeline Forge)",
    ],
    faq: [
      {
        q: "ArgoCD or Flux — which should we use?",
        a: "ArgoCD for teams that want a UI and multi-cluster support. Flux for pure Git-driven, Kubernetes-native workflows. We advise during kickoff based on your needs.",
      },
      {
        q: "Do we need Helm charts?",
        a: "Not necessarily. We work with plain manifests, Helm, or Kustomize — whatever your team already uses.",
      },
      {
        q: "What about secrets?",
        a: "The package includes Sealed Secrets or External Secrets Operator. Secrets never appear in plain text in Git.",
      },
    ],
  },

  {
    slug: "release-engineering-sprint",
    name: "Release Engineering Sprint",
    tagline: "Deploy 10x more often. Break 10x less.",
    category: "delivery",
    categoryLabel: "Engineering Delivery",
    tier: "premium",
    tierLabel: "Premium",
    timeline: "8–12 days",
    icp: "Scale-ups shipping weekly that want to ship daily — or multiple times a day — with confidence",
    problem:
      "Releases take an entire afternoon. Feature branches live for weeks. Hotfixes bypass the pipeline. Every deploy is a ceremony. Your release process is your biggest bottleneck.",
    description:
      "Complete release engineering overhaul: trunk-based development, automated canary or blue-green deployments, feature flags integration, environment management with ephemeral previews, and rollback automation. We transform your deployment from a ceremony into a non-event.",
    deliverables: [
      "Trunk-based development workflow and branching strategy",
      "Canary or blue-green deployment pipeline",
      "Feature flag integration (LaunchDarkly, Unleash, or Flipt)",
      "Automated rollback mechanism with health checks",
      "Ephemeral preview environments for PRs",
      "Release dashboard and deployment metrics (DORA metrics)",
      "Deployment runbook and team training (2h session)",
      "Post-deployment smoke test automation",
    ],
    inputs: [
      "Full access to CI/CD platform and Kubernetes cluster",
      "Source repository access",
      "Current deployment documentation and runbooks",
      "Architecture overview and service dependencies",
      "90-min kickoff workshop with engineering team",
    ],
    definitionOfDone: [
      "Canary or blue-green deployment working in production",
      "Feature flags operational for at least 2 features",
      "Rollback tested and completing in under 5 minutes",
      "Deployment frequency measurably increased (DORA metric tracked)",
    ],
    outOfScope: [
      "Application architecture refactoring",
      "Database migration automation",
      "Multi-region deployment",
    ],
    faq: [
      {
        q: "Do we need Kubernetes for canary deploys?",
        a: "Canary/blue-green is most effective on Kubernetes with a service mesh or ingress controller. We can adapt for ECS or Cloud Run with some limitations.",
      },
      {
        q: "What DORA metrics do you track?",
        a: "Deployment frequency, lead time for changes, change failure rate, and mean time to recovery. These are built into the release dashboard.",
      },
      {
        q: "How many services can you cover?",
        a: "The base package covers up to 3 services. Additional services are scoped as follow-on work.",
      },
    ],
  },

  // ═══ RELIABILITY & OBSERVABILITY ═══════════════════════════

  {
    slug: "alert-fatigue-fix",
    name: "Alert Fatigue Fix",
    tagline: "Kill the noise. Keep the signal.",
    category: "reliability",
    categoryLabel: "Reliability & Observability",
    tier: "entry",
    tierLabel: "Entry",
    timeline: "1–2 days",
    icp: "SRE leads and on-call engineers drowning in alert noise",
    problem:
      "Your team gets 200+ alerts per day. 90% are noise. Real incidents get buried under duplicate and low-signal pages. Engineers burn out and start ignoring the pager.",
    description:
      "We audit your alerting rules across Prometheus, Datadog, PagerDuty, or OpsGenie. We eliminate redundant alerts, create proper routing and escalation policies, and deliver a clean alerting configuration that surfaces only what matters.",
    deliverables: [
      "Full alert audit report (current state + noise ratio analysis)",
      "Cleaned alerting rules configuration",
      "Escalation policy and routing matrix",
      "On-call rotation recommendations",
      "Alert runbook template for top 10 critical alerts",
    ],
    inputs: [
      "Access to monitoring tool (Prometheus/Datadog/New Relic/CloudWatch)",
      "Access to alerting platform (PagerDuty/OpsGenie/Slack)",
      "30-min kickoff with on-call lead",
    ],
    definitionOfDone: [
      "Alert volume reduced by minimum 60%",
      "Zero critical alerts without a linked runbook",
      "Escalation policy documented and configured",
    ],
    outOfScope: [
      "New monitoring instrumentation",
      "Dashboard creation",
      "On-call scheduling tool migration",
    ],
    faq: [
      {
        q: "How do you determine what's noise?",
        a: "We analyze alert frequency, acknowledgement rates, resolution times, and correlation with actual incidents over the past 30 days.",
      },
      {
        q: "Will you delete our existing alerts?",
        a: "No. We create a new cleaned configuration. Your existing rules stay untouched until you approve the changes.",
      },
      {
        q: "Which tools do you support?",
        a: "Prometheus, Datadog, New Relic, CloudWatch, Grafana Alerting, PagerDuty, OpsGenie, and custom setups.",
      },
    ],
  },

  {
    slug: "observability-stack-deploy",
    name: "Observability Stack Deploy",
    tagline: "See everything. Miss nothing.",
    category: "reliability",
    categoryLabel: "Reliability & Observability",
    tier: "core",
    tierLabel: "Core",
    timeline: "5–7 days",
    icp: "Teams with no centralized monitoring or fragmented observability across disconnected tools",
    problem:
      "Your metrics are in one tool, logs in another, traces nowhere. When something breaks, you SSH into servers and grep logs. That's not observability — that's archaeology.",
    description:
      "We deploy a complete observability stack: metrics collection (Prometheus/VictoriaMetrics), log aggregation (Loki), distributed tracing (Tempo/Jaeger), and unified dashboards (Grafana). Everything deployed as Infrastructure-as-Code, production-ready from day one.",
    deliverables: [
      "Metrics pipeline: Prometheus or VictoriaMetrics with service discovery",
      "Log aggregation: Loki with structured logging patterns",
      "Distributed tracing: Tempo or Jaeger with auto-instrumentation guidance",
      "Grafana dashboards: infrastructure overview, service health, golden signals",
      "Alert rules for critical infrastructure metrics",
      "IaC modules (Terraform/Helm) for the entire stack",
      "Runbook for stack maintenance, scaling, and troubleshooting",
    ],
    inputs: [
      "Cloud account access (AWS/GCP/Azure) or Kubernetes cluster",
      "List of services to instrument",
      "Current monitoring setup (if any)",
      "60-min kickoff with infrastructure lead",
    ],
    definitionOfDone: [
      "All three pillars (metrics, logs, traces) collecting data",
      "Minimum 3 Grafana dashboards operational",
      "Alert rules firing correctly for critical metrics",
      "IaC modules committed to your repository",
    ],
    outOfScope: [
      "Application-level instrumentation (code changes for OpenTelemetry)",
      "Custom business metrics dashboards",
      "24/7 monitoring or on-call coverage",
    ],
    faq: [
      {
        q: "Do you support Datadog or New Relic?",
        a: "This package focuses on open-source stacks for cost efficiency and vendor independence. For managed tool setups, contact us for custom scoping.",
      },
      {
        q: "What about storage costs?",
        a: "We configure retention policies and sampling to keep costs predictable. We provide a cost estimate during kickoff.",
      },
      {
        q: "Can this run on Kubernetes?",
        a: "Yes. The default deployment targets Kubernetes via Helm charts. We can also deploy on VMs with Docker Compose.",
      },
    ],
  },

  {
    slug: "sre-foundations-kit",
    name: "SRE Foundations Kit",
    tagline: "From firefighting to engineering reliability.",
    category: "reliability",
    categoryLabel: "Reliability & Observability",
    tier: "core",
    tierLabel: "Core",
    timeline: "5–7 days",
    icp: "Engineering leads building their first SRE practice or formalizing ad-hoc incident response",
    problem:
      "Your team reacts to every incident the same way — panic. No SLOs, no error budgets, no structured incident response. Reliability is a hope, not an engineering practice.",
    description:
      "We build your SRE foundation: define SLOs and error budgets for critical services, set up incident management workflows, create on-call runbooks, and deliver a post-incident review process. You get a working reliability framework, not a slide deck about Google's practices.",
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
      "60-min kickoff with engineering lead",
    ],
    definitionOfDone: [
      "SLOs defined and measurable in existing tooling",
      "Incident workflow documented and agreed by team",
      "Runbooks written and accessible to on-call rotation",
      "Training session completed with on-call team",
    ],
    outOfScope: [
      "Monitoring tool setup or migration (see Observability Stack Deploy)",
      "Automated remediation scripts",
      "SLO dashboard implementation (available as follow-on)",
    ],
    faq: [
      {
        q: "Do we need a dedicated SRE team to use this?",
        a: "No. This kit is designed for teams that don't have SREs yet. It works with your existing engineering team and current on-call rotation.",
      },
      {
        q: "What if we don't know our SLA commitments?",
        a: "We help you derive them from business requirements and historical uptime data during the kickoff.",
      },
      {
        q: "How long until we see results?",
        a: "Working incident workflow within the first week. SLO-driven decisions typically show impact within 4–6 weeks.",
      },
    ],
  },

  // ═══ AI INFRASTRUCTURE ═════════════════════════════════════

  {
    slug: "ai-llm-deployment-platform",
    name: "AI/LLM Deployment Platform",
    tagline: "Ship AI to production — safely, governed, observable.",
    category: "ai",
    categoryLabel: "AI Infrastructure",
    tier: "premium",
    tierLabel: "Premium",
    timeline: "10–15 days",
    icp: "Engineering teams deploying LLM-powered features or AI services to production",
    problem:
      "Your AI models run on someone's laptop or a Jupyter notebook. There's no governance, no versioning, no cost control, and no audit trail. You're deploying AI without guardrails — and EU AI Act deadlines are approaching.",
    description:
      "We build production AI infrastructure: model serving with GPU optimization, RAG pipeline infrastructure (vector database, embedding pipeline), LLM gateway with rate limiting and cost controls, observability for AI workloads (latency, token usage, cost per request), and EU AI Act compliance foundations. Your AI goes from prototype to production-grade.",
    deliverables: [
      "Model serving infrastructure (vLLM, TGI, or cloud-native) with GPU optimization",
      "RAG pipeline infrastructure: vector database (Qdrant/Weaviate/pgvector) + embedding pipeline",
      "LLM gateway with rate limiting, cost tracking, and request routing",
      "Model versioning and rollback mechanism",
      "AI observability dashboards (latency, token usage, cost per request, error rates)",
      "RBAC and governance policies for model access",
      "EU AI Act compliance foundations (system inventory, risk classification, logging)",
      "Documentation, runbooks, and team walkthrough",
    ],
    inputs: [
      "Cloud account with GPU access (or willingness to enable GPU instances)",
      "Current AI/ML workloads inventory",
      "Model serving requirements (models, expected throughput, latency targets)",
      "Kubernetes cluster access (preferred) or cloud platform access",
      "2h kickoff workshop with AI/ML and infrastructure teams",
    ],
    definitionOfDone: [
      "Model serving infrastructure operational and serving requests",
      "RAG pipeline functional end-to-end",
      "Cost controls and rate limiting enforced",
      "Observability dashboards live with real metrics",
      "Governance RBAC applied to model endpoints",
    ],
    outOfScope: [
      "Model training infrastructure or MLOps pipelines",
      "Model fine-tuning or prompt engineering",
      "Data labeling or dataset preparation",
      "AI/ML application development",
    ],
    faq: [
      {
        q: "Do you build AI applications?",
        a: "No. We build the infrastructure to deploy and operate them safely. Your AI/ML team builds the models and applications; we make sure they run reliably in production.",
      },
      {
        q: "Which model serving framework do you use?",
        a: "vLLM for open-source models, cloud-native endpoints (SageMaker, Vertex AI) for managed models. We recommend based on your requirements.",
      },
      {
        q: "What about the EU AI Act?",
        a: "We implement the technical foundations: system inventory, risk classification, decision logging, and monitoring. Full EU AI Act compliance also requires organizational governance — see our AI Governance package.",
      },
      {
        q: "Can this work without GPUs?",
        a: "For inference of small models, yes. For LLM serving, GPU instances are required. We optimize GPU utilization to control costs.",
      },
    ],
  },

  {
    slug: "ai-governance-readiness",
    name: "AI Governance & EU AI Act Readiness",
    tagline: "Govern your AI before regulators do it for you.",
    category: "ai",
    categoryLabel: "AI Infrastructure",
    tier: "core",
    tierLabel: "Core",
    timeline: "5–7 days",
    icp: "Companies deploying AI systems that need EU AI Act compliance foundations and internal governance",
    problem:
      "The EU AI Act requires risk classification, documentation, human oversight, and transparency for AI systems. You have no inventory of your AI systems, no risk assessment, and no governance framework. Enforcement phases begin in 2025–2026.",
    description:
      "We build the technical governance layer for your AI systems: inventory all AI/ML systems, classify by EU AI Act risk levels, implement monitoring and logging infrastructure, create documentation templates, and design human oversight mechanisms. You get a governance framework you can actually operate — not a compliance binder.",
    deliverables: [
      "AI system inventory with risk classification (minimal, limited, high, unacceptable)",
      "Governance framework document aligned with EU AI Act requirements",
      "Technical documentation templates per AI Act requirements",
      "Monitoring and logging infrastructure for AI decisions and outputs",
      "Human oversight mechanism design for high-risk systems",
      "Compliance posture dashboard",
      "Remediation roadmap for high-risk systems that need additional controls",
      "Team walkthrough and documentation",
    ],
    inputs: [
      "List of all AI/ML systems in use (or we help discover them)",
      "Architecture overview of AI-powered features",
      "Current governance policies (if any)",
      "60-min kickoff with engineering, product, and compliance leads",
    ],
    definitionOfDone: [
      "All AI systems inventoried and risk-classified",
      "Governance framework documented and reviewed by stakeholders",
      "Monitoring infrastructure operational for high-risk systems",
      "Compliance dashboard showing current posture",
    ],
    outOfScope: [
      "Legal interpretation or conformity assessment",
      "Model development or fine-tuning",
      "Training data auditing",
      "Regulatory filings",
    ],
    faq: [
      {
        q: "When does the EU AI Act take effect?",
        a: "It's phased: prohibited AI practices since February 2025, high-risk requirements by August 2026. Starting now gives you time to implement without rushing.",
      },
      {
        q: "What if we only use third-party AI (OpenAI, Claude, etc.)?",
        a: "You're still responsible for how you deploy and use them. The EU AI Act applies to deployers, not just providers. We help you govern your usage.",
      },
      {
        q: "Do you assess the models themselves?",
        a: "We assess the systems (how you deploy and use AI), not the models (how they're trained). For model evaluation, work with your ML team or a specialized provider.",
      },
      {
        q: "How does this connect to NIS2?",
        a: "NIS2 and EU AI Act overlap in risk management and incident reporting. If both apply, we map common controls to reduce duplicate effort.",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// RETAINERS
// ─────────────────────────────────────────────────────────────

export const retainers: Retainer[] = [
  {
    slug: "platform-reliability-care",
    name: "Platform Reliability Care",
    tagline: "We keep your platform running so you can keep building.",
    includes: [
      "Proactive infrastructure monitoring and tuning",
      "Monthly security patching and dependency updates",
      "Quarterly platform architecture review",
      "Priority incident response support",
      "Monthly cost optimization review",
      "Dedicated Slack channel for async support",
    ],
    idealFor:
      "Scale-ups without a dedicated platform team that need continuous infrastructure care and someone to call when things break.",
  },
  {
    slug: "compliance-continuity",
    name: "Compliance Continuity",
    tagline: "Stay compliant as your infrastructure evolves.",
    includes: [
      "Continuous compliance monitoring (NIS2 / DORA / EU AI Act)",
      "Policy-as-code rule updates as regulations evolve",
      "Quarterly compliance posture review",
      "Audit trail health checks",
      "Incident reporting workflow maintenance",
      "Regulatory change briefings relevant to your sector",
    ],
    idealFor:
      "Regulated entities (fintech, healthcare, energy) that need ongoing compliance assurance, not just a one-time audit.",
  },
  {
    slug: "platform-engineering-partnership",
    name: "Platform Engineering Partnership",
    tagline: "A senior platform engineer, embedded in your team.",
    includes: [
      "Dedicated senior platform engineer (part-time embedded)",
      "Platform design and implementation capacity",
      "Golden path development and maintenance",
      "Developer experience improvements",
      "Team mentoring and knowledge transfer",
      "Weekly sync and monthly planning",
    ],
    idealFor:
      "Engineering teams that need senior platform engineering capacity without a full-time hire commitment. Ideal during platform buildout phases.",
  },
];

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

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
    products.find((p) => p.slug === "internal-developer-platform")!,
    products.find((p) => p.slug === "nis2-compliance-kit")!,
    products.find((p) => p.slug === "ai-llm-deployment-platform")!,
  ];
}
