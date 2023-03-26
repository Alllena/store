import { ShoppingFilled, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Button, { ButtonLook } from "./base/Buttons";
import { FlexContainer } from "./styled/FlexContainer";

const NavBar = () => {
  return (
    <Wrapper>
      <div className="navbar__type"></div>
      <FlexContainer className="navbar__user">
        <Button onClick={() => {}} look={ButtonLook.icon}>
          <UserOutlined />
        </Button>
        <Button onClick={() => {}} look={ButtonLook.icon}>
          <ShoppingFilled />
        </Button>
      </FlexContainer>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  flex: 8;
  display: flex;
  justify-content: space-between;
`;
