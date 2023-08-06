import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";
import NoData from "../../Component/NoData/NoData";
import Product from "../../Component/Produk/Product";
import { get } from "../../Function/Api";
import "./ProdukContainer.css";

const Container = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, 330px);
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
  let footer = props.footer;

  function fetchData() {
    get("/accounts")
      .then((response) => {
        setLoading(false);
        setAccounts(response.data);
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Loader style={{ marginTop: 50 }} active inline="centered" size="huge" />
  ) : accounts.length === 0 ? (
    <ContainerNoData>
      <NoData description="Sorry, no Accounts on the Market" />
    </ContainerNoData>
  ) : (
    <Container>
      {accounts.map((data, index) => (
        <Product
          goToChat={(data) => props.goToChat(data)}
          key={index}
          data={data}
        />
      ))}
    </Container>
  );
}
