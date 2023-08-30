import getAPIWeapons from "./getAPIWeapons";

export default async function getAllSkins(context, updateContextValue) {
  function filter(array) {
    return array.filter(
      (obj) =>
        !(
          obj.displayName.startsWith("Standard") ||
          obj.displayName.startsWith("Random")
        )
    );
  }
  if (context.skins) {
    return context.skins;
  } else {
    const weapons = await getAPIWeapons(context, updateContextValue);
    const skinsReturn = [];
    weapons.forEach((data) => {
      const uuidWeapons = data.uuid;
      data.skins.forEach((data) => {
        data.uuidWeapons = uuidWeapons;
        skinsReturn.push(data);
      });
    });
    updateContextValue("skins", filter(skinsReturn));
    return filter(skinsReturn);
  }
}
