import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ImgBlok from "../components/ImgBlok";
import InfoBlok from "../components/InfoBlok";
import { FlexContainer } from "../components/styled/FlexContainer";
import { OutletWrapper } from "../components/styled/OutletWrapper";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchOneProduct } from "../http/productAPI";
import { Spin } from "antd";
import { SpinWrapper } from "../components/styled/SpinWrapper";

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const { product, isLoading, productColorSelected, productModelSelected } =
    useAppSelector((state) => state.oneProductReducer);

  const { colorId, modelId } = useParams();

  useEffect(() => {
    if (colorId && modelId) {
      dispatch(fetchOneProduct(+colorId, +modelId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorId, modelId, dispatch, productColorSelected, productModelSelected]);

  return (
    <OutletWrapper>
      <PageWrapper>
        {isLoading ? (
          <SpinWrapper>
            <Spin size="large" />
          </SpinWrapper>
        ) : (
          <FlexContainer className="product__section">
            <ImgBlok images={product.imgs} model={product.model} />
            <InfoBlok product={product} />
          </FlexContainer>
        )}
      </PageWrapper>
    </OutletWrapper>
  );
};
export default ProductPage;

const PageWrapper = styled.div`
  padding: 10px 0;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 50px;
  max-height: 80vh;
  .product__section {
    width: 100%;
    height: 100%;
  }
`;
