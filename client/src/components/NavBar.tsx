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
import { fetchTypes } from "../http/typeAPI";
import { useEffect } from "react";
import { filterSlice } from "../store/filterSlice";
import { Badge } from "antd";
import { basketSlice } from "../store/basketSlice";
import { fetchBaskets } from "../http/userAPI";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth, user } = useAppSelector((state) => state.userReducer);
  const { types } = useAppSelector((state) => state.typesReducer);
  const { totalProducts } = useAppSelector((state) => state.basketReducer);

  useEffect(() => {
    dispatch(fetchTypes());
    dispatch(fetchBaskets(String(user.id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <Wrapper>
      <FlexContainer className="navbar__type" justify="start" align="center">
        <Link
          to={SHOP_ROUTE}
          onClick={() => {
            dispatch(filterSlice.actions.addNew());
          }}
        >
          Show all
        </Link>
        <Link
          to={SHOP_ROUTE + `?isNew=${true}`}
          look={LinkLook.important}
          onClick={() => {
            dispatch(filterSlice.actions.addNew());
          }}
        >
          New in
        </Link>
        {types.map((item) => (
          <Link
            key={item.id}
            to={SHOP_ROUTE + `?typeId=${item.id}`}
            onClick={() => {
              dispatch(filterSlice.actions.addTypeId(item.id));
            }}
          >
            {item.name}
          </Link>
        ))}
        <Link to={SHOP_ROUTE + `?sales=${0}`} look={LinkLook.warning}>
          Special Prices
        </Link>
      </FlexContainer>
      <FlexContainer className="navbar__user" justify="end" gap="10">
        {isAuth ? (
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
                dispatch(userSlice.actions.isAuth());
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
        <Badge count={totalProducts} color="#4096ff" offset={[-5, 10]}>
          <Button
            onClick={() => {
              dispatch(basketSlice.actions.madeVisible(true));
            }}
            look={ButtonLook.header}
          >
            <ShoppingFilled />
          </Button>
        </Badge>
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
