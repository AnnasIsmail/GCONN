import compareArraySimilarities from "./compareArraySimilarities";

export default function filterProduct(key, filter, data) {
  if (filter.length === 0) return true;
  if (!key && !filter && !data) return false;
  if (key === "changeNameStatus" || key === "region" || key === "rank") {
    const exist = filter.includes(data[key]);
    if (exist) {
      return { [key]: data };
    } else {
      return false;
    }
  } else if (key === "minimum_price") {
    if (filter === 0) return true;
    if (parseInt(filter) <= parseInt(data.price)) {
      return { [key]: data };
    } else {
      return false;
    }
  } else if (key === "maximum_price") {
    if (filter === 0) return true;
    if (parseInt(filter) >= parseInt(data.price)) {
      return { [key]: data };
    } else {
      return false;
    }
  } else {
    const exist = compareArraySimilarities(filter, data[key]);
    if (filter.length === 0) return true;
    if (exist.length > 0) {
      return { [key]: exist };
    } else {
      return false;
    }
  }
}
