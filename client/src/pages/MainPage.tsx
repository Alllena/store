import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/base/Logo";
import NavBar from "../components/NavBar";
import { FlexContainer } from "../components/styled/FlexContainer";

const MainPage = () => {
  return (
    <PageWrapper>
      <div className="row"></div>
      <FlexContainer className="header">
        <Logo></Logo>
        <NavBar></NavBar>
      </FlexContainer>

      <FlexContainer className="wrapper__outlet">
        <Outlet />
      </FlexContainer>
    </PageWrapper>
  );
};
export default MainPage;

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  /* display: flex; */
  /* flex-direction: column; */
  gap: 20 px;
  justify-content: space-between;
  background: #fff;
  .row {
    height: 40px;
    width: 100%;
    background-color: #4096ff;
  }
  .header {
    padding: 20px 10px;
    /* height: 50px; */
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    z-index: 100;
    background: #fff;
  }
  .wrapper__outlet {
    padding: 20px 150px;
  }
`;
