import {
  ControlOutlined,
  ShoppingFilled,
  UserAddOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import Link, { LinkLook } from "./base/Link";
import styled from "styled-components";
import { ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import Button, { ButtonLook } from "./base/Buttons";
import { FlexContainer } from "./styled/FlexContainer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userSlice } from "../store/userSlice";
import { fetchTypes } from "../http/productAPI";
import { useEffect } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isSuccess, user } = useAppSelector((state) => state.userReducer);
  const { types } = useAppSelector((state) => state.typesReducer);

  useEffect(() => {
    dispatch(fetchTypes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(types);

  return (
    <Wrapper>
      <FlexContainer className="navbar__type" justify="start" align="center">
        <Link to={SHOP_ROUTE} look={LinkLook.important}>
          New in
        </Link>
        {types.map((item) => (
          <Link key={item.id} to={SHOP_ROUTE}>
            {item.name}
          </Link>
        ))}
        <Link to={SHOP_ROUTE} look={LinkLook.warning}>
          Special Prices
        </Link>
      </FlexContainer>
      <FlexContainer className="navbar__user" justify="end" gap="10">
        {isSuccess ? (
          <FlexContainer>
            {user.role === "admin" && (
              <Button
                onClick={() => {
                  navigate(ADMIN_ROUTE);
                }}
                look={ButtonLook.header}
              >
                {<ControlOutlined />}
              </Button>
            )}
            <Button
              onClick={() => {
                dispatch(userSlice.actions.userIsSuccess());
              }}
              look={ButtonLook.header}
            >
              {<UserDeleteOutlined />}
            </Button>
          </FlexContainer>
        ) : (
          <Button
            onClick={() => {
              navigate(LOGIN_ROUTE);
            }}
            look={ButtonLook.header}
          >
            {<UserAddOutlined />}
          </Button>
        )}
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
