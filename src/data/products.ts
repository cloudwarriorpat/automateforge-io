export type ServiceCategory = "workflow" | "ai" | "custom-dev" | "process-audit";
export type ServiceTier = "starter" | "professional" | "enterprise";

// Keep backward-compatible aliases
export type ProductCategory = ServiceCategory;
export type ProductTier = ServiceTier;

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
  category: ServiceCategory;
  categoryLabel: string;
  tier: ServiceTier;
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
  ServiceCategory,
  { label: string; description: string; icon: string }
> = {
  workflow: {
    label: "Workflow Automation",
    description:
      "Connect your tools, eliminate manual steps, and build reliable automations with Make.com, n8n, or Zapier.",
    icon: "workflow",
  },
  ai: {
    label: "AI Integration",
    description:
      "Deploy AI agents that handle email triage, lead qualification, document processing, and more — with human oversight built in.",
    icon: "brain",
  },
  "custom-dev": {
    label: "Custom Development",
    description:
      "APIs, scripts, bots, and integrations built from scratch when off-the-shelf tools aren't enough.",
    icon: "code",
  },
  "process-audit": {
    label: "Process Audit & Optimization",
    description:
      "Map your workflows, find bottlenecks, and get a prioritized automation roadmap with ROI projections.",
    icon: "search",
  },
};

