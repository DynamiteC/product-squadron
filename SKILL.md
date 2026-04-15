---
name: product-squadron
description: Autonomous development squadron for full-stack products. Integrates hierarchical command (Nelson), token-optimized slang (Caveman), and tree-search dashboard (Evo).
---

# Product Squadron

High-performance autonomous agent framework for full-product delivery and optimization.

## Core Frameworks

### 1. Reliable Command (Nelson)
- **Hierarchy**: Defined in `references/squadron/hierarchy.md` (Admiral, Captain, Crew).
- **Audit**: Captain's Log in `scripts/mission/log.cjs` and Dashboard in `scripts/mission/dashboard.cjs`.
- **Safety**: Action Station classifications in `references/squadron/risk-management.md`.

### 2. Terse Communication (Caveman)
- **Protocol**: Mandated in `references/communication/terse-protocol.md`.
- **Slang**: Use the Caveman Dictionary for high-density updates.

### 3. Tree Search Optimization (Evo)
- **Commands**: `scripts/mission/branch.cjs` and `scripts/mission/prune.cjs`.
- **Method**: Parallel experimentation in `references/optimization/tree-search.md`.

## Expert Roles & Guardrails

Access specialized workflows and mandatory expertise guardrails (checklists) for each role:
- **Product Suite**: `references/roles/product-suite.md` (Architect, Designer, Full-stack, Mobile).
- **Quality & Ops**: `references/roles/quality-ops.md` (QA, Security, SRE, SEO).

## Mission Workflow

1. **Sailing Orders**: Define mission objective, tech stack, and constraints.
2. **Dashboard Init**: Initialize mission via `scripts/mission/init.cjs`.
3. **Execution**: Use Caveman Slang and log all significant events via `scripts/mission/log.cjs`.
4. **Guardrails**: Every role MUST verify their mandatory guardrails before reporting.
5. **Optimization**: Branch new experiments, benchmark scores, and prune regressions.
6. **Turnover Brief**: Generate final report with log history and benchmark data.
