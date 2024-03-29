import styled from "styled-components";

const Logo = () => {
  return (
    <LogoWrapper>
      <a href="/">
        <img src="/img/logo.jpg" alt="Logo" />
      </a>
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex: 2;
`;
