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
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
`;
