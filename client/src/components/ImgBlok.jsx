import { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexContainer } from "./styled/FlexContainer";

const ImgBlok = ({ images }) => {
  const [isMain, setIsMain] = useState("");
  const [isActive, setIsActive] = useState(Number);
  useEffect(() => {
    getMainImage();
  }, []);

  const getMainImage = () => {
    const mainImage = images.filter((image) => {
      return image.isMain === true;
    });
    setIsMain(mainImage[0].url);
    setIsActive(mainImage[0].id);
  };

  return (
    <Wrapper>
      <img className="img__main" src={isMain} alt="a" />
      <FlexContainer className="img__blok" direction="column" gap="5">
        {images.map(
          (image) =>
            isActive === image.id ? (
              <img
                key={image.id}
                className="img__item active"
                src={image.url}
                alt="img"
              />
            ) : (
              <img
                key={image.id}
                className="img__item"
                src={image.url}
                alt="img"
                onClick={() => {
                  setIsMain(image.url);
                  setIsActive(image.id);
                }}
              />
            )
          // <ImgItem className="img__item" name={image.url} />
        )}
      </FlexContainer>
    </Wrapper>
  );
};
export default ImgBlok;

const Wrapper = styled.div`
  flex: 1.5;
  display: flex;
  .img__main {
    max-height: 90vh;
    max-width: 90vh;
  }
  .img__blok {
    width: 40%;
    .img__item {
      height: 110px;
      width: 110px;
      &.active {
        border: 1px solid #4096ff;
        background-color: #4096ff19;
      }
    }
  }
`;

// const ImgItem = styled.div`
// height: 120px;
// width: 120px;
//   /* background: url(${({ name }) => name}); */
// `;
