/**
 * mission/log.cjs
 * Appends an entry to the Captain's Log for auditability and reliability.
 */

const fs = require('fs');
const path = require('path');

const [,, missionName, role, message] = process.argv;
if (!missionName || !role || !message) {
  console.log("Usage: node log.cjs <mission-name> <role> <message>");
  process.exit(1);
}

const missionDir = path.join(process.cwd(), '.squadron', missionName);
if (!fs.existsSync(missionDir)) {
  fs.mkdirSync(missionDir, { recursive: true });
}

const logPath = path.join(missionDir, 'captains_log.md');
const entry = `[${new Date().toISOString()}] [${role.toUpperCase()}] ${message}\n`;

fs.appendFileSync(logPath, entry);

console.log(`✅ Log entry recorded for ${role}.`);
