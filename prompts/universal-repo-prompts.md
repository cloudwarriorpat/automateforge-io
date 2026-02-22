# Claude Code — Iterative Repo Improvement Prompt Pack

**PromptSmith v1.0** — 6 universal prompts for throwing against any repository. Copy-paste into Claude Code. Fill `{{placeholders}}` with your repo specifics. Each prompt is self-contained and designed for iterative use across sessions.

## Table of Contents

1. [PROMPT 1 — Full Audit & Improvement Sweep](#prompt-1--full-audit--improvement-sweep)
2. [PROMPT 2 — Bug Hunter & Stability Pass](#prompt-2--bug-hunter--stability-pass)
3. [PROMPT 3 — Architecture & Pattern Review](#prompt-3--architecture--pattern-review)
4. [PROMPT 4 — Feature Discovery & Roadmap Generator](#prompt-4--feature-discovery--roadmap-generator)
5. [PROMPT 5 — Quick Fix Sprint (25-min ADHD Block)](#prompt-5--quick-fix-sprint-25-min-adhd-block)
6. [PROMPT 6 — Continuous Improvement Loop (Multi-Session)](#prompt-6--continuous-improvement-loop-multi-session)
7. [Operator Guide](#operator-guide)
8. [Micro-Tests](#micro-tests)

---

## PROMPT 1 — Full Audit & Improvement Sweep

**Use when:** First time throwing Claude Code at a repo, or after a major milestone. Comprehensive top-to-bottom analysis.

```
ROLE: Senior Staff Engineer conducting a comprehensive repository audit.
      Expertise: Code quality, security, performance, DevOps, architecture patterns.
      Constraints: Constructive only. No breaking changes without explicit approval. Production-safety-first.
      LENS: MECE (Mutually Exclusive, Collectively Exhaustive) analysis.

CONTEXT:
- Repository: {{repo_path}}
- Tech stack: {{tech_stack}} (e.g., "SvelteKit + Supabase + TypeScript" or "Docker Compose + Traefik + Node.js")
- Environment: {{environment}} (e.g., "production on Azure Container Apps" or "K3s cluster on DigitalOcean")
- Business context: {{business_context}} (e.g., "SaaS product serving 500 users" or "internal tooling")
- Known pain points: {{known_issues}} (e.g., "intermittent 502s under load" or "none, fresh audit")
- Previous audit notes: {{previous_notes}} (or "None — first audit")

OBJECTIVE: Perform a complete MECE audit of this repository and produce a prioritized improvement plan.

Acceptance criteria:
1. Every finding categorized into exactly one of: CRITICAL BUG, SECURITY, PERFORMANCE, CODE QUALITY, DX (Developer Experience), FEATURE GAP.
2. Each finding includes severity (P0-P3), estimated effort (S/M/L), and a concrete fix or recommendation.
3. Output a prioritized backlog sorted by impact/effort ratio.
4. No theoretical suggestions — every item must reference specific files and line numbers.

PROCESS (follow in order):
1. Read the project structure. Map dependencies, entry points, and configuration files.
2. Scan for CRITICAL BUGS: runtime errors, unhandled exceptions, race conditions, data loss risks, broken error handling.
3. Scan for SECURITY issues: hardcoded secrets, injection vectors, missing auth checks, exposed endpoints, dependency vulnerabilities (check package.json/requirements.txt for known CVEs).
4. Scan for PERFORMANCE issues: N+1 queries, missing indexes, unbounded loops, memory leaks, missing caching opportunities, unoptimized images/assets.
5. Scan for CODE QUALITY: dead code, duplicated logic, missing types, inconsistent naming, missing error boundaries, untested critical paths.
6. Scan for DX issues: missing/outdated docs, unclear setup instructions, missing linting/formatting config, no CI/CD or broken pipelines, missing env.example.
7. Identify FEATURE GAPS: incomplete implementations, TODO/FIXME/HACK comments, obvious missing functionality based on the codebase intent.
8. Compile findings. Score each by impact (1-5) and effort (1-5). Sort by impact/effort ratio descending.
9. Verify: Cross-check that categories are MECE — no finding fits two categories, no area is uncovered.

OUTPUT FORMAT:
Deliver as structured Markdown with these exact sections:

## Executive Summary
- One paragraph: overall health score (1-10) and top 3 priorities.

## Findings by Priority

### P0 — Fix Immediately (breaks production or security risk)
| # | Category | File:Line | Finding | Fix | Effort |
|---|----------|-----------|---------|-----|--------|

### P1 — Fix This Sprint (significant impact)
| # | Category | File:Line | Finding | Fix | Effort |
|---|----------|-----------|---------|-----|--------|

### P2 — Fix This Month (quality & performance)
| # | Category | File:Line | Finding | Fix | Effort |
|---|----------|-----------|---------|-----|--------|

### P3 — Backlog (nice to have)
| # | Category | File:Line | Finding | Fix | Effort |
|---|----------|-----------|---------|-----|--------|

## Quick Wins (< 15 min each)
- Bulleted list of fast fixes with exact commands or code snippets.

## Architecture Notes
- One paragraph on structural observations and long-term recommendations.

CONSTRAINTS:
- No breaking changes. All suggestions must be backwards-compatible unless flagged explicitly.
- Reference specific files and lines. No vague "consider improving error handling."
- If uncertain about a finding, mark it [VERIFY] and explain what to check.
- Do NOT auto-fix anything. This is audit-only. Fixes come in follow-up prompts.

FAIL-SAFE:
- If the repo is too large to scan fully, state which directories were covered and which were skipped. Prioritize: src/ > lib/ > api/ > config/ > tests/.
- If the tech stack is unfamiliar, state that explicitly and focus on language-agnostic patterns (error handling, security basics, code quality).
```

---

## PROMPT 2 — Bug Hunter & Stability Pass

**Use when:** Production issues, intermittent errors, or you want to harden a codebase before deployment.

```
ROLE: Senior SRE / Reliability Engineer performing a stability-focused code review.
      Expertise: Production debugging, error handling, resilience patterns, observability.
      Constraints: Zero tolerance for data loss risks. Production-safety-first.
      LENS: Chaos Engineering mindset — what breaks when things go wrong?

CONTEXT:
- Repository: {{repo_path}}
- Tech stack: {{tech_stack}}
- Current symptoms: {{symptoms}} (e.g., "intermittent 502 errors" or "none — proactive hardening")
- Error logs/patterns: {{error_context}} (or "No logs available — scan proactively")
- Deployment target: {{deployment}} (e.g., "Docker Compose + Traefik" or "Azure Container Apps")

OBJECTIVE: Find every bug, crash vector, and stability risk in this codebase. For each, provide a concrete fix.

Acceptance criteria:
1. Every unhandled exception path identified.
2. Every external dependency call (API, DB, filesystem) checked for: timeout handling, retry logic, error propagation, graceful degradation.
3. Race conditions and concurrency issues flagged.
4. Data integrity risks identified (partial writes, missing transactions, no rollback).
5. Each finding includes the exact fix as a code snippet.

PROCESS (follow in order):
1. Map all external integration points: API calls, database queries, file I/O, message queues, cron jobs.
2. For EACH integration point, verify:
   - Is there a timeout? What happens on timeout?
   - Is there retry logic? Is it idempotent?
   - Is the error caught? Is it logged with context?
   - Does failure propagate correctly or silently swallow?
   - Is there a circuit breaker or fallback?
3. Scan for unhandled promise rejections (JS/TS), unhandled exceptions (Python), panic paths (Go/Rust).
4. Check error boundaries: Do parent components/callers handle child failures?
5. Check state management: Can state become inconsistent after a partial failure?
6. Check startup/shutdown: Graceful shutdown handlers? Health checks? Readiness probes?
7. Check environment handling: Missing env vars? Defaults that silently break?
8. Review existing error handling: Is it catching too broadly? Swallowing errors? Missing context in logs?
9. For each finding, write the fix as a code snippet ready to apply.

OUTPUT FORMAT:

## Stability Report — {{repo_name}}

### Critical (will cause production incidents)
For each:
- **Location:** `file:line`
- **Bug:** What's wrong, when it triggers.
- **Impact:** What breaks (data loss? user-facing error? silent corruption?)
- **Fix:**
```{{language}}
// Before: [existing code]

// After: [fixed code]
```

### High Risk (likely to cause issues under load or edge cases)
[Same format]

### Hardening Opportunities (proactive improvements)
[Same format]

### Missing Observability
- List of places that need: logging, metrics, alerts, health checks.
- Specific log lines to add with context fields.

CONSTRAINTS:
- Every fix must be backwards-compatible.
- Prefer stdlib/existing dependency solutions over adding new packages.
- Fixes must be production-safe: no experimental patterns, no "clever" solutions.
- If a fix requires multiple files, list all files that need changes.

FAIL-SAFE:
- If you cannot determine the impact of a potential bug, mark it [NEEDS TESTING] with a suggested test scenario.
- If the codebase has no tests, note this as a P0 finding and suggest the 5 most critical test cases to add first.
```

---

## PROMPT 3 — Architecture & Pattern Review

**Use when:** You want to validate that the codebase follows correct patterns, or before a refactor.

```
ROLE: Principal Software Architect reviewing codebase patterns and structure.
      Expertise: Design patterns, SOLID principles, 12-factor app, clean architecture, DDD.
      Constraints: Pragmatic — optimize for the team's reality, not theoretical perfection.
      LENS: JTBD (Jobs-to-Be-Done) — does the architecture serve what the code needs to do?

CONTEXT:
- Repository: {{repo_path}}
- Tech stack: {{tech_stack}}
- Team size: {{team_size}} (e.g., "solo developer" or "3 developers")
- Growth trajectory: {{growth}} (e.g., "scaling to 10x users" or "maintenance mode")
- Known tech debt: {{tech_debt}} (or "Unknown — assess from scratch")

OBJECTIVE: Evaluate the codebase architecture against industry patterns and produce actionable refactoring recommendations.

Acceptance criteria:
1. Current architecture documented as-is (one paragraph + diagram description).
2. Pattern violations identified with specific examples from the code.
3. Each recommendation includes: what to change, why, effort estimate, and risk of NOT changing.
4. Recommendations sorted by value — what gives the most leverage for the least effort.

PROCESS (follow in order):
1. Map the current architecture:
   - Directory structure and module boundaries.
   - Data flow: entry points → processing → storage → response.
   - Dependency graph: what depends on what? Are there circular dependencies?
   - Configuration management: how are env vars, secrets, and config handled?

2. Evaluate against core principles:
   - **Separation of concerns:** Is business logic mixed with infrastructure? Are handlers doing too much?
   - **DRY:** Is there duplicated logic? Copy-pasted patterns that should be abstracted?
   - **Single Responsibility:** Do modules/classes/functions do one thing well?
   - **Dependency Inversion:** Are high-level modules depending on low-level details?
   - **Error handling consistency:** Is there one pattern or many ad-hoc approaches?

3. Evaluate project-specific patterns:
   - **API layer:** Consistent request validation, response formatting, error responses?
   - **Database layer:** Repository pattern? Raw queries scattered? ORM usage consistent?
   - **Auth/Authz:** Centralized or scattered? Middleware-based or per-route?
   - **Config:** Centralized? Validated at startup? Type-safe?
   - **Testing:** Strategy present? Unit/integration/e2e separation?

4. Evaluate for the team's reality:
   - Solo dev? Don't over-architect. Focus on maintainability and clear boundaries.
   - Growing team? Focus on conventions, linting rules, and clear module ownership.
   - High scale? Focus on statelessness, caching strategy, and database optimization.

5. Produce recommendations ranked by leverage (impact / effort).

OUTPUT FORMAT:

## Architecture Review — {{repo_name}}

### Current State (As-Is)
One paragraph describing the architecture. Mention key patterns in use.

### What's Working Well
- List 3-5 things the codebase does right. Be specific.

### Pattern Violations & Recommendations

For each (max 10, ranked by leverage):

#### [#] {{Pattern Name}} — {{One-line summary}}
- **Where:** `file(s)` affected
- **Current:** What's happening now
- **Recommended:** What it should look like (with code example)
- **Why:** Business impact of the change
- **Risk of inaction:** What gets worse over time
- **Effort:** S / M / L
- **Dependencies:** What else needs to change first

### Refactoring Roadmap
Ordered list of which changes to make first, with rationale for the sequence.

### Anti-Patterns Detected
Table of anti-patterns found with severity:
| Anti-Pattern | Location | Severity | Quick Description |
|---|---|---|---|

CONSTRAINTS:
- Be pragmatic. A solo developer does not need enterprise DDD.
- Every recommendation must come with a concrete "before/after" code example.
- Don't recommend rewrites. Recommend incremental refactors that can be done file-by-file.
- If the current pattern works and scales well enough, say so. Don't fix what isn't broken.

FAIL-SAFE:
- If the codebase is too small to warrant architectural analysis (< 10 files), say so and focus on code quality and best practices instead.
- If patterns are inconsistent, pick the best one already in the codebase and recommend standardizing on it.
```

---

## PROMPT 4 — Feature Discovery & Roadmap Generator

**Use when:** You want to identify what's missing, incomplete, or could be added to move the product forward.

```
ROLE: Technical Product Manager analyzing a codebase for feature completeness and growth opportunities.
      Expertise: Product thinking, user experience, competitive analysis via code, technical feasibility.
      Constraints: Recommendations must be implementable with the existing tech stack.
      LENS: JTBD (Jobs-to-Be-Done) + MECE categorization.

CONTEXT:
- Repository: {{repo_path}}
- Tech stack: {{tech_stack}}
- Product type: {{product_type}} (e.g., "SaaS booking platform", "internal DevOps tooling", "e-commerce site")
- Target users: {{target_users}} (e.g., "medical clinic admins in France", "DevOps teams at SMEs")
- Current stage: {{stage}} (e.g., "MVP", "growth", "mature")
- Business goals: {{business_goals}} (e.g., "increase retention", "reduce support tickets", "monetize")

OBJECTIVE: Discover incomplete features, missing functionality, and high-value opportunities by analyzing the codebase.

Acceptance criteria:
1. All TODO/FIXME/HACK/XXX comments catalogued with context.
2. Incomplete features identified (partial implementations, stubbed functions, commented-out code).
3. Missing standard features identified based on the product type (e.g., a booking app without cancellation flow).
4. Each opportunity scored by: user impact (1-5), revenue impact (1-5), implementation effort (S/M/L).
5. Output as a prioritized product backlog.

PROCESS (follow in order):
1. Scan for explicit markers: TODO, FIXME, HACK, XXX, TEMP, WORKAROUND, @deprecated.
   - For each, extract the surrounding context (what file, what function, what the comment says).

2. Scan for incomplete implementations:
   - Empty function bodies or functions that only throw "not implemented."
   - Commented-out code blocks (why was it disabled?).
   - Feature flags/toggles that gate unreleased features.
   - Routes/endpoints defined but not fully implemented.
   - UI components that are hidden or conditionally rendered but present.

3. Analyze for standard missing features (MECE by product type):
   - **Auth & Access:** Password reset? Email verification? Role-based access? SSO? 2FA?
   - **User Experience:** Search? Filtering? Sorting? Pagination? Loading states? Empty states? Error states?
   - **Data Management:** Export? Import? Bulk operations? Audit log? Soft delete? Undo?
   - **Notifications:** Email? In-app? Webhooks? Scheduling?
   - **Admin/Operations:** Admin dashboard? User management? Analytics? Feature flags?
   - **API:** Rate limiting? Versioning? API docs? Webhooks?
   - **Compliance:** GDPR data export/deletion? Cookie consent? Accessibility (a11y)?
   - **Monetization:** Payment integration? Subscription management? Usage tracking? Invoicing?

4. Identify quick wins: features that are 80% done and just need finishing touches.

5. Score and prioritize all findings.

OUTPUT FORMAT:

## Feature Discovery Report — {{repo_name}}

### TODO/FIXME Catalogue
| # | Marker | File:Line | Context | Suggested Action | Effort |
|---|--------|-----------|---------|------------------|--------|

### Incomplete Features
For each:
- **Feature:** What it's supposed to do
- **Current state:** What's implemented vs. what's missing
- **Files involved:** List of relevant files
- **To complete:** Specific tasks remaining
- **Effort:** S / M / L

### Missing Standard Features
Grouped by category (MECE), each with:
- **Feature:** What's missing
- **User Impact:** 1-5
- **Revenue Impact:** 1-5
- **Effort:** S / M / L
- **Recommendation:** Build / Skip / Defer, with reasoning

### Quick Wins (< 2 hours each)
Bulleted list of features that are nearly complete or trivial to add.

### Prioritized Backlog (Top 10)
| Priority | Feature | User Impact | Revenue Impact | Effort | Category |
|----------|---------|-------------|----------------|--------|----------|

### Feature Roadmap Suggestion
- **This week:** [2-3 quick wins]
- **This month:** [3-5 medium features]
- **This quarter:** [2-3 large features]

CONSTRAINTS:
- Only suggest features implementable with the existing tech stack.
- Don't suggest features that require a different business model unless asked.
- Be specific: "add email notification when booking is confirmed" not "improve notifications."
- If a feature requires external services (payment, email, SMS), name the specific provider that fits the stack.

FAIL-SAFE:
- If the codebase is too early-stage to assess feature completeness, focus on: what's the MVP checklist for this product type, and what's done vs. not done?
- If you can't determine the product type from the code, state your best guess and ask for confirmation.
```

---

## PROMPT 5 — Quick Fix Sprint (25-min ADHD Block)

**Use when:** You have one 25-minute focus sprint and want maximum impact. Designed for ADHD work patterns.

```
ROLE: Senior Developer executing a focused 25-minute improvement sprint.
      Expertise: Rapid code improvement, high-impact small changes, pragmatic fixes.
      Constraints: Time-boxed. Only changes that can be completed AND verified in 25 minutes.
      LENS: Pareto — 20% effort for 80% impact.

CONTEXT:
- Repository: {{repo_path}}
- Focus area: {{focus}} (e.g., "error handling", "security", "performance", "types", "tests", "cleanup" or "auto — pick highest impact")
- Sprint number: {{sprint_number}} (e.g., "1" for first sprint, "5" for fifth — avoids repeating previous work)
- Previous sprint notes: {{previous_sprint}} (or "None — first sprint")

OBJECTIVE: Execute the highest-impact improvements possible in a 25-minute window. Actually make the changes — don't just report.

Acceptance criteria:
1. Each change is atomic: one purpose, one commit message.
2. Each change is reversible: if anything breaks, it can be reverted independently.
3. All changes are verified: code runs, linting passes, no new errors introduced.
4. Sprint produces a changelog with what was done and why.

PROCESS (follow in order — respect the timebox):
1. **[2 min] Scan:** Quick scan of the focus area. Identify the 3-5 highest-impact fixes available.
2. **[1 min] Plan:** Pick the top 3 that can definitely be completed in time. List them.
3. **[18 min] Execute:** Make the changes. For each:
   - State what you're changing and why (one line).
   - Make the change.
   - Verify it works (run the relevant check: lint, type-check, test, or manual review).
4. **[2 min] Verify:** Run a final check across all changes. Ensure nothing is broken.
5. **[2 min] Log:** Produce the sprint changelog.

OUTPUT FORMAT:

## Sprint {{sprint_number}} Changelog — {{repo_name}}

**Focus:** {{focus}}
**Duration:** 25 minutes
**Changes made:** {{count}}

### Changes
For each:
1. **{{file}}:** {{one-line description}}
   - Why: {{reason}}
   - Commit message: `{{conventional commit message}}`

### Verification
- [ ] Linting passes
- [ ] Type-checking passes (if applicable)
- [ ] No new runtime errors
- [ ] Existing tests still pass (if tests exist)

### Next Sprint Suggestions
Top 3 things to tackle in the next 25-minute sprint (so you can jump right in).

CONSTRAINTS:
- DO NOT start large refactors. If something needs > 10 minutes, log it for a dedicated session.
- DO NOT add new dependencies unless absolutely critical for a fix.
- DO make the actual changes. This is not an audit — it's an execution sprint.
- Prefer fixes that improve safety and correctness over cosmetic improvements.
- If the focus is "auto," prioritize: security > bugs > error handling > types > performance > cleanup.

FAIL-SAFE:
- If the codebase is too unfamiliar to make safe changes quickly, spend the sprint on:
  1. Adding a README or improving the existing one.
  2. Adding an .env.example file.
  3. Adding or fixing linting configuration.
  4. Documenting the setup process.
  These are always safe, always valuable.
```

---

## PROMPT 6 — Continuous Improvement Loop (Multi-Session)

**Use when:** You want to run repeated passes over the same repo across multiple sessions, building on previous work.

```
ROLE: Lead Developer maintaining an ongoing improvement program for this repository.
      Expertise: Incremental refactoring, technical debt management, continuous improvement.
      Constraints: Never break production. Always leave the codebase better than you found it.
      LENS: Kaizen — continuous small improvements compound over time.

CONTEXT:
- Repository: {{repo_path}}
- Tech stack: {{tech_stack}}
- Session number: {{session_number}}
- Improvement log location: {{log_path}} (e.g., "IMPROVEMENTS.md" in repo root — create if missing)
- Previous session summary: {{previous_summary}} (or "First session — no history")
- Time budget: {{time_budget}} (e.g., "30 min" or "1 hour" or "unlimited")

OBJECTIVE: Execute the next iteration of improvements, building on previous sessions. Maintain a running log so no work is repeated and progress is tracked.

Acceptance criteria:
1. Read the improvement log before starting. Do not repeat previous work.
2. Identify the next highest-value improvements based on current state.
3. Execute changes and update the improvement log.
4. Leave clear notes for the next session.

PROCESS (follow in order):
1. **Read the improvement log** (or create it if missing).
2. **Quick health check:** Has anything changed since last session? New files? New dependencies? Broken tests?
3. **Identify this session's targets:** Based on the log and current state, pick the next improvements:
   - Anything marked "NEXT SESSION" in the log.
   - Otherwise, follow this priority: P0 bugs > security > stability > performance > code quality > features > cleanup.
4. **Execute improvements** one at a time. For each:
   - Make the change.
   - Verify it works.
   - Log it in the improvement log.
5. **Update the improvement log** with:
   - Session number, date, time spent.
   - What was done (with file references).
   - What's recommended for next session.
   - Overall health score trajectory (1-10).
6. **Final verification:** Run available checks (lint, tests, build).

OUTPUT FORMAT (update IMPROVEMENTS.md):

```markdown
# Improvement Log — {{repo_name}}

## Session {{session_number}} — {{date}}
**Time spent:** {{time}}
**Health score:** {{score}}/10 (previous: {{prev_score}}/10)

### Completed
- [ ] {{change 1}} — `{{file(s)}}`
- [ ] {{change 2}} — `{{file(s)}}`
- [ ] {{change 3}} — `{{file(s)}}`

### Deferred (not enough time)
- {{item}} — Reason: {{why deferred}}

### Next Session Priorities
1. {{priority 1}}
2. {{priority 2}}
3. {{priority 3}}

### Cumulative Stats
- Total sessions: {{n}}
- Total changes: {{n}}
- Bugs fixed: {{n}}
- Security issues resolved: {{n}}
- Performance improvements: {{n}}
- Health score trend: {{e.g., "5 → 6 → 7"}}
```

CONSTRAINTS:
- Always read the log first. Repeating work is wasted time.
- Make atomic changes. One concern per change.
- If the time budget is short, pick fewer high-impact items over many small ones.
- Always leave "Next Session Priorities" filled in — future you (or future Claude Code session) needs a running start.
- The improvement log is the single source of truth. Keep it updated accurately.

FAIL-SAFE:
- If the repo has changed significantly since last session (major refactor, new framework), start with a mini-audit (Prompt 1 in abbreviated form) before continuing the improvement loop.
- If the improvement log is missing or corrupted, create a fresh one and start with a Quick Audit.
```

---

## Operator Guide

### How to Use These Prompts

**First time with a repo:**
1. Start with **Prompt 1 (Full Audit)** to get the lay of the land.
2. Use the findings to feed **Prompt 2 (Bug Hunter)** for critical stability fixes.
3. Run **Prompt 3 (Architecture Review)** if the audit reveals structural issues.
4. Use **Prompt 4 (Feature Discovery)** when stability is solid and you want to grow.

**Ongoing maintenance:**
- Use **Prompt 6 (Continuous Improvement Loop)** for regular sessions.
- Use **Prompt 5 (Quick Fix Sprint)** for 25-minute ADHD-friendly focus blocks.

**Combining prompts:**
- Run Prompt 1 → take the P0/P1 findings → feed them into Prompt 5 as the `{{focus}}` area.
- Run Prompt 4 → take the Quick Wins → execute them with Prompt 5 sprints.
- Run Prompt 6 regularly → when health score plateaus, run Prompt 1 again for fresh perspective.

### Placeholder Quick-Reference

| Placeholder | What to Fill | Example |
|---|---|---|
| `{{repo_path}}` | Absolute path or "current directory" | `/home/user/projects/myapp` |
| `{{tech_stack}}` | Languages, frameworks, infra | `SvelteKit + Supabase + TypeScript` |
| `{{environment}}` | Where it runs | `Docker Compose + Traefik on DigitalOcean` |
| `{{business_context}}` | What the product does, who uses it | `Medical booking SaaS for French clinics` |
| `{{known_issues}}` | Current problems or "none" | `Intermittent Zenoti API timeouts` |
| `{{symptoms}}` | Current errors or "proactive hardening" | `502 errors under load` |
| `{{product_type}}` | Category for feature analysis | `SaaS booking platform` |
| `{{target_users}}` | End users of the product | `Clinic admins and patients` |
| `{{focus}}` | Sprint focus area or "auto" | `error handling` |
| `{{sprint_number}}` | Sequential sprint counter | `3` |
| `{{session_number}}` | Sequential session counter | `7` |
| `{{time_budget}}` | How long you have | `25 min` |
| `{{previous_notes}}` | Output from previous run | [paste previous summary] |

### 10-Item Operator Checklist

Before running any prompt:

1. All `{{placeholders}}` are filled with real values
2. Repository path is correct and accessible
3. Tech stack description is accurate and complete
4. Previous session notes are included (if applicable)
5. Time budget is realistic for the prompt type
6. Git status is clean (commit or stash before audit)
7. You have a way to revert (git branch, backup, etc.)
8. Environment-specific constraints are mentioned (GDPR, compliance, etc.)
9. Focus area matches your current priority
10. You're ready to act on findings (don't audit if you can't fix)

---

## Micro-Tests

### Test 1 — Happy Path (Node.js SaaS)

Prompt 1 with:
- `repo_path`: `./`
- `tech_stack`: `Next.js + Prisma + PostgreSQL + TypeScript`
- `environment`: `Vercel + Supabase`
- `business_context`: `B2B SaaS dashboard for marketing analytics`
- `known_issues`: `none`
- `previous_notes`: `None — first audit`

**Expected:** Full MECE audit with findings across all 6 categories, prioritized backlog, quick wins section.

### Test 2 — Edge Case (Minimal Repo)

Prompt 3 with:
- `repo_path`: `./`
- `tech_stack`: `Python + Flask`
- `team_size`: `solo developer`
- `growth`: `maintenance mode`
- `tech_debt`: `Unknown` (Applied to a repo with only 5 files and < 500 lines)

**Expected:** Fail-safe triggers — prompt notes the codebase is too small for full architectural analysis and focuses on code quality and best practices instead.

### Test 3 — Multi-Session Continuity

Prompt 6 with:
- `session_number`: `3`
- `previous_summary`: `"Session 2: Fixed 3 unhandled promise rejections in api/routes.ts, added .env.example, health score 5→6. Next: add input validation on booking endpoints."`

**Expected:** Reads previous context, does NOT repeat the promise rejection fixes, starts with input validation as directed, updates the log with session 3 entries.

---

## Self-Critique & Revisions Applied

**Revision 1 — Added ADHD-specific sprint prompt (Prompt 5).** Initial draft only had 5 prompts without a time-boxed option. Added the 25-minute sprint format with explicit timebox breakdowns because Patryk works in sprint blocks and needs prompts that respect executive function constraints. Fail-safe ensures even unfamiliar repos produce value (README, .env.example, linting).

**Revision 2 — Added multi-session continuity mechanism (Prompt 6).** Without a log-based approach, each Claude Code session would start from scratch. The IMPROVEMENTS.md log creates persistent state across sessions, prevents repeated work, and gives a "running start" via the Next Session Priorities section.

**Revision 3 — Strengthened all fail-safes with concrete fallback actions.** Initial fail-safes were generic ("state what's missing"). Revised to include specific fallback tasks (audit a subset of dirs, document what you can, create safety-net files). Every fail-safe now produces useful output even when the primary objective can't be fully met.

---

*PromptSmith v1.0 — Claude Code Iterative Improvement Pack*
*Designed for production repos. Optimized for solo developers and small teams.*
*Built for ADHD-friendly sprint workflows with external accountability.*
