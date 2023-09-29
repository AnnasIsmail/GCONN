import { get } from "./Api";

export default async function getSellerData(id, token) {
  try {
    const response = await get(`/seller/${id}`, "main");
    return response.data;
  } catch (error) {
    console.error("Error fetch seller data", error);
    throw error;
  }
}
