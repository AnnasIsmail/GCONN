import { useContext, useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";
import NoData from "../Component/NoData/NoData";
import Product from "../Component/Product";
import { get } from "../Function/Api";
import { Context } from "../Function/Context";
import filterProduct from "../Function/filterProduct";
import getAPIAgents from "../Function/getAPIAgents";
import getAllSkins from "../Function/getAllSkins";

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

export default function ProductContainer() {
  const [loading, setLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [accountsFiltered, setAccountsFiltered] = useState([]);
  const { context, updateContextValue } = useContext(Context);
  const [skins, setSkins] = useState([]);
  const [agents, setAgents] = useState([]);

  function fetchData() {
    get("/accounts", "main")
      .then((response) => {
        setLoading(false);
        setAccounts(response.data);
        const filter = context.filterProducts;
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
    if (skins.length === 0) {
      getSkins();
    }
    if (agents.length === 0) {
      getAgents();
    }
  }, []);
  const getSkins = async () => {
    const getSkins = await getAllSkins(context, updateContextValue);
    setSkins(getSkins);
  };
  const getAgents = async () => {
    const getAgents = await getAPIAgents(context, updateContextValue);
    setAgents(getAgents);
  };
  useEffect(() => {
    const filter = context.filterProducts;
    if (filter && accounts) {
      filterAccount(accounts, filter);
    }
    if (!filter && accounts) {
      setAccountsFiltered(accounts);
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
          key={index}
          data={data}
          dataSkins={skins}
          dataAgents={agents}
        />
      ))}
    </Container>
  );
}
