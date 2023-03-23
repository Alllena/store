import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  return (
    <div>
      Main
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </div>
  );
};
export default MainPage;

const PageWrapper = styled.div`
  padding: 20px 150px;
  /* height: 20%; */
  display: flex;
  gap: 20 px;
  justify-content: space-between;
  background: #ccc;
`;
