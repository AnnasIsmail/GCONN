export default function compareArraySimilarities(arr1, arr2) {
  const nilaiSama = [];
  for (const item of arr1) {
    if (arr2.includes(item)) {
      nilaiSama.push(item);
    }
  }
  return nilaiSama;
}
