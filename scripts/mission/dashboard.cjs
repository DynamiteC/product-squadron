/**
 * mission/dashboard.cjs
 * Terminal-based Admiral's Dashboard for tracking squadron missions and optimization trees.
 */

const fs = require('fs');
const path = require('path');

const missionName = process.argv[2];
if (!missionName) {
  console.log("Usage: node dashboard.cjs <mission-name>");
  process.exit(1);
}

const missionPath = path.join(process.cwd(), '.squadron', missionName, 'mission.json');
if (!fs.existsSync(missionPath)) {
  console.log(`Error: Mission '${missionName}' not found.`);
  process.exit(1);
}

const mission = JSON.parse(fs.readFileSync(missionPath, 'utf8'));

console.log(`--- SQUADRON ADMIRAL DASHBOARD ---`);
console.log(`Mission: ${mission.name.toUpperCase()}`);
console.log(`Status:  ${mission.status}`);
console.log(`Action:  ${mission.action_station}`);
console.log(`Hull:    ${(mission.hull_integrity * 100).toFixed(0)}%`);
console.log(`----------------------------------`);
console.log(`ACTIVE SHIPS (OPTIMIZATION TREE):`);

if (mission.ships.length === 0) {
  console.log("No active ships in the optimization tree.");
} else {
  mission.ships.forEach(ship => {
    const statusMark = ship.score > 80 ? "[PASS]" : (ship.score > 50 ? "[WARN]" : "[FAIL]");
    console.log(`${statusMark} Ship: ${ship.id} | Score: ${ship.score.toFixed(1)} | Branch: ${ship.branch}`);
  });
}
console.log(`----------------------------------`);
