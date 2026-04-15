/**
 * mission/worktree_orchestrator.cjs
 * Manages parallel worktrees for different agents and facilitates comparison/finalization.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const [,, command, missionName, shipId] = process.argv;

const getWorktreePath = (m, s) => path.join(process.cwd(), '.squadron', m, 'worktrees', s);

if (command === 'create') {
  const wtPath = getWorktreePath(missionName, shipId);
  console.log(`Creating worktree for Ship ${shipId} at ${wtPath}...`);
  try {
    // In a real git env, this would be: git worktree add -b <branch> <path>
    if (!fs.existsSync(wtPath)) fs.mkdirSync(wtPath, { recursive: true });
    fs.writeFileSync(path.join(wtPath, 'SOLUTIONS.md'), `# Solution for ${shipId}\nDrafting...`);
    console.log(`✅ Worktree ready.`);
  } catch (e) {
    console.error(`❌ Failed to create worktree: ${e.message}`);
  }
}

if (command === 'compare') {
  const missionDir = path.join(process.cwd(), '.squadron', missionName, 'worktrees');
  const ships = fs.readdirSync(missionDir);
  console.log(`--- SHIP COMPARISON REPORT [MISSION: ${missionName}] ---`);
  ships.forEach(ship => {
    const solPath = path.join(missionDir, ship, 'SOLUTIONS.md');
    if (fs.existsSync(solPath)) {
      const content = fs.readFileSync(solPath, 'utf8').substring(0, 100);
      console.log(`Ship ${ship}: ${content}...`);
    }
  });
  console.log(`--- END REPORT ---`);
}
