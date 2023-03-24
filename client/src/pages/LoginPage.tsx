import styled from "styled-components";
import { FlexContainer } from "../styled/FlexContainer";
import { Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [noAccount, setNoAccount] = useState(true);
  return (
    <PageWrapper>
      {noAccount ? <h1>Log in to your account</h1> : <h1>Create an account</h1>}
      <FlexContainer className="input__block" direction="column">
        <Input.Password
          placeholder="input password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
        />
        {/* <Input status="error" placeholder="Error" /> */}
        <div>
          {noAccount ? (
            <div onClick={() => setNoAccount(false)}>
              No account?
              <Link to={REGISTRATION_ROUTE}> Create one here </Link>
            </div>
          ) : (
            <div onClick={() => setNoAccount(true)}>
              Already have an account??
              <Link to={LOGIN_ROUTE}> Log in instead!</Link>
            </div>
          )}
        </div>
      </FlexContainer>
    </PageWrapper>
  );
};
export default LoginPage;

const PageWrapper = styled.div`
  /* font-size: 22px; */
  /* font-weight: 300; */
  /* text-transform: uppercase; */
  background: #fff;
  display: flex;
  gap: 50px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  /* text-align: center; */
  padding: 30px;
  .input__block {
    padding: 20px;
    border: 1px solid #2745ac;
  }
`;
