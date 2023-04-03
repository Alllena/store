/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProducts } from "../http/productAPI";
import { oneProductSlice } from "../store/oneProductSlice";
import { PRODUCT_ROUTE } from "../utils/consts";

const ShopPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <PageWrapper>
      {products.map((item) => (
        <Card
          //   onClick={() => {
          //     navigate(PRODUCT_ROUTE);
          //     dispatch(oneProductSlice.actions.setSelectedColor(item.color.id));
          //     dispatch(oneProductSlice.actions.setSelectedModel(item.model.id));
          //   }}
          onClick={() => navigate(PRODUCT_ROUTE + "/" + item.id)}
          key={item.id}
          product={item}
        ></Card>
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
