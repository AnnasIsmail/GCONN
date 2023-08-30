import getAPIWeapons from "./getAPIWeapons";

export default async function getWeaponsDetail(uuid, context, updateContextValue){
     const weapons = await getAPIWeapons(context, updateContextValue);
     return weapons.find(data => data.uuid === uuid);
}