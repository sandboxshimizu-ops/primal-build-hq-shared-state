const fs = require('node:fs');

const state = JSON.parse(fs.readFileSync('shared-state.json', 'utf8'));
const mission = fs.readFileSync('PRIMAL-MISSION.md', 'utf8');
const room = fs.readFileSync('TEAM-ROOM.md', 'utf8');
const section = heading => {
  const match = mission.match(new RegExp(`## ${heading}\\n([\\s\\S]*?)(?=\\n## |$)`));
  return match ? match[1].trim() : '';
};
const compact = value => String(value).replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
const bulletList = items => items.map(item => `- ${item}`).join('\n');
const relevantRoom = agent => room.split('\n').filter(line => line.startsWith('|') && (line.includes(agent) || line.includes('All'))).join('\n');
const agent = name => state.team.find(member => member.agent === name);
const assignment = name => state.firstAssignments.find(item => item.agent === name);

function handoff(name, focus) {
  const member = agent(name);
  const task = assignment(name);
  return `# ${name.toUpperCase()} HANDOFF

## Mission
${compact(section('Objective'))}

## Architecture
${state.architecture}

## Your role
${member.role}. ${member.mode}.

## Current assignment
${task.task}

## ${focus} requirements
${name === 'Gemini' ? '- Inventory Google integration evidence read-only; do not create connections or write data.\n- Independently audit Build HQ claims against the Master Blueprint.' : '- Collect read-only source/permission evidence for USEN TIME CARD, Uber Eats, and LINE.\n- Do not activate connectors, submit data, or change external systems.'}

## Staff system and permissions
${bulletList(state.staffSystemRequirements)}

## Current capabilities / status
${bulletList(state.capabilitySummary.map(item => `${item.component}: ${item.state}; evidence: ${item.evidence}; blocker: ${item.blocker}.`))}

## Dependencies and critical path
${state.criticalPath.currentStartingPoint}
${bulletList(state.criticalPath.reason)}

## Tests / evidence
${bulletList(state.currentTests.map(test => `${test.component}: ${test.result} (${test.cases} cases; ${test.scope}).`))}

## Active writer rule
${state.collisionProtection.rule}
Return: ${state.collisionProtection.taskReturn.join(' → ')}.

## Blockers
${bulletList(state.capabilitySummary.filter(item => item.blocker).map(item => `${item.component}: ${item.blocker}.`))}

## Team Room — relevant messages
${relevantRoom(name)}

## Boundary
${state.criticalPath.productionBoundary}
`;
}

fs.writeFileSync('GEMINI-HANDOFF.md', handoff('Gemini', 'Google + independent QA'));
fs.writeFileSync('GROK-HANDOFF.md', handoff('Grok', 'External automation'));
