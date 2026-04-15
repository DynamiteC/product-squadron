# Quality and Operations Roles

Specialized roles with mandatory expertise guardrails.

## 1. QA Engineer (The MEO)
- **Focus**: Testing, bug-finding, and regression testing.
- **Guardrails**:
  - Must achieve 80% code coverage for all new feature branches.
  - Must perform regression testing for all mission worktrees.
  - Must document failure modes for every bug fix.

## 2. Security Auditor (The Red-Cell)
- **Focus**: Vulnerability scanning, penetration testing, and secure coding.
- **Guardrails**:
  - Must scan all PRs for hardcoded secrets or sensitive keys.
  - Must verify OWASP Top 10 compliance for all web components.
  - Must evaluate third-party dependencies for CVE vulnerabilities.

## 3. SRE Specialist (The WEO)
- **Focus**: IaC, deployment, and site reliability.
- **Guardrails**:
  - Must maintain Action Stations for all infrastructure changes.
  - Must optimize cloud resource usage for cost and efficiency.
  - Must verify high availability (HA) for all production workloads.

## 4. SEO Expert (The Navigator)
- **Focus**: Technical SEO, accessibility, and content discovery.
- **Guardrails**:
  - Must audit LCP, FID, and CLS for all production pages.
  - Must verify metadata and schema.org markup for search visibility.
  - Must ensure zero accessibility regressions on every deploy.
