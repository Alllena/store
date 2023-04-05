import styled from "styled-components";
import { FlexContainer } from "../components/styled/FlexContainer";
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
  const { isLogin, user, isLoading } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    console.log(isLogin); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      if (isLogin) {
        dispatch(login(email, password));
      } else {
        dispatch(registration(email, password));
      }
      // console.log("state", user);
      // navigate(SHOP_ROUTE);
    } catch (e) {
      if (e instanceof SyntaxError) {
        dispatch(userSlice.actions.userFetchingError(e.message));
      }
    }
  };

  return (
    <PageWrapper>
      {isLogin ? <h1>Log in to your account</h1> : <h1>Create an account</h1>}
      <FlexContainer className="input__block" direction="column" gap="50px">
        <FlexContainer>
          <label id="email">Email</label>
          <Input
            placeholder="email"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FlexContainer>
        <FlexContainer>
          <label id="password">Password</label>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="input password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </FlexContainer>
        {/* <Input status="error" placeholder="Error" /> */}
        <Button onClick={click}>{isLogin ? "Sign in" : "Save"}</Button>
        <div className="question">
          {isLogin ? (
            <div onClick={() => dispatch(userSlice.actions.userIsLogin(false))}>
              No account?
              <Link className="link" to={REGISTRATION_ROUTE}>
                {" "}
                Create one here{" "}
              </Link>
            </div>
          ) : (
            <div onClick={() => dispatch(userSlice.actions.userIsLogin(true))}>
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
      &.email {
        flex: 8.5;
      }
    }
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
