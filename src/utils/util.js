import find from "lodash.find";

export const checkIfValidPurchases = rawString => {
  try {
    const parsed = JSON.parse(rawString);
    if (Array.isArray(parsed)) {
      return true;
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};

export const filterProducts = (allProducts, products) => {
  const filtered = products.map(eachProductId => {
    const p = find(allProducts, { id: eachProductId });
    return p;
  });
  return filtered;
};
