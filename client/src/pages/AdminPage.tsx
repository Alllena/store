import styled from "styled-components";
import { OutletWrapper } from "../components/styled/OutletWrapper";
import CreateColor from "../components/create/CreateColor";
import CreateSize from "../components/create/CreateSize";
import CreateType from "../components/create/CreateType";
import CreateModel from "../components/create/CreateModel";
import CreateProduct from "../components/create/CreateProduct";
import { useAppDispatch } from "../hooks/redux";
import { useEffect } from "react";
import { fetchProducts } from "../http/productAPI";
import { fetchModel } from "../http/modelAPI";
import { fetchTypes } from "../http/typeAPI";
import { fetchColor } from "../http/colorApi";
import { fetchSize } from "../http/sizeAPI";

const AdminPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({}));
    dispatch(fetchModel());
    dispatch(fetchTypes());
    dispatch(fetchColor());
    dispatch(fetchSize());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <OutletWrapper>
      <PageWrapper>
        <details>
          <summary>Types</summary>
          <CreateType />
        </details>
        <details>
          <summary>Colors</summary>
          <CreateColor />
        </details>
        <details>
          <summary>Sizes</summary>
          <CreateSize />
        </details>
        <details>
          <summary>Models</summary>
          <CreateModel />
        </details>
        <details>
          <summary>Products</summary>
          <CreateProduct />
        </details>
      </PageWrapper>
    </OutletWrapper>
  );
};
export default AdminPage;

const PageWrapper = styled.div`
  padding: 15px 0;
  .col {
    padding: 10px;
  }
  details {
    cursor: pointer;
    width: 100%;
    font-size: 20px;
    color: #6a6a6a;
    summary {
      padding: 10px 0;
      border-bottom: 1px solid rgba(160, 160, 160, 0.25);
    }
  }
`;
