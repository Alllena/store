import styled from "styled-components";
import { IColor, IModel } from "../models/IProducts";
import { FlexContainer } from "./styled/FlexContainer";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts";
import { oneProductSlice } from "../store/oneProductSlice";
import { useAppDispatch } from "../hooks/redux";

interface IProps {
  colors?: IColor[];
  onClick?: () => void;
  colorActive?: number;
  model?: IModel;
}

const ColorBlok: React.FC<IProps> = ({
  colors,
  onClick,
  colorActive,
  model,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      {colors?.map((color) =>
        color.id === colorActive ? (
          <FlexContainer key={color.id} direction="column">
            <div className="color__item active">
              <Color color={color.name} onClick={onClick} />
            </div>
            <FlexContainer>{color.name}</FlexContainer>
          </FlexContainer>
        ) : (
          <FlexContainer key={color.id} direction="column">
            <div className="color__item">
              <Color
                className="color__item"
                color={color.name}
                onClick={() => {
                  navigate(PRODUCT_ROUTE + `/${color.id}/${model?.id}`);
                  dispatch(oneProductSlice.actions.setSelectedColor(color.id));
                  dispatch(oneProductSlice.actions.setSelectedModel(model?.id));
                  console.log(color.id, model?.id);
                }}
              />
            </div>
            <FlexContainer>{color.name}</FlexContainer>
          </FlexContainer>
        )
      )}
    </Wrapper>
  );
};
export default ColorBlok;

const Wrapper = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  .color__item {
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
  }
  .active {
    border: 1px solid rgba(160, 160, 160, 0.25);
    background-color: #4096ff19;
  }
`;
const Color = styled.div`
  min-height: 27px;
  min-width: 27px;
  border-radius: 50%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.color || ""};
`;
