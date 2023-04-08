import styled from "styled-components";
import { FlexContainer } from "./styled/FlexContainer";
import Button, { ButtonLook } from "./base/Buttons";
import { CloseSquareOutlined, DeleteOutlined } from "@ant-design/icons";
import Counter from "./Counter";
import { IBasketProduct } from "../models/IUsers";
import { basketSlice } from "../store/basketSlice";
import { useAppDispatch } from "../hooks/redux";

const Basket = () => {
  const dispatch = useAppDispatch();

  const basket: IBasketProduct = {
    id: 1,
    userId: 0,
    count: 1,
    size: {
      id: 1,
      name: 36,
    },
    product: {
      id: 1,
      price: 1000,
      sales: 10,
      isNew: false,

      color: {
        id: 1,
        name: "Black",
      },
      model: {
        id: 1,
        name: "Dusk Next",
      },
      imgs: [
        {
          isMain: true,
          isSecond: false,
          id: 2,
          file: "864d93c4-071b-4eeb-89a2-904f34728b53.jpg",
        },
      ],
    },
  };

  const {
    id,
    size,
    product: { price, sales, color, imgs, model },
  } = basket;

  return (
    <BasketWrapper>
      <FlexContainer justify="space-between">
        <h2>Basket</h2>
        <Button look={ButtonLook.header} onClick={() => {}}>
          <CloseSquareOutlined
            onClick={() => {
              dispatch(basketSlice.actions.madeVisible(false));
            }}
          />
        </Button>
      </FlexContainer>
      <FlexContainer
        className="products__wrapper"
        direction="column"
        justify="start"
      >
        <FlexContainer
          justify="space-between"
          className="product__item"
          gap="3px"
        >
          {imgs.map(
            (img) =>
              img.isMain && (
                <img src={"http://localhost:5000/" + img.file} alt="images" />
              )
          )}
          <FlexContainer direction="column" align="start">
            <h4>
              {model.name} {color.name}
            </h4>
            <p>
              Size: <span>{size.name}</span>
            </p>
            <Counter />
          </FlexContainer>
          <Button look={ButtonLook.header} onClick={() => {}}>
            <DeleteOutlined />
          </Button>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer>
        <Button onClick={() => {}}>Checkout</Button>
      </FlexContainer>
    </BasketWrapper>
  );
};

export default Basket;

const BasketWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
  height: 100vh;
  width: 27vw;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
  border: none 1px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 101;
  background-color: #fff;
  h2 {
    padding: 10px 0;
    font-weight: 300;
    color: #000;
  }
  img {
    height: 100px;
    width: 100px;
  }
  .products__wrapper {
    width: 100%;
    border-bottom: 1px solid rgba(160, 160, 160, 0.25);
    border-top: 1px solid rgba(160, 160, 160, 0.25);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);

    .product__item {
      padding: 10px 0;
      width: 100%;
      border-bottom: 1px solid rgba(160, 160, 160, 0.25);
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
