import { useContext, useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";
import NoData from "../Component/NoData/NoData";
import Product from "../Component/Product";
import { get } from "../Function/Api";
import { Context } from "../Function/Context";
import filterProduct from "../Function/filterProduct";

const Container = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  // grid-template-rows: repeat(auto-fit, 330px);
  gap: 10px;
  width: 100%;
  padding-right: 10px;
`;

const ContainerNoData = styled.div`
  margin-top: 20vh;
  height: 80px;
`;

export default function ProductContainer(props) {
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [accountsFiltered, setAccountsFiltered] = useState([]);
  const { context, updateContextValue } = useContext(Context);
  let footer = props.footer;

  function fetchData() {
    get("/accounts", "main")
      .then((response) => {
        setLoading(false);
        setAccounts(response.data);
        const filter = context.filterProducts;
        console.log(response.data);
        if (filter) {
          filterAccount(response.data, filter);
        } else {
          setAccountsFiltered(response.data);
        }
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const filter = context.filterProducts;
    if (filter && accounts) {
      filterAccount(accounts, filter);
    }
  }, [context.filterProducts]);

  const filterAccount = async (accounts, filter) => {
    const accountFiltered = [];
    await accounts.map((data) => {
      let notMatch = false;
      const matchFilter = {};
      for (const key in filter) {
        if (filter.hasOwnProperty(key)) {
          const result = filterProduct(key, filter[key], data);
          if (!result) return (notMatch = true);
          matchFilter[key] = result[key];
        }
      }
      data.filter = matchFilter;
      if (!notMatch) accountFiltered.push(data);
    });
    setAccountsFiltered(accountFiltered);
  };

  return loading ? (
    <Loader style={{ marginTop: 50 }} active inline="centered" size="huge" />
  ) : accounts.length === 0 ? (
    <ContainerNoData>
      <NoData description="Sorry, no Accounts on the Market" />
    </ContainerNoData>
  ) : (
    <Container>
      {accountsFiltered.map((data, index) => (
        <Product
          goToChat={(data) => props.goToChat(data)}
          key={index}
          data={data}
        />
      ))}
    </Container>
  );
}
