/**
 * mission/web_dashboard.cjs
 * Generates a high-fidelity, "Evo-like" HTML dashboard for mission monitoring.
 */

const fs = require('fs');
const path = require('path');

const missionName = process.argv[2];
if (!missionName) {
  console.log("Usage: node web_dashboard.cjs <mission-name>");
  process.exit(1);
}

const missionDir = path.join(process.cwd(), '.squadron', missionName);
const missionPath = path.join(missionDir, 'mission.json');

if (!fs.existsSync(missionPath)) {
  console.log(`Error: Mission '${missionName}' not found.`);
  process.exit(1);
}

const mission = JSON.parse(fs.readFileSync(missionPath, 'utf8'));

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQUADRON | ${mission.name.toUpperCase()}</title>
    <style>
        :root {
            --bg: #0a0a0b;
            --surface: #161618;
            --primary: #3b82f6;
            --success: #10b981;
            --warning: #f59e0b;
            --error: #ef4444;
            --text: #f3f4f6;
            --text-dim: #9ca3af;
        }
        body {
            background: var(--bg);
            color: var(--text);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            margin: 0;
            padding: 2rem;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #27272a;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
        }
        .status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 600;
            background: var(--primary);
            color: white;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        .card {
            background: var(--surface);
            border: 1px solid #27272a;
            border-radius: 0.75rem;
            padding: 1.5rem;
        }
        .card h3 { margin-top: 0; color: var(--text-dim); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; }
        .stat { font-size: 2rem; font-weight: 700; margin: 0.5rem 0; }
        .progress-container {
            background: #27272a;
            height: 8px;
            border-radius: 4px;
            overflow: hidden;
            margin-top: 1rem;
        }
        .progress-bar {
            height: 100%;
            background: var(--primary);
        }
        .ship-list {
            margin-top: 2rem;
            width: 100%;
            border-collapse: collapse;
        }
        .ship-list th { text-align: left; color: var(--text-dim); padding: 1rem; border-bottom: 1px solid #27272a; }
        .ship-list td { padding: 1rem; border-bottom: 1px solid #27272a; }
        .score-pill {
            display: inline-block;
            padding: 0.125rem 0.5rem;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        .high { background: rgba(16, 185, 129, 0.1); color: var(--success); }
        .mid { background: rgba(245, 158, 11, 0.1); color: var(--warning); }
        .low { background: rgba(239, 68, 68, 0.1); color: var(--error); }
    </style>
</head>
<body>
    <div class="header">
        <div>
            <h1 style="margin:0">\${mission.name.toUpperCase()}</h1>
            <p style="color:var(--text-dim);margin:0.25rem 0 0">Squadron Mission Dashboard</p>
        </div>
        <div class="status-badge">\${mission.status}</div>
    </div>

    <div class="grid">
        <div class="card">
            <h3>Hull Integrity</h3>
            <div class="stat">\${(mission.hull_integrity * 100).toFixed(0)}%</div>
            <div class="progress-container">
                <div class="progress-bar" style="width: \${mission.hull_integrity * 100}%"></div>
            </div>
        </div>
        <div class="card">
            <h3>Active Ships</h3>
            <div class="stat">\${mission.ships.length}</div>
            <p style="color:var(--text-dim)">Optimization branches in flight</p>
        </div>
        <div class="card">
            <h3>Action Station</h3>
            <div class="stat" style="color: \${mission.action_station === 'Patrol' ? 'var(--success)' : 'var(--error)'}">\${mission.action_station}</div>
            <p style="color:var(--text-dim)">Risk Level</p>
        </div>
    </div>

    <table class="ship-list">
        <thead>
            <tr>
                <th>Ship ID</th>
                <th>Branch</th>
                <th>Performance Score</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            \${mission.ships.map(ship => \`
                <tr>
                    <td>\${ship.id}</td>
                    <td style="font-family:monospace">\${ship.branch}</td>
                    <td>
                        <span class="score-pill \${ship.score > 80 ? 'high' : (ship.score > 50 ? 'mid' : 'low')}">
                            \${ship.score.toFixed(1)}%
                        </span>
                    </td>
                    <td style="color:\${ship.score > 50 ? 'var(--success)' : 'var(--error)'}">
                        \${ship.score > 50 ? 'Optimal' : 'Regressed'}
                    </td>
                </tr>
            \`).join('')}
        </tbody>
    </table>
</body>
</html>
\`;

const outputPath = path.join(missionDir, 'dashboard.html');
fs.writeFileSync(outputPath, html);

console.log(\`✅ Web Dashboard generated at \${outputPath}.\`);
