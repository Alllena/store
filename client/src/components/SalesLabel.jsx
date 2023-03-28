import styled from "styled-components";

const SalesLabel = ({ sales }) => {
  return <Wrapper>-{sales}%</Wrapper>;
};

export default SalesLabel;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  left: 0;
  top: 0;
  height: 50px;
  width: 80px;
  font-weight: 700;
  color: white;
  background-color: #c20000;
`;
