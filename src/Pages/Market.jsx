import React from "react";
// import Filter from "../Component/Filter/Filter";
import FilterMarket from "../Component/FilterMarket";
import ProductContainer from "../Container/ProdukContainer/ProductContainer";

export default function Market() {
  return (
    <div>
      <FilterMarket />
      {/* <Filter /> */}
      <ProductContainer />
    </div>
  );
}
