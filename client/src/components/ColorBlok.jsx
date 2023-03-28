import styled from "styled-components";

const ColorBlok = ({ colors }) => {
  return (
    <Wrapper>
      {colors.map((item) => (
        <Color className="color__item" color={item.name} />
      ))}
    </Wrapper>
  );
};

export default ColorBlok;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
const Color = styled.div`
  min-height: 27px;
  min-width: 27px;
  border-radius: 50%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.color || ""};
`;
