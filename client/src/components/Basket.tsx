import React, { useEffect } from "react";
import styled from "styled-components";
import { FlexContainer } from "./styled/FlexContainer";
import Button, { ButtonLook } from "./base/Buttons";
import { CloseSquareOutlined, DeleteOutlined } from "@ant-design/icons";
import Counter from "./Counter";
import { basketSlice } from "../store/basketSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchBaskets, updateBaskets } from "../http/userAPI";

const Basket = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.userReducer);
  const { baskets } = useAppSelector((state) => state.basketReducer);
  console.log({ baskets });

  useEffect(() => {
    const userId = user.id;
    dispatch(fetchBaskets(String(userId)));
  }, []);

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
        {baskets.map((basket) => (
          <FlexContainer
            key={basket.id}
            justify="space-between"
            className="product__item"
            gap="3px"
          >
            {basket.product.imgs &&
              basket.product.imgs.map((img) => (
                <img
                  key={img.id}
                  src={"http://localhost:5000/" + img.file}
                  alt="images"
                ></img>
              ))}
            <FlexContainer direction="column" align="start">
              <h4>
                {basket.product.model.name} {basket.product.color.name}
              </h4>
              <p>
                Size: <span>{basket.size.name}</span>
              </p>
              <Counter
                increment={() => {
                  // dispatch(updateBaskets(basket.id));
                  dispatch(updateBaskets(basket.id, basket.count + 1));
                }}
                decrement={() => {
                  // dispatch(updateBaskets(basket.id));
                  dispatch(updateBaskets(basket.id, basket.count - 1));
                }}
                count={basket.count}
                price={basket.count * basket.product.price}
              />
            </FlexContainer>
            <Button look={ButtonLook.header} onClick={() => {}}>
              <DeleteOutlined />
            </Button>
          </FlexContainer>
        ))}
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
