# Tree Search Optimization

The squadron uses tree search to autonomously optimize codebases and product metrics.

## Core Process
1. **Instrument**: Use `benchmark.cjs` to identify target metrics (size, performance, lighthouse score).
2. **Branch**: Create multiple experimental branches (git worktrees) for different optimization strategies.
3. **Prune**: Automatically discard branches that fail tests or regress on target metrics.
4. **Merge**: Promote the winning branch to the main mission worktree.

## Search Strategy
- **Depth-First**: Deeply optimize a single critical path.
- **Breadth-First**: Explore multiple architectural alternatives simultaneously.
- **Metric-Driven**: Focus on specific KPIs (e.g., LCP for SEO, Bundle Size for Mobile).
