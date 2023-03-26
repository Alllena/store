import { ShoppingFilled, UserOutlined } from "@ant-design/icons";
import Link from "./base/Link";
import styled from "styled-components";
import { SHOP_ROUTE } from "../utils/consts";
import Button, { ButtonLook } from "./base/Buttons";
import { FlexContainer } from "./styled/FlexContainer";

const NavBar = () => {
  const type = [
    {
      id: 1,
      name: "Slippers",
    },
    {
      id: 2,
      name: "Sandals",
    },
    {
      id: 3,
      name: "Shoes",
    },
  ];
  return (
    <Wrapper>
      <FlexContainer className="navbar__type" justify="start" align="center">
        <Link to={SHOP_ROUTE}>New in</Link>
        {type.map((item) => (
          <Link key={item.id} to={SHOP_ROUTE}>
            {item.name}
          </Link>
        ))}
        <Link to={SHOP_ROUTE}>Special Prises</Link>
      </FlexContainer>
      <FlexContainer className="navbar__user" justify="end" gap="10">
        <Button onClick={() => {}} look={ButtonLook.header}>
          <UserOutlined />
        </Button>
        <Button onClick={() => {}} look={ButtonLook.header}>
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
  height: 100%;
  width: 100%;
  .navbar__type {
    flex: 8;
  }
  .navbar__user {
    flex: 2;
  }
`;
