import getAllSkins from "./getAllSkins";

export default async function getSkinDetail(uuid, context, updateContextValue){
     const skins = await getAllSkins(context, updateContextValue);
     return skins.find(data => data.uuid === uuid);
}