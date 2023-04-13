import styled from "styled-components";

const SalesLabel = ({ sales, size }) => {
  return <Wrapper size={size}>-{sales}%</Wrapper>;
};

export default SalesLabel;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: ${({ size }) => (size === "small" ? "relative" : "absolute")};
  left: 0;
  top: 0;
  height: ${({ size }) => (size === "small" ? "30px" : "50px")};
  width: ${({ size }) => (size === "small" ? "50px" : "80px")};
  font-weight: 700;
  color: white;
  background-color: #c20000;
`;
