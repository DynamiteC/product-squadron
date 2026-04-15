/**
 * mission/init.cjs
 * Initializes a new mission following Nelson-inspired orchestration.
 */

const fs = require('fs');
const path = require('path');

const missionName = process.argv[2] || 'new-mission';
const missionDir = path.join(process.cwd(), '.squadron', missionName);

if (!fs.existsSync(missionDir)) {
  fs.mkdirSync(missionDir, { recursive: true });
}

const missionMeta = {
  name: missionName,
  timestamp: new Date().toISOString(),
  status: 'Initialise',
  action_station: 'Patrol',
  hull_integrity: 1.0,
  ships: [],
};

fs.writeFileSync(path.join(missionDir, 'mission.json'), JSON.stringify(missionMeta, null, 2));

console.log(`✅ Mission '${missionName}' initialized at ${missionDir}.`);
console.log(`Action Station: Patrol.`);
