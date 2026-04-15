---
name: product-squadron
description: Autonomous development squadron for full-stack products. Integrates hierarchical command (Nelson), token-optimized communication (Caveman), and tree-search dashboard (Evo).
---

# Product Squadron

High-performance autonomous agent framework for full-product delivery and optimization.

## Core Frameworks

### 1. Reliable Command (Nelson)
- **Hierarchy**: Defined in `references/squadron/hierarchy.md` (Admiral, Captain, Crew).
- **Worktrees**: Use `scripts/mission/worktree_orchestrator.cjs` for parallel agent ships.
- **Audit**: Captain's Log in `scripts/mission/log.cjs` and Dashboard in `scripts/mission/dashboard.cjs`.

### 2. Terse Communication & Token Advisor (Caveman)
- **Protocol**: Mandated in `references/communication/terse-protocol.md`.
- **Advisor**: `scripts/utils/token_advisor.cjs` provides token-efficiency coaching to users.
- **Objective**: Treat tokens as currency; maximize ROI through linguistic density.

### 3. Tree Search Optimization (Evo)
- **Commands**: `scripts/mission/branch.cjs` and `scripts/mission/prune.cjs`.
- **Method**: Parallel experimentation in `references/optimization/tree-search.md`.

## Expert Roles & Guardrails

Access specialized workflows and mandatory expertise guardrails for each role:
- **Product Suite**: `references/roles/product-suite.md` (Architect, Designer, Full-stack, Mobile).
- **Quality & Ops**: `references/roles/quality-ops.md` (QA, Security, SRE, SEO).

## Mission Workflow

1. **Sailing Orders**: Define mission objective, tech stack, and constraints.
2. **Token Audit**: The Admiral will suggest more token-efficient "Orders" to the user.
3. **Branching Worktrees**: Launch expert "Ships" in parallel git worktrees.
4. **Finalization**: Compare all ship outputs, select the optimal solution, and finalize.
5. **Turnover Brief**: Generate final report with log history, benchmark scores, and token savings.
