export default function getAllRoles(agentsData) {
  const roleAgents = {};
  agentsData.forEach((agent) => {
    if (!agent.role) {
      return false;
    }
    const roleName = agent.role.displayName;
    if (!roleAgents[roleName]) {
      roleAgents[roleName] = {
        name: roleName,
        agents: [],
        assetPath: agent.role.assetPath,
        description: agent.role.description,
        displayIcon: agent.role.displayIcon,
        displayName: agent.role.displayName,
        uuid: agent.role.uuid,
      };
    }
    roleAgents[roleName].agents.push(agent);
  });
  const roleAgentsArray = Object.values(roleAgents);
  return roleAgentsArray;
}