/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { FlexContainer } from "../components/styled/FlexContainer";
import { OutletWrapper } from "../components/styled/OutletWrapper";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import Button from "../components/base/Buttons";
import { login, registration } from "../http/userAPI";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { userSlice } from "../store/userSlice";

const LoginPage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { isLogin, error, isAuth } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    isAuth && navigate(SHOP_ROUTE);
  }, []);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    if (isLogin) {
      dispatch(login(email, password));
    } else {
      dispatch(registration(email, password));
    }
  };

  return (
    <OutletWrapper>
      <PageWrapper>
        {isLogin ? <h1>Log in to your account</h1> : <h1>Create an account</h1>}
        <FlexContainer className="input__block" direction="column" gap="50px">
          <FlexContainer>
            <label id="email">Email</label>
            {error ? (
              <Input
                className="login__input"
                status="error"
                placeholder="Error"
                value={email}
                onClick={() => {
                  dispatch(userSlice.actions.userFetchingError(""));
                  setEmail("");
                  setPassword("");
                }}
              />
            ) : (
              <Input
                placeholder="email"
                className="login__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
          </FlexContainer>
          <FlexContainer>
            <label id="password">Password</label>
            {error ? (
              <Input
                className="login__input"
                status="error"
                placeholder="Error"
                value={password}
                onClick={() => {
                  dispatch(userSlice.actions.userFetchingError(""));
                  setPassword("");
                  setEmail("");
                }}
              />
            ) : (
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="input password"
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible,
                }}
              />
            )}
          </FlexContainer>
          <p className="error__info">{error as string}</p>
          <Button onClick={click}>{isLogin ? "Sign in" : "Register"}</Button>
          <div className="question">
            {isLogin ? (
              <div
                onClick={() => dispatch(userSlice.actions.userIsLogin(false))}
              >
                No account?
                <Link className="link" to={REGISTRATION_ROUTE}>
                  {" "}
                  Create one here{" "}
                </Link>
              </div>
            ) : (
              <div
                onClick={() => dispatch(userSlice.actions.userIsLogin(true))}
              >
                Already have an account??
                <Link className="link" to={LOGIN_ROUTE}>
                  {" "}
                  Log in instead!
                </Link>
              </div>
            )}
          </div>
        </FlexContainer>
      </PageWrapper>
    </OutletWrapper>
  );
};
export default LoginPage;

const PageWrapper = styled.div`
  font-size: 22px;
  font-weight: 300;
  display: flex;
  gap: 50px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 50px 30px;
  div {
    width: 100%;
  }
  .input__block {
    padding: 50px 30px;
    border: 1px solid #4096ff;
    label {
      flex: 1.5;
    }
    span {
      flex: 8.5;
      font-size: 25px;
    }
    input {
      font-size: 22px;
      &.login__input {
        flex: 8.5;
      }
    }
  }
  .error__info {
    display: block;
    flex: 8.5;
    font-size: 16px;
    color: red;
    width: 100%;
    height: 20px;
  }
  .link {
    color: #4096ff;
  }
  .question {
    padding-top: 10px;
    border-top: 1px solid #4096ff;
    width: 100%;
    text-align: center;
  }
`;
