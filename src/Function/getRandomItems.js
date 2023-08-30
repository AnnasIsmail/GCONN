export default function getRandomItems(array, numberOfItems) {
  const shuffledArray = array.sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, numberOfItems);
}
