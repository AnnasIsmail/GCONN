import getAPIAgents from "./getAPIAgents";

export default async function getAgentDetail(uuid, context, updateContextValue){
    const weapons = await getAPIAgents(context, updateContextValue);
    return weapons.find(data => data.uuid === uuid);
}