export const products: Product[] = [
  // --- WORKFLOW AUTOMATION ---
  {
    slug: "workflow-starter",
    name: "Workflow Starter",
    tagline: "Automate your first process in days, not months.",
    category: "workflow",
    categoryLabel: "Workflow Automation",
    tier: "starter",
    tierLabel: "Starter",
    timeline: "3-5 days",
    priceEur: "€1,500",
    pricePln: "6,400 PLN",
    icp: "Founders and ops managers with a clear manual process to automate",
    problem:
      "Your team spends hours every week on repetitive data entry, file transfers, and notification routing. It's error-prone, slow, and burning out your best people on work a machine should do.",
    description:
      "We build a production-ready automation for one core workflow using Make.com or n8n. Includes error handling, logging, and documentation so your team can maintain it independently.",
    deliverables: [
      "1 fully built automation scenario (Make.com or n8n)",
      "Error handling and retry logic",
      "Monitoring dashboard with run history",
      "Documentation and maintenance guide",
      "30-min handover walkthrough",
    ],
    inputs: [
      "Current process description (steps, tools, frequency)",
      "Access to connected tools (API keys or OAuth)",
      "30-min kickoff call to map the workflow",
    ],
    definitionOfDone: [
      "Automation running successfully on production data",
      "Error handling tested with edge cases",
      "Documentation delivered and walkthrough completed",
    ],
    outOfScope: [
      "Multiple workflows (see Professional tier)",
      "Custom API development",
      "Tool license procurement",
    ],
    addOns: [
      { name: "Additional workflow scenario", price: "€800" },
      { name: "Monthly monitoring and maintenance (3 months)", price: "€300/mo" },
    ],
    faq: [
      {
        q: "Which automation platforms do you support?",
        a: "Make.com, n8n, and Zapier. We recommend Make.com for most use cases due to its visual builder and robust error handling. n8n for self-hosted requirements.",
      },
      {
        q: "Can you automate workflows involving internal tools?",
        a: "Yes, as long as the tools have an API or webhook support. We can work with REST APIs, GraphQL, and webhook-based integrations.",
      },
      {
        q: "What happens if the automation breaks?",
        a: "Every automation includes error handling, retry logic, and alert notifications. The documentation covers common failure scenarios and fixes.",
      },
    ],
  },
  {
    slug: "multi-workflow-build",
    name: "Multi-Workflow Build",
    tagline: "Connect your entire operation, end to end.",
    category: "workflow",
    categoryLabel: "Workflow Automation",
    tier: "professional",
    tierLabel: "Professional",
    timeline: "2-4 weeks",
    priceEur: "€5,500",
    pricePln: "23,500 PLN",
    icp: "Operations managers coordinating data across 5+ tools",
    problem:
      "Your CRM doesn't talk to your invoicing. Your project management tool is out of sync with your communication channels. Data lives in silos and your team is the manual glue holding it together.",
    description:
      "We design and build an interconnected automation system covering up to 5 workflows across your tool stack. Includes a central error dashboard, webhook orchestration, and a process map showing how everything connects.",
    deliverables: [
      "Up to 5 connected automation workflows",
      "Process architecture diagram",
      "Central monitoring dashboard",
      "Webhook and API orchestration layer",
      "Error handling with escalation to Slack/Teams/email",
      "Full documentation and 60-min team training",
    ],
    inputs: [
      "List of tools and current integrations",
      "Process maps or description of each workflow",
      "API access and credentials for all connected tools",
      "60-min discovery call with process owners",
    ],
    definitionOfDone: [
      "All workflows running successfully in production",
      "Central dashboard showing status of all automations",
      "Team trained and documentation delivered",
    ],
    outOfScope: [
      "Custom application development",
      "Data migration from legacy systems",
      "Tool license procurement or vendor negotiations",
    ],
    addOns: [
      { name: "Additional workflow (per workflow)", price: "€1,200" },
      { name: "Quarterly automation health check", price: "€800/quarter" },
      { name: "Custom Slack bot for workflow management", price: "€1,500" },
    ],
    faq: [
      {
        q: "How do you handle workflows that span different time zones?",
        a: "We configure timezone-aware scheduling and use UTC internally. All triggers and schedules account for your team's working hours.",
      },
      {
        q: "Can we modify the workflows after delivery?",
        a: "Absolutely. We use visual platforms (Make.com/n8n) specifically so your team can maintain and extend workflows without writing code.",
      },
      {
        q: "What if we need more than 5 workflows?",
        a: "Additional workflows are available as add-ons, or we can scope an Enterprise engagement for larger automation programs.",
      },
    ],
  },
  {
    slug: "automation-platform-setup",
    name: "Automation Platform Setup",
    tagline: "A complete automation infrastructure for your organization.",
    category: "workflow",
    categoryLabel: "Workflow Automation",
    tier: "enterprise",
    tierLabel: "Enterprise",
    timeline: "4-8 weeks",
    priceEur: "€14,000",
    pricePln: "59,800 PLN",
    icp: "CTOs and operations leads building an automation-first organization",
    problem:
      "You've outgrown one-off automations. You need a systematic approach: standards, governance, monitoring, and a platform your whole team can build on without creating technical debt.",
    description:
      "We deploy and configure a full automation platform: self-hosted n8n or Make.com team workspace, CI/CD for automation deployments, version control, centralized monitoring, access controls, and golden-path templates for common patterns.",
    deliverables: [
      "Automation platform deployment (n8n self-hosted or Make.com Teams)",
      "Up to 10 production workflows",
      "CI/CD pipeline for automation version control",
      "Centralized monitoring and alerting dashboard",
      "Access control and team permission setup",
      "5 golden-path workflow templates",
      "Automation governance documentation",
      "2-hour team training workshop",
    ],
    inputs: [
      "Cloud infrastructure or hosting environment details",
      "Complete tool inventory with API documentation",
      "Organization chart and process ownership map",
      "Half-day discovery workshop with stakeholders",
    ],
    definitionOfDone: [
      "Platform operational with all workflows in production",
      "CI/CD pipeline tested and documented",
      "Team trained and independently building new workflows",
      "Governance docs approved by stakeholders",
    ],
    outOfScope: [
      "Cloud infrastructure provisioning",
      "Legacy system rewrite",
      "Ongoing managed operations (available as retainer)",
    ],
    addOns: [
      { name: "Managed operations retainer", price: "€2,500/mo" },
      { name: "Additional golden-path template", price: "€1,200" },
    ],
    faq: [
      {
        q: "Should we self-host n8n or use Make.com?",
        a: "Self-hosted n8n for teams that need data sovereignty, custom nodes, or want to avoid per-operation pricing. Make.com Teams for teams that prioritize ease of use and managed infrastructure.",
      },
      {
        q: "Can we migrate existing automations?",
        a: "Yes. We audit and migrate existing Zapier or Make.com scenarios as part of the platform setup.",
      },
    ],
  },

  // --- AI INTEGRATION ---
  {
    slug: "ai-email-triage",
    name: "AI Email Triage Agent",
    tagline: "Stop sorting email. Start acting on it.",
    category: "ai",
    categoryLabel: "AI Integration",
    tier: "starter",
    tierLabel: "Starter",
    timeline: "1-2 weeks",
    priceEur: "€3,500",
    pricePln: "15,000 PLN",
    icp: "Operations teams drowning in inbox volume",
    problem:
      "Your team manually reads, classifies, and routes hundreds of emails per day. Invoices get lost. Support requests wait in limbo. The inbox is a bottleneck for your entire operation.",
    description:
      "We build an AI-powered email triage agent that classifies incoming messages, extracts key data, creates tasks in your project management tool, and routes to the right person — with human-in-the-loop for edge cases.",
    deliverables: [
      "AI email classification agent (GPT or Claude)",
      "Integration with Gmail/Outlook + Slack/Teams",
      "Task creation in Asana, Jira, or Linear",
      "Human-in-the-loop escalation workflow",
      "Classification accuracy dashboard",
      "Documentation and prompt maintenance guide",
    ],
    inputs: [
      "Sample email dataset (100+ messages)",
      "Classification categories and routing rules",
      "API access to email and project management tools",
      "45-min kickoff call",
    ],
    definitionOfDone: [
      "Agent processing emails with 90%+ classification accuracy",
      "Human-in-the-loop working for uncertain classifications",
      "Dashboard operational with accuracy metrics",
    ],
    outOfScope: [
      "Email content generation/reply drafting",
      "CRM integration (available as add-on)",
      "Custom LLM fine-tuning",
    ],
    addOns: [
      { name: "Auto-reply draft generation", price: "€1,500" },
      { name: "CRM integration (HubSpot/Pipedrive)", price: "€1,200" },
      { name: "Monthly prompt tuning (3 months)", price: "€500/mo" },
    ],
    faq: [
      {
        q: "Which AI models do you use?",
        a: "We primarily use Claude and GPT-4o. Model selection depends on your data privacy requirements and classification complexity.",
      },
      {
        q: "Is our email data sent to OpenAI/Anthropic?",
        a: "Data is processed through the AI API but not stored for training. For stricter requirements, we can use self-hosted models or Azure OpenAI.",
      },
      {
        q: "What if the AI makes a mistake?",
        a: "Every agent includes a confidence threshold. Below it, messages are routed to a human reviewer. The system learns from corrections over time.",
      },
    ],
  },
  {
    slug: "ai-document-processor",
    name: "AI Document Processor",
    tagline: "Extract structured data from any document, automatically.",
    category: "ai",
    categoryLabel: "AI Integration",
    tier: "professional",
    tierLabel: "Professional",
    timeline: "2-4 weeks",
    priceEur: "€8,500",
    pricePln: "36,300 PLN",
    icp: "Finance and operations teams processing invoices, contracts, or reports manually",
    problem:
      "Your team manually copies data from PDFs, scanned documents, and emails into spreadsheets and ERPs. It's slow, error-prone, and doesn't scale.",
    description:
      "We build an AI document processing pipeline: OCR for scanned documents, LLM-powered data extraction, validation rules, and integration with your ERP or database. Handles invoices, contracts, purchase orders, or any structured document type.",
    deliverables: [
      "Document processing pipeline (OCR + AI extraction)",
      "Support for up to 3 document types",
      "Validation rules and confidence scoring",
      "Integration with target system (ERP, database, or spreadsheet)",
      "Exception handling with human review queue",
      "Processing accuracy dashboard",
      "Documentation and maintenance guide",
    ],
    inputs: [
      "Sample documents (50+ per type)",
      "Target data schema (which fields to extract)",
      "Access to target system API",
      "60-min discovery call",
    ],
    definitionOfDone: [
      "Pipeline processing documents with 95%+ field extraction accuracy",
      "Integration delivering data to target system",
      "Exception handling routing uncertain extractions to review queue",
    ],
    outOfScope: [
      "Legacy system migration",
      "Custom OCR model training",
      "More than 3 document types (available as add-on)",
    ],
    addOns: [
      { name: "Additional document type (per type)", price: "€2,500" },
      { name: "Custom validation rules engine", price: "€2,000" },
    ],
    faq: [
      {
        q: "Can you process handwritten documents?",
        a: "We support printed and typed documents. Handwritten documents require specialized OCR models and are handled as a custom engagement.",
      },
      {
        q: "What languages are supported?",
        a: "English, German, French, Spanish, Dutch, and most European languages. Contact us for other language support.",
      },
    ],
  },
  {
    slug: "ai-agent-suite",
    name: "AI Agent Suite",
    tagline: "Deploy a team of AI agents across your back-office.",
    category: "ai",
    categoryLabel: "AI Integration",
    tier: "enterprise",
    tierLabel: "Enterprise",
    timeline: "4-8 weeks",
    priceEur: "€18,500",
    pricePln: "79,000 PLN",
    icp: "Companies ready to systematically deploy AI across operations",
    problem:
      "You've seen AI demos but can't get past pilots. You need production-grade agents with monitoring, guardrails, and a systematic deployment approach — not another chatbot prototype.",
    description:
      "Full AI operations deployment: up to 5 specialized agents (email, documents, lead qualification, cost control, reporting), unified monitoring, prompt management system, and human-in-the-loop governance. Built by engineers, not prompt influencers.",
    deliverables: [
      "Up to 5 production AI agents",
      "Unified monitoring and quality dashboard",
      "Prompt management and versioning system",
      "Human-in-the-loop governance framework",
      "Agent performance reports (accuracy, latency, cost)",
      "Escalation and fallback workflows",
      "Team training workshop (half-day)",
      "Operational runbook",
    ],
    inputs: [
      "Process maps for target workflows",
      "Sample data for each agent",
      "Stakeholder access for requirements gathering",
      "Half-day discovery workshop",
    ],
    definitionOfDone: [
      "All agents operational in production with monitoring",
      "Quality metrics meeting agreed thresholds",
      "Team trained on prompt management and monitoring",
      "Governance framework approved and documented",
    ],
    outOfScope: [
      "Custom LLM fine-tuning or training",
      "Real-time customer-facing chatbots",
      "Data warehouse implementation",
    ],
    addOns: [
      { name: "Additional AI agent (per agent)", price: "€3,500" },
      { name: "Monthly AI operations retainer", price: "€3,000/mo" },
    ],
    faq: [
      {
        q: "Can we start smaller and scale up?",
        a: "Absolutely. Many clients start with the Email Triage Agent and expand from there. The Enterprise suite is for teams ready to go all-in.",
      },
      {
        q: "What about data privacy and compliance?",
        a: "We implement data handling policies, use enterprise AI APIs with no training on your data, and can deploy on your own infrastructure when required.",
      },
    ],
  },

  // --- CUSTOM DEVELOPMENT ---
  {
    slug: "api-integration-build",
    name: "API Integration Build",
    tagline: "Connect any two systems, no matter the API.",
    category: "custom-dev",
    categoryLabel: "Custom Development",
    tier: "starter",
    tierLabel: "Starter",
    timeline: "1-2 weeks",
    priceEur: "€3,000",
    pricePln: "12,800 PLN",
    icp: "Teams that need to sync data between systems with no native integration",
    problem:
      "Your tools don't talk to each other. There's no Zapier connector, no native integration, and manual data sync is eating 10 hours per week of your team's time.",
    description:
      "We build a custom API integration between any two systems. REST, GraphQL, SOAP, webhooks — we handle the protocol. Includes error handling, data transformation, logging, and deployment to your infrastructure.",
    deliverables: [
      "Custom API integration (bidirectional sync)",
      "Data transformation and mapping layer",
      "Error handling and retry logic",
      "Logging and monitoring setup",
      "Deployment to your cloud (Docker/serverless)",
      "API documentation and maintenance guide",
    ],
    inputs: [
      "API documentation for both systems",
      "Data mapping requirements (which fields sync where)",
      "Cloud account access for deployment",
      "30-min kickoff call",
    ],
    definitionOfDone: [
      "Integration syncing data reliably in production",
      "Error handling tested with failure scenarios",
      "Documentation delivered with deployment instructions",
    ],
    outOfScope: [
      "Frontend/UI development",
      "Database schema changes in target systems",
      "Ongoing monitoring (available as add-on)",
    ],
    addOns: [
      { name: "Monthly monitoring and maintenance", price: "€400/mo" },
      { name: "Additional endpoint pair", price: "€1,200" },
    ],
    faq: [
      {
        q: "What if one of the systems doesn't have a public API?",
        a: "We can work with internal APIs, database connections, file-based integrations, or screen scraping as a last resort. Let's discuss during the kickoff.",
      },
      {
        q: "What tech stack do you use for custom integrations?",
        a: "Typically Node.js or Python, deployed as serverless functions (AWS Lambda, Cloud Functions) or Docker containers. We adapt to your existing stack.",
      },
    ],
  },
  {
    slug: "automation-bot-build",
    name: "Automation Bot Build",
    tagline: "A custom bot for the task no tool covers.",
    category: "custom-dev",
    categoryLabel: "Custom Development",
    tier: "professional",
    tierLabel: "Professional",
    timeline: "2-4 weeks",
    priceEur: "€7,500",
    pricePln: "32,000 PLN",
    icp: "Teams needing custom automation logic that no-code tools can't handle",
    problem:
      "Your workflow has edge cases that Make.com and Zapier can't handle. You need custom logic, complex branching, or interaction with systems that don't have standard connectors.",
    description:
      "We build a custom automation bot — a purpose-built script or service that handles your specific workflow with custom logic, APIs, and business rules. Deployed to your infrastructure with monitoring and alerting.",
    deliverables: [
      "Custom automation bot (Python or Node.js)",
      "Business logic implementation per your specifications",
      "API integrations with all required systems",
      "Monitoring and alerting (Slack/email notifications)",
      "Deployment pipeline (CI/CD)",
      "Source code with documentation",
      "60-min handover and training",
    ],
    inputs: [
      "Detailed workflow specification",
      "API access to all connected systems",
      "Business rules and edge case documentation",
      "Infrastructure access for deployment",
      "60-min kickoff call",
    ],
    definitionOfDone: [
      "Bot running in production handling target workflow",
      "All business rules implemented and tested",
      "Monitoring operational with alerting configured",
      "Source code delivered with documentation",
    ],
    outOfScope: [
      "Frontend/dashboard development",
      "ML model training",
      "Third-party tool procurement",
    ],
    addOns: [
      { name: "Admin dashboard for bot management", price: "€3,000" },
      { name: "Monthly maintenance and updates", price: "€600/mo" },
    ],
    faq: [
      {
        q: "Why not just use Make.com or n8n?",
        a: "Sometimes you should. We'll tell you if a no-code tool covers your use case. Custom bots are for workflows that need custom logic, high throughput, or specific integrations no-code can't handle.",
      },
      {
        q: "Do we own the source code?",
        a: "Yes. Everything we build is yours. Full source code, documentation, and deployment configs.",
      },
    ],
  },
  {
    slug: "full-stack-automation-platform",
    name: "Full-Stack Automation Platform",
    tagline: "A bespoke automation layer for your entire business.",
    category: "custom-dev",
    categoryLabel: "Custom Development",
    tier: "enterprise",
    tierLabel: "Enterprise",
    timeline: "6-12 weeks",
    priceEur: "€25,000",
    pricePln: "106,800 PLN",
    icp: "Companies building a competitive advantage through proprietary automation",
    problem:
      "Off-the-shelf tools don't fit your operations. You need a custom automation platform that integrates deeply with your systems, handles your specific business logic, and scales with your growth.",
    description:
      "We architect and build a custom automation platform: event-driven architecture, API gateway, workflow engine, monitoring, and admin interface. Built to your specifications, deployed to your infrastructure, fully owned by you.",
    deliverables: [
      "Custom automation platform architecture",
      "Event-driven workflow engine",
      "API gateway for all integrations",
      "Admin dashboard for workflow management",
      "Monitoring and observability stack",
      "CI/CD pipeline for platform updates",
      "Complete source code and documentation",
      "Team training (full day)",
    ],
    inputs: [
      "Business requirements document",
      "System architecture overview",
      "Stakeholder access for discovery",
      "Full-day discovery workshop",
    ],
    definitionOfDone: [
      "Platform deployed and operational",
      "All specified workflows running in production",
      "Admin dashboard functional",
      "Team trained and able to extend the platform",
    ],
    outOfScope: [
      "Ongoing managed operations",
      "Third-party vendor management",
      "End-user training (beyond admin team)",
    ],
    addOns: [
      { name: "Managed operations retainer", price: "€4,500/mo" },
      { name: "Additional feature sprint (2 weeks)", price: "€8,000" },
    ],
    faq: [
      {
        q: "How is this different from hiring a development team?",
        a: "We deliver a working platform, not ongoing headcount. Fixed scope, fixed price, full ownership transfer. You can maintain it internally or retain us for ongoing support.",
      },
    ],
  },

  // --- PROCESS AUDIT & OPTIMIZATION ---
  {
    slug: "automation-readiness-audit",
    name: "Automation Readiness Audit",
    tagline: "Know exactly what to automate first — and why.",
    category: "process-audit",
    categoryLabel: "Process Audit & Optimization",
    tier: "starter",
    tierLabel: "Starter",
    timeline: "3-5 days",
    priceEur: "€2,000",
    pricePln: "8,500 PLN",
    icp: "Founders and ops leads who know they need automation but don't know where to start",
    problem:
      "You know your team wastes time on manual processes, but you don't have a clear picture of which workflows to automate first, what tools to use, or what ROI to expect.",
    description:
      "We interview your team, map your key workflows, score each process on automation potential, and deliver a prioritized roadmap with estimated ROI, tool recommendations, and implementation timelines.",
    deliverables: [
      "Workflow mapping for up to 10 processes",
      "Automation opportunity scoring matrix",
      "Prioritized automation roadmap (quick wins + strategic bets)",
      "Tool recommendations (Make.com, n8n, Zapier, or custom)",
      "ROI projections per workflow",
      "Executive summary for stakeholders",
    ],
    inputs: [
      "Access to process owners (3-5 interviews, 30 min each)",
      "Existing process documentation (if any)",
      "Tool inventory list",
      "45-min kickoff call with sponsor",
    ],
    definitionOfDone: [
      "All target processes mapped and scored",
      "Roadmap delivered with clear priorities and estimated ROI",
      "Executive summary reviewed with sponsor",
    ],
    outOfScope: [
      "Automation implementation (see Workflow packages)",
      "Tool procurement or vendor evaluation",
      "Change management consulting",
    ],
    addOns: [
      { name: "Implementation of top quick win", price: "€1,500" },
      { name: "Quarterly automation review", price: "€1,200/quarter" },
    ],
    faq: [
      {
        q: "How many processes can you audit?",
        a: "The starter package covers up to 10 processes. For larger organizations, we scope a custom engagement.",
      },
      {
        q: "What if we already know what to automate?",
        a: "Then skip the audit and go straight to a Workflow Starter or Multi-Workflow Build. The audit is for teams that need strategic clarity first.",
      },
      {
        q: "Do you work with our existing tools?",
        a: "Yes. We evaluate your current tool stack and recommend automation approaches that leverage what you already have.",
      },
    ],
  },
  {
    slug: "process-optimization-sprint",
    name: "Process Optimization Sprint",
    tagline: "Redesign, then automate — in the right order.",
    category: "process-audit",
    categoryLabel: "Process Audit & Optimization",
    tier: "professional",
    tierLabel: "Professional",
    timeline: "2-3 weeks",
    priceEur: "€6,500",
    pricePln: "27,800 PLN",
    icp: "Operations teams with inefficient processes that need redesign before automation",
    problem:
      "Automating a bad process just makes it fail faster. Your workflows have unnecessary steps, approval bottlenecks, and manual handoffs that need to be redesigned before any tool can help.",
    description:
      "We analyze your end-to-end processes, identify waste and bottlenecks, redesign workflows for efficiency, and implement the first automation. You get both the strategic redesign and a working quick win.",
    deliverables: [
      "Current-state process mapping (as-is)",
      "Bottleneck and waste analysis",
      "Redesigned workflow (to-be) with implementation plan",
      "1 automation quick win implemented",
      "Change management recommendations",
      "ROI tracking framework",
    ],
    inputs: [
      "Process owner interviews (5-8 sessions)",
      "Access to relevant tools and systems",
      "Historical data on process volume and cycle times",
      "60-min kickoff with operations lead",
    ],
    definitionOfDone: [
      "Current and future state processes documented",
      "Quick win automation live in production",
      "Implementation plan approved by stakeholders",
      "ROI tracking framework in place",
    ],
    outOfScope: [
      "Full automation implementation (beyond quick win)",
      "Organizational restructuring",
      "ERP/system replacement",
    ],
    addOns: [
      { name: "Additional automation implementation", price: "€1,500" },
      { name: "Monthly optimization reviews (3 months)", price: "€800/mo" },
    ],
    faq: [
      {
        q: "What's the difference between this and the Readiness Audit?",
        a: "The audit maps and prioritizes. The optimization sprint redesigns and delivers a working automation. If you know what to fix but need help fixing it, start here.",
      },
    ],
  },
  {
    slug: "automation-transformation-program",
    name: "Automation Transformation Program",
    tagline: "From manual operations to automation-first culture.",
    category: "process-audit",
    categoryLabel: "Process Audit & Optimization",
    tier: "enterprise",
    tierLabel: "Enterprise",
    timeline: "8-12 weeks",
    priceEur: "€20,000",
    pricePln: "85,400 PLN",
    icp: "Companies committing to a systematic automation strategy",
    problem:
      "You have dozens of manual processes across departments, no automation strategy, and every team has different tools and approaches. You need a coordinated transformation, not piecemeal fixes.",
    description:
      "End-to-end automation transformation: company-wide process audit, automation strategy development, Center of Excellence (CoE) setup, tool standardization, pilot implementations, and team training. We build the foundation for your automation-first organization.",
    deliverables: [
      "Company-wide process audit (up to 30 workflows)",
      "Automation strategy and 12-month roadmap",
      "Center of Excellence framework and governance",
      "Tool selection and platform setup",
      "3 pilot automation implementations",
      "Team training program (2 days)",
      "KPI framework for measuring automation ROI",
      "Executive briefing deck",
    ],
    inputs: [
      "Stakeholder interviews across departments",
      "Access to all relevant systems and tools",
      "Organizational chart and process ownership",
      "Full-day discovery workshop with leadership",
    ],
    definitionOfDone: [
      "Strategy approved by leadership",
      "CoE framework established with clear governance",
      "3 pilot automations live in production",
      "Team trained and building independently",
      "KPI framework tracking automation ROI",
    ],
    outOfScope: [
      "Ongoing managed operations",
      "ERP or system replacements",
      "Department-level organizational changes",
    ],
    addOns: [
      { name: "Quarterly strategy review retainer", price: "€2,000/quarter" },
      { name: "Additional pilot implementation (per pilot)", price: "€3,000" },
    ],
    faq: [
      {
        q: "Do we need executive sponsorship?",
        a: "Yes. Transformation programs require top-down support. We work with your sponsor to build the business case and maintain momentum.",
      },
      {
        q: "How long before we see ROI?",
        a: "Pilot automations typically show ROI within the first month. The full program ROI depends on your automation velocity, but most clients see break-even within 3-4 months.",
      },
    ],
  },
];

