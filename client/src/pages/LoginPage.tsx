import styled from "styled-components";
import { FlexContainer } from "../components/styled/FlexContainer";
import { Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import Button from "../components/base/Buttons";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [noAccount, setNoAccount] = useState(true);
  return (
    <PageWrapper>
      {noAccount ? <h1>Log in to your account</h1> : <h1>Create an account</h1>}
      <FlexContainer className="input__block" direction="column" gap="50px">
        <FlexContainer>
          <label id="email">Email</label>
          <Input placeholder="email" className="email" />
        </FlexContainer>
        <FlexContainer>
          <label id="password">Password</label>
          <Input.Password
            placeholder="input password"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
        </FlexContainer>
        {/* <Input status="error" placeholder="Error" /> */}
        <Button onClick={() => {}}>Sign in</Button>
        <div className="question">
          {noAccount ? (
            <div onClick={() => setNoAccount(false)}>
              No account?
              <Link className="link" to={REGISTRATION_ROUTE}>
                {" "}
                Create one here{" "}
              </Link>
            </div>
          ) : (
            <div onClick={() => setNoAccount(true)}>
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
