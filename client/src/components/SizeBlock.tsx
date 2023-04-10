import styled from "styled-components";
import { useState, FC } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { oneProductSlice } from "../store/oneProductSlice";
import { ISize } from "../models/IProducts";

interface ISizeBlockProps {
  sizes?: ISize[];
  productId: number;
}

const SizeBlock: FC<ISizeBlockProps> = ({ sizes, productId }) => {
  const dispatch = useAppDispatch();
  const { productSizeSelected, product } = useAppSelector(
    (state) => state.oneProductReducer
  );
  return (
    <Wrapper>
      {sizes?.map((size) =>
        productId === product.id && productSizeSelected === size.id ? (
          <div key={size.id} className="size__item active">
            {size.name}
          </div>
        ) : (
          <div
            key={size.id}
            className="size__item"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                oneProductSlice.actions.setSelectedSize({
                  sizeId: size.id,
                  productId,
                })
              );
            }}
          >
            {size.name}
          </div>
        )
      )}
    </Wrapper>
  );
};

export default SizeBlock;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  .size__item {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 27px;
    min-width: 27px;
    cursor: pointer;
    border: 1px solid rgba(160, 160, 160, 0.25);

    &:hover {
      background-color: #4096ff19;
    }
    &.active {
      color: #fff;
      background-color: #000;
    }
  }
`;
