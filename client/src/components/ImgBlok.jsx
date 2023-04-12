/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexContainer } from "./styled/FlexContainer";
import ZoomedImage from "./ZoomedImage";

const ImgBlok = ({ images, model }) => {
  const [isMain, setIsMain] = useState("");
  const [isActive, setIsActive] = useState(Number);

  const getMainImage = () => {
    const [mainImage] = images.filter((image) => image.isMain === true);
    setIsMain(mainImage.file);
    setIsActive(mainImage.id);
  };

  useEffect(() => {
    images.length > 0 && getMainImage();
  }, []);

  return (
    <Wrapper>
      <FlexContainer className="img__main">
        <ZoomedImage
          src={process.env.REACT_APP_API_URL + isMain}
          alt="Example Image"
        />
      </FlexContainer>
      {/* <img
        src={process.env.REACT_APP_API_URL + isMain}
        alt="images"
      /> */}
      <FlexContainer className="img__blok" direction="column" gap="5">
        {images.map((image) =>
          isActive === image.id ? (
            <img
              key={image.id}
              className="img__item active"
              src={process.env.REACT_APP_API_URL + image.file}
              alt="Example images"
            />
          ) : (
            <img
              key={image.id}
              className="img__item"
              src={process.env.REACT_APP_API_URL + image.file}
              alt="Example images"
              onClick={() => {
                setIsMain(image.file);
                setIsActive(image.id);
              }}
            />
          )
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
    overflow: hidden;
  }
  .img__blok {
    width: 40%;
    .img__item {
      cursor: pointer;
      height: 110px;
      width: 110px;
      &:hover {
        background-color: #4096ff19;
      }
      &.active {
        border: 1px solid #4096ff;
        background-color: #4096ff19;
      }
    }
  }
`;
