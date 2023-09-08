import { get } from "./Api";

export default async function getAPIAgents(context, updateContextValue) {
    if (context.agents) {
        return context.agents;
    } else {
        try {
            const response = await get("/v1/agents", "valorant");
            updateContextValue("agents", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching weapons:", error);
            throw error; 
        }
    }
}
