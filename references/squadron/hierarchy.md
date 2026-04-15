# Squadron Hierarchy

The Product Squadron operates under a three-tier command structure to ensure mission success, safety, and auditability.

## 1. Admiral (Orchestration)
- **Role**: High-level mission planning and multi-agent coordination.
- **Responsibility**: Defines "Sailing Orders," manages the "Quarterdeck Rhythm" (checkpoints), and oversees budget/token usage (Hull Integrity).
- **Tooling**: Uses `mission/init.cjs` to establish the mission scope.

## 2. Captain (Command)
- **Role**: Tactical leads for specific workstreams (e.g., Frontend Ship, Backend Ship).
- **Responsibility**: Breaks down Admiral's orders into sub-tasks, verifies "Crew" outputs, and manages the "Captain's Log."
- **Verification**: Must verify all Crew outputs before reporting to the Admiral.

## 3. Crew (Specialists)
- **Role**: Individual contributors performing specific tasks.
- **Roles**:
  - **PWO (Principal Warfare Officer)**: Coding / Full-stack.
  - **MEO (Marine Engineering Officer)**: QA / Testing.
  - **WEO (Weapon Engineering Officer)**: SRE / Infrastructure.
  - **NO (Navigating Officer)**: Research / SEO.
  - **Security Officer**: Vulnerability scanning and security auditing.
  - **Designer**: UX/UI and aesthetic polish.
  - **Mobile Lead**: Native/Cross-platform mobile development.
