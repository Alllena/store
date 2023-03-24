import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  return (
    <PageWrapper>
      {/* <div>Nav Bar</div> */}
      <Outlet />
    </PageWrapper>
  );
};
export default MainPage;

const PageWrapper = styled.div`
  padding: 20px 150px;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* flex-direction: column; */
  gap: 20 px;
  justify-content: space-between;
  background: #ccc;
`;
