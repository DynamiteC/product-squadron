/**
 * mission/prune.cjs
 * Prunes low-performing ships (branches) from the optimization tree.
 */

const fs = require('fs');
const path = require('path');

const [,, missionName, threshold = 50] = process.argv;
if (!missionName) {
  console.log("Usage: node prune.cjs <mission-name> [threshold]");
  process.exit(1);
}

const missionPath = path.join(process.cwd(), '.squadron', missionName, 'mission.json');
const mission = JSON.parse(fs.readFileSync(missionPath, 'utf8'));

const initialCount = mission.ships.length;
mission.ships = mission.ships.filter(ship => ship.score >= threshold);
const prunedCount = initialCount - mission.ships.length;

fs.writeFileSync(missionPath, JSON.stringify(mission, null, 2));

console.log(`✅ Pruned ${prunedCount} low-performing ships. Threshold: ${threshold}.`);
