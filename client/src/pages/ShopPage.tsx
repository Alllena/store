/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchProducts } from "../http/productAPI";
import { oneProductSlice } from "../store/oneProductSlice";
import { PRODUCT_ROUTE } from "../utils/consts";
import { OutletWrapper } from "../components/styled/OutletWrapper";

import { useLocation } from "react-router-dom";
import { getQueryParams } from "../utils/helpers";

const ShopPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    const queryParams = getQueryParams(location);
    dispatch(fetchProducts(queryParams));
    console.log(location);
  }, [location]);

  return (
    <OutletWrapper>
      <PageWrapper>
        {products.map((item) => (
          <Card
            onClick={() => {
              navigate(PRODUCT_ROUTE + `/${item.color.id}/${item.model.id}`);
              dispatch(oneProductSlice.actions.setSelectedColor(item.color.id));
              dispatch(oneProductSlice.actions.setSelectedModel(item.model.id));
            }}
            key={item.id}
            product={item}
          ></Card>
        ))}
      </PageWrapper>
    </OutletWrapper>
  );
};
export default ShopPage;
const PageWrapper = styled.div`
  width: 90vw;
  padding: 20px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-between;
`;
