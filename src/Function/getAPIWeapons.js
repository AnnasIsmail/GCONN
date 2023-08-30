import { get } from "./Api";

export default async function getAPIWeapons(context, updateContextValue) {
    if (context.weapons) {
        return context.weapons;
    } else {
        try {
            const response = await get("/v1/weapons", "valorant");
            updateContextValue("weapons", response.data);
            return response.data;
        } catch (error) {
            console.error("Error fetching weapons:", error);
            throw error; 
        }
    }
}
