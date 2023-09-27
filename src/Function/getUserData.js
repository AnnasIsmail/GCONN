import { get } from "./Api";

export default async function getUserData(context, updateContextValue, token) {
    if (context.user) {
        return context.user;
    } else {
        try {
            const response = await get("/user/", "main", { authorization: token });
            updateContextValue("user", response.data);
            updateContextValue("login", true);
            return response.data;
        } catch (error) {
            console.error("Error fetching weapons:", error);
            throw error; 
        }
    }
}
