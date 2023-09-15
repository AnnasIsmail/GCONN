import { get } from "./Api";

export default async function getAllRanks(context, updateContextValue) {
    if (context.ranks) {
        return context.ranks;
    } else {
        try {
            const response = await get("/v1/competitivetiers", "valorant");
            const data = response.data[response.data.length - 1]?.tiers.filter(data => data.division !== "ECompetitiveDivision::INVALID")
            updateContextValue("ranks", data);
            return data;
        } catch (error) {
            console.error("Error fetching weapons:", error);
            throw error; 
        }
    }
}
