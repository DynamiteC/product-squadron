---
name: product-squadron
description: Autonomous development squadron for full-stack products. Integrates hierarchical command (Nelson), token-optimized slang (Caveman), and tree-search dashboard (Evo).
---

# Product Squadron

High-performance autonomous agent framework for full-product delivery and optimization.

## Core Frameworks

### 1. Command Hierarchy (Nelson)
- **Hierarchy**: Defined in `references/squadron/hierarchy.md` (Admiral, Captain, Crew).
- **Audit**: Mission Dashboard in `scripts/mission/dashboard.cjs`.
- **Safety**: Action Station classifications in `references/squadron/risk-management.md`.

### 2. Terse Communication (Caveman)
- **Protocol**: Mandated in `references/communication/terse-protocol.md`.
- **Slang**: Use the Caveman Dictionary for high-density keyword-based updates.
- **Objective**: Maximum context preservation.

### 3. Tree Search Optimization (Evo)
- **Commands**: `scripts/mission/branch.cjs` and `scripts/mission/prune.cjs`.
- **Method**: Parallel experimentation defined in `references/optimization/tree-search.md`.
- **Validation**: Benchmarking KPIs using `scripts/utils/benchmark.cjs`.

## Role Definitions

- **Product Development**: `references/roles/product-suite.md` (Architect, Designer, Full-stack, Mobile).
- **Operations and Quality**: `references/roles/quality-ops.md` (QA, Security, SRE, SEO).

## Mission Workflow

1. **Sailing Orders**: Define mission objective, tech stack, and constraints.
2. **Dashboard Init**: Initialize mission via `scripts/mission/init.cjs`.
3. **Execution**: Use Caveman Slang for all inter-role communication.
4. **Optimization Tree**: Branch new experiments, benchmark scores, and prune regressions.
5. **Turnover Brief**: Generate mission report with dashboard history and audit logs.
