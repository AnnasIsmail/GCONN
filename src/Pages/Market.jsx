import React from "react";
import { useLocation } from "react-router-dom";
import Filter from "../Component/Filter/Filter";
import ProdukContainer from "../Container/ProdukContainer/ProdukContainer";
import ProdukFilterContainer from "../Container/ProdukContainer/ProdukFilterContainer";

let data = {
  region: "",
  changeNameStatus: "",
  rank: "",
  game: "",
  skin: "",
  agent: "",
  priceMin: 0,
  priceMax: 0,
  sortBy: "",
  search: "",
};
export default function Market() {
  const pathName = useLocation().pathname;
  const [dataFilter, setDataFilter] = React.useState(false);

  React.useEffect(() => {
    if (pathName !== "/market") {
      setDataFilter(false);
    }
  });

  function rangePrice(v, minPrice, maxPrice) {
    if (parseInt(v.price) >= minPrice && parseInt(v.price) <= maxPrice) {
      return v;
    } else if (
      (isNaN(minPrice) && parseInt(v.price) <= maxPrice) ||
      (isNaN(minPrice) && maxPrice === 0)
    ) {
      return v;
    } else if (
      (parseInt(v.price) >= minPrice && isNaN(maxPrice)) ||
      (parseInt(v.price) >= minPrice && maxPrice === 0)
    ) {
      return v;
    } else if (isNaN(minPrice) && isNaN(maxPrice)) {
      return v;
    }
  }

  function filter(v) {
    setDataFilter(false);
    data = v;

    fetch("https://gconn-api-node-js.vercel.app/accountsFilter", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(v),
    })
      .then((response) => response.json())
      .then((json) => {
        const filterData = json.data.filter((data) =>
          rangePrice(data, v.priceMin, v.priceMax)
        );
        const inputSearchTextField = document.getElementById(
          "inputSearchTextField"
        ).value;

        if (v.sortBy === "New") {
        } else if (v.sortBy === "Highest Price") {
          filterData.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        } else if (v.sortBy === "Lowest Price") {
          filterData.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        } else {
          filterData.sort(() => Math.random() - 0.5);
        }

        let dataToSet = filterData;

        if (inputSearchTextField != "") {
          dataToSet = filterData.filter((data) =>
            data.header
              .toLowerCase()
              .includes(inputSearchTextField.toLowerCase())
          );
        }

        setDataFilter(dataToSet);
      });
  }
  return (
    <div>
      <Filter sendData={filter} dataFilter={dataFilter} />
      <input
        type="hidden"
        hidden
        id="searchMarket"
        onClick={() => filter(data)}
      />
      <div className="container-market-main-container">
        {dataFilter ? <ProdukFilterContainer /> : <ProdukContainer />}
      </div>
    </div>
  );
}
