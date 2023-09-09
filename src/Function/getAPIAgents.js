import { get } from "./Api";
import getAllRoles from "./getAllRoles";

export default async function getAPIAgents(context, updateContextValue) {
    if (context.agents) {
        return context.agents;
    } else {
        try {
            const response = await get("/v1/agents", "valorant");
            const data = response.data.filter(data => data.isPlayableCharacter)
            updateContextValue("agents", data);
            updateContextValue("roles", getAllRoles(data));
            return data;
        } catch (error) {
            console.error("Error fetching weapons:", error);
            throw error; 
        }
    }
}
