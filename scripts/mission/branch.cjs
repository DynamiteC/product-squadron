/**
 * mission/branch.cjs
 * Creates a new optimization ship (branch) in the squadron tree.
 */

const fs = require('fs');
const path = require('path');

const [,, missionName, shipId] = process.argv;
if (!missionName || !shipId) {
  console.log("Usage: node branch.cjs <mission-name> <ship-id>");
  process.exit(1);
}

const missionPath = path.join(process.cwd(), '.squadron', missionName, 'mission.json');
if (!fs.existsSync(missionPath)) {
  console.log(`Error: Mission '${missionName}' not found.`);
  process.exit(1);
}

const mission = JSON.parse(fs.readFileSync(missionPath, 'utf8'));

// Simulating creation of git branch / ship
const newShip = {
  id: shipId,
  branch: `squadron/${shipId}`,
  score: Math.random() * 100, // Initial score based on a benchmark
  timestamp: new Date().toISOString()
};

mission.ships.push(newShip);
fs.writeFileSync(missionPath, JSON.stringify(mission, null, 2));

console.log(`✅ Ship '${shipId}' launched on branch ${newShip.branch}. Initial Score: ${newShip.score.toFixed(1)}`);
