import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import { IColor, IModel } from "../models/IProducts";
import { oneProductSlice } from "../store/oneProductSlice";
import { PRODUCT_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

interface IProps {
  model: IModel;
}

const ColorBlok: React.FC<IProps> = ({ model }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Wrapper>
      {model.colors?.map((color) => (
        <Color
          key={color.id}
          className="color__item"
          color={color.name}
          onClick={() => {
            navigate(PRODUCT_ROUTE + `/${color.id}/${model.id}`);
            dispatch(oneProductSlice.actions.setSelectedColor(color.id));
            dispatch(oneProductSlice.actions.setSelectedModel(model.id));
          }}
        />
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
