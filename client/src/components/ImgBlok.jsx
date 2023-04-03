/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { FlexContainer } from "./styled/FlexContainer";

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
      <img
        className="img__main"
        src={"http://localhost:5000/" + isMain}
        alt="images"
      />
      <FlexContainer className="img__blok" direction="column" gap="5">
        {images.map((image) =>
          isActive === image.id ? (
            <img
              key={image.id}
              className="img__item active"
              src={"http://localhost:5000/" + image.file}
              alt="images"
            />
          ) : (
            <img
              key={image.id}
              className="img__item"
              src={"http://localhost:5000/" + image.file}
              alt="images"
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
