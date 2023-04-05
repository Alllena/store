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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url("/img/Banner.png");
`;
