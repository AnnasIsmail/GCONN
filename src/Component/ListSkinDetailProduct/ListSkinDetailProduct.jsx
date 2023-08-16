import { useEffect, useState } from "react";
import { Header, Loader, Segment } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;

  a {
    text-decoration: none;
  }

  .ui.attached.header {
    background-color: #1935c2;
    color: #dcddde;
    border: none;
    font-size: 15px;
    text-align: center;
  }
`;

const ContainerSkins = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  gap: 5px;
  color: black;
  overflow: hidden;
  overflow-y: auto;
  max-height: 250px;
  border-radius: 0 0 5px 5px;

  img {
    height: 35px;
  }

  .ui.attached.segment {
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 500;
    font-size: 15px;
    justify-content: space-evenly;
  }

  .label {
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
  }

  .ui.label:last-child,
  .container-list-skin-detail-product .ui.label:first-child {
    margin: 0 0.14285714em !important;
  }
`;

function ListSkinDetailProduct(props) {
  let [skin, setSkin] = useState([]);
  let [allSkin, setAllSkin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://valorant-api.com/v1/weapons/skins`)
      .then((response) => response.json())
      .then((res) => {
        setAllSkin(res.data);
      });
  }, []);

  useEffect(() => {
    if (allSkin.length > 0) {
      props.data.forEach((data) => {
        let addArray = [];
        addArray = skin;
        const oneSkin = allSkin.find(
          (dataAllSkin) => dataAllSkin.uuid === data
        );
        addArray.push(oneSkin);
        setSkin(addArray);
      });
      setLoading(false);
    }
  });

  return skin.length !== 0 ? (
    <Container>
      <Header as="h5" attached="top">
        List Skin
      </Header>
      <ContainerSkins>
        {loading ? (
          <Loader
            style={{ marginTop: 50 }}
            active
            inline="centered"
            size="huge"
          />
        ) : (
          <>
            {skin.map((data, index) => {
              if (index < props.data.length) {
                return (
                  <Segment attached key={index}>
                    <img
                      src={
                        data.displayIcon !== null
                          ? data.displayIcon
                          : data.chromas[0].displayIcon !== null
                          ? data.chromas[0].displayIcon
                          : data.chromas[0].fullRender
                      }
                      alt={data.displayName}
                    />
                    {data.displayName}
                  </Segment>
                );
              }
            })}
          </>
        )}
      </ContainerSkins>
    </Container>
  ) : (
    <></>
  );
}

export default ListSkinDetailProduct;
