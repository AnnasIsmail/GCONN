import React from "react";
import { Carousel } from "react-bootstrap";
import { Icon, Image } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  position: sticky;
  top: 20px;

  img {
    border-radius: 10px;
    cursor: pointer;
  }

  .w-100 {
    cursor: inherit;
  }
`;
const Control = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  .left {
    margin-top: 5px;
  }

  .right {
    margin-bottom: 5px;
  }
`;
const ContainerPhotoControl = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  overflow: hidden;
`;
function PhotoDetailProduct(props) {
  const sourceImage = props.data;

  const [index, setIndex] = React.useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const slide = (to) => {
    if (to === "left") {
      document.getElementById("containerPhotoDetailProduct").scrollLeft += -40;
    } else {
      document.getElementById("containerPhotoDetailProduct").scrollLeft += 40;
    }
  };

  return (
    <Container>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        interval={null}
      >
        {sourceImage.map((src, index) => {
          return (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={src} alt="First slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Control>
        <Icon
          link
          size="huge"
          onClick={() => slide("left")}
          name="caret left"
        />
        <ContainerPhotoControl
          id="containerPhotoDetailProduct"
          className="container-photo-detail-product"
        >
          {sourceImage.map((src, index) => {
            return (
              <Image
                key={index}
                src={src}
                size="small"
                onClick={() => {
                  handleSelect(index);
                }}
              />
            );
          })}
        </ContainerPhotoControl>
        <Icon
          link
          size="huge"
          onClick={() => slide("right")}
          name="caret right"
        />
      </Control>
    </Container>
  );
}

export default PhotoDetailProduct;