export const retainers: Retainer[] = [
  {
    slug: "automation-care",
    name: "Automation Care",
    tagline: "Keep your automations running, always.",
    priceEur: "€1,500/mo",
    pricePln: "6,400 PLN/mo",
    includes: [
      "Monitoring of all active automations",
      "Error resolution within 4 business hours",
      "Monthly health report",
      "Up to 5 hours/month of small modifications",
      "Slack/email support channel",
    ],
    idealFor:
      "Teams with production automations that need reliable monitoring and quick fixes.",
  },
  {
    slug: "automation-growth",
    name: "Automation Growth",
    tagline: "Continuously expand your automation footprint.",
    priceEur: "€3,500/mo",
    pricePln: "15,000 PLN/mo",
    includes: [
      "Everything in Automation Care",
      "2 new workflow builds per month",
      "Process optimization reviews",
      "Priority support (2h SLA)",
      "Weekly sync calls",
      "Automation ROI tracking",
    ],
    idealFor:
      "Organizations actively expanding their automation program with ongoing build capacity.",
  },
  {
    slug: "automation-partner",
    name: "Automation Partner",
    tagline: "A dedicated automation engineer, on demand.",
    priceEur: "€6,500/mo",
    pricePln: "27,800 PLN/mo",
    includes: [
      "Dedicated senior automation engineer (part-time)",
      "80+ hours/month of engineering capacity",
      "Unlimited workflow builds and modifications",
      "Architecture guidance and platform evolution",
      "Team mentoring and knowledge transfer",
      "Monthly planning and quarterly reviews",
    ],
    idealFor:
      "Companies that need senior automation engineering capacity without full-time headcount.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ServiceCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByTier(tier: ServiceTier): Product[] {
  return products.filter((p) => p.tier === tier);
}

const FEATURED_SLUGS = ["workflow-starter", "ai-email-triage", "automation-readiness-audit", "api-integration-build"] as const;

export function getFeaturedProducts(): Product[] {
  return FEATURED_SLUGS
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}
