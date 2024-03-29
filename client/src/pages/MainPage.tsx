import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Logo from "../components/base/Logo";
import NavBar from "../components/NavBar";
import { FlexContainer } from "../components/styled/FlexContainer";
import Basket from "../components/Basket";
import { useAppSelector } from "../hooks/redux";

const MainPage = () => {
  const { isVisible } = useAppSelector((state) => state.basketReducer);
  return (
    <PageWrapper>
      {isVisible && <Basket />}
      <div className="row"></div>
      <FlexContainer className="header">
        <Logo></Logo>
        <NavBar></NavBar>
      </FlexContainer>
      <Outlet />
    </PageWrapper>
  );
};
export default MainPage;

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: 40px 100px 1fr;
  min-height: 100vh;
  padding: 0;
  .row {
    height: 40px;
    width: 100%;
    background-color: #4096ff;
  }
  .header {
    height: 100px;
    padding: 0 40px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
    z-index: 100;
    background: #fff;
  }
`;
