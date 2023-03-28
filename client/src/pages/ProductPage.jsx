import styled from "styled-components";
import ImgBlok from "../components/ImgBlok";
import InfoBlok from "../components/InfoBlok";
import { FlexContainer } from "../components/styled/FlexContainer";

const ProductPage = () => {
  const images = [
    {
      id: 1,
      isMain: true,
      isSecond: false,
      url: "/img/one_model/lane-black.jpg",
    },
    {
      id: 2,
      isMain: false,
      isSecond: true,
      url: "/img/one_model/lane-black (1).jpg",
    },
    {
      id: 3,
      isMain: false,
      isSecond: false,
      url: "/img/one_model/lane-black (2).jpg",
    },
    {
      id: 4,
      isMain: false,
      isSecond: false,
      url: "/img/one_model/lane-black (3).jpg",
    },
    {
      id: 5,
      isMain: false,
      isSecond: false,
      url: "/img/one_model/lane-black (4).jpg",
    },
    {
      id: 6,
      isMain: false,
      isSecond: false,
      url: "/img/one_model/lane-black (5).jpg",
    },
  ];

  const product = {
    id: 1,
    name: "Materia",
    price: 1000,
    sales: 10,
    color: "black",
    types: [{ id: 1, name: "Shoes" }],
    info: "We redesigned the concept of sandal. It has a soft touch instep that you will feel that the sandal hugs your foot. We have put a velcro closure on the heel, adjustable to your day-to-day needs. Also, it has a non-slip rubber piece to prevent slipping. It is our most sustainable model since 90% of its materials are vegetable and barely use of synthetic materials.",
    colors: [
      { id: 1, name: "red", productId: 2 },
      { id: 2, name: "black", productId: 1 },
      { id: 3, name: "white", productId: 3 },
      { id: 4, name: "beige", productId: 4 },
    ],
    sizes: [
      { id: 1, name: 36 },
      { id: 2, name: 37 },
      { id: 3, name: 38 },
      { id: 4, name: 39 },
      { id: 5, name: 40 },
      { id: 6, name: 41 },
      { id: 7, name: 42 },
      { id: 8, name: 43 },
      { id: 9, name: 44 },
      { id: 10, name: 45 },
      { id: 11, name: 46 },
    ],
  };

  const { id, name, price, sales, color, types, info, colors, sizes } = product;

  return (
    <PageWrapper>
      <FlexContainer className="product__item">
        <ImgBlok images={images} />
        <InfoBlok
          id={id}
          name={name}
          price={price}
          sales={sales}
          color={color}
          types={types}
          colors={colors}
          sizes={sizes}
          info={info}
        />
      </FlexContainer>
    </PageWrapper>
  );
};
export default ProductPage;

const PageWrapper = styled.div`
  padding: 10px 0;
  width: 100%;
  height: 100%;
  display: flex;
  .product__item {
    height: 100%;
    max-height: 80vh;
  }
`;
