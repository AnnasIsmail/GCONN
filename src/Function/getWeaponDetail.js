import getAPIWeapons from "./getAPIWeapons";

export default async function getWeaponDetail(uuid, context, updateContextValue){
     const weapons = await getAPIWeapons(context, updateContextValue);
     return weapons.find(data => data.uuid === uuid);
}