import styled from "styled-components";
import Button, { ButtonLook } from "../components/base/Buttons";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Button
        onClick={() => {
          navigate(SHOP_ROUTE);
        }}
        look={ButtonLook.extra}
      >
        buy now
      </Button>
    </PageWrapper>
  );
};
export default HomePage;

const PageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  /* min-height: 100vh; */
  /* padding: 0; */
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url("/img/Banner.png");
`;
