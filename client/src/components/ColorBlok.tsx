import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import { IColor, IModel } from "../models/IProducts";
import { oneProductSlice } from "../store/oneProductSlice";
import { PRODUCT_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";
import { FlexContainer } from "./styled/FlexContainer";

interface IProps {
  model: IModel;
  onClick: () => void;
}

const ColorBlok: React.FC<IProps> = ({ model, onClick }) => {
  return (
    <Wrapper>
      {model.colors?.map((color) => (
        <FlexContainer direction="column">
          <Color
            key={color.id}
            className="color__item"
            color={color.name}
            onClick={onClick}
          />
          <FlexContainer>{color.name}</FlexContainer>
        </FlexContainer>
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
  cursor: pointer;
  min-height: 27px;
  min-width: 27px;
  border-radius: 50%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.color || ""};
`;
