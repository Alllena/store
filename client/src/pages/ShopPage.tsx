import styled from "styled-components";
import Card from "../components/Card";

const ShopPage = () => {
  const product = [
    {
      id: 1,
      name: "Materia",
      img: "/img/one_model/lane-black.jpg",
      price: 1000,
      sales: 10,
    },
    {
      id: 2,
      name: "Materia Studio 2",
      img: "/img/one_model/lane-black.jpg",
      price: 1000,
      sales: 10,
    },
    {
      id: 3,
      name: "Materia Studio 3",
      img: "/img/one_model/lane-black.jpg",
      price: 1000,
      sales: 0,
    },
    {
      id: 4,
      name: "Materia Studio 4",
      img: "/img/one_model/lane-black.jpg",
      price: 1000,
      sales: 0,
    },
    {
      id: 5,
      name: "Materia Studio 4",
      img: "/img/one_model/lane-black.jpg",
      price: 1000,
      sales: 20,
    },
    {
      id: 6,
      name: "Materia Studio 4",
      img: "/img/one_model/lane-black.jpg",
      price: 1000,
      sales: 5,
    },
  ];

  const colors = ["red", "black", "white", "beige"];
  const size = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  return (
    <PageWrapper>
      {product.map((item) => (
        <Card key={item.id} product={item} colors={colors} size={size}></Card>
      ))}
    </PageWrapper>
  );
};
export default ShopPage;
const PageWrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-between;
`;
