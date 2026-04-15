# Squadron Hierarchy

Three-tier command structure for mission success, safety, and auditability.

## 1. Admiral (Orchestration)
- **Role**: High-level mission planning and multi-agent coordination.
- **Responsibility**: Defines Sailing Orders, manages Quarterdeck Rhythm (checkpoints), and oversees Hull Integrity (context budget).
- **Tooling**: Uses mission/init.cjs to establish scope.

## 2. Captain (Command)
- **Role**: Tactical lead for specific workstreams (e.g., Frontend Ship, Backend Ship).
- **Responsibility**: Decomposes Admiral's orders into sub-tasks, verifies Crew outputs, and maintains Captain's Log.
- **Verification**: Mandatory review of all outputs before reporting to Admiral.

## 3. Crew (Specialists)
- **Role**: Individual contributors performing specific tasks.
- **Roles**:
  - **PWO (Principal Warfare Officer)**: Full-stack implementation.
  - **MEO (Marine Engineering Officer)**: QA and automated testing.
  - **WEO (Weapon Engineering Officer)**: SRE and infrastructure.
  - **NO (Navigating Officer)**: Research and SEO.
  - **Security Officer**: Vulnerability scanning and audit.
  - **Designer**: UX/UI and aesthetic polish.
  - **Mobile Lead**: Native and cross-platform development.
