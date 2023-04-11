import styled from "styled-components";
import { OutletWrapper } from "../components/styled/OutletWrapper";
import CreateColor from "../components/create/CreateColor";
import CreateSize from "../components/create/CreateSize";
import CreateType from "../components/create/CreateType";

const AdminPage = () => {
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
          <CreateSize />
        </details>
        <details>
          <summary>Products</summary>
          <CreateSize />
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
