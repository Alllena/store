import styled from "styled-components";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { oneProductSlice } from "../store/oneProductSlice";

const SizeBlok = ({ sizes }) => {
  const dispatch = useAppDispatch();
  const { productSizeSelected } = useAppSelector(
    (state) => state.oneProductReducer
  );
  return (
    <Wrapper>
      {sizes.map((size) =>
        productSizeSelected === size.id ? (
          <div className="size__item active">{size.name}</div>
        ) : (
          <div
            className="size__item"
            onClick={() => {
              dispatch(oneProductSlice.actions.setSelectedSize(size.id));
            }}
          >
            {size.name}
          </div>
        )
      )}
    </Wrapper>
  );
};

export default SizeBlok;

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
