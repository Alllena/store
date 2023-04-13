import { ShoppingFilled } from "@ant-design/icons";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IProduct } from "../models/IProducts";
import { oneProductSlice } from "../store/oneProductSlice";
import Button from "./base/Buttons";
import ColorBlok from "./ColorBlok";
import SalesLabel from "./SalesLabel";
import SizeBlock from "./SizeBlock";
import { FlexContainer } from "./styled/FlexContainer";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../utils/consts";
import { createBasket } from "../http/userAPI";

interface IProps {
  product: IProduct;
}

const InfoBlok: React.FC<IProps> = ({
  product: {
    id,
    model,
    model: { colors },
    price,
    sales,
    color,
    sizes,
    type,
    info,
  },
}) => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.userReducer);
  const { productSizeSelected } = useAppSelector(
    (state) => state.oneProductReducer
  );

  const addBasket = () => {
    const productId = id;
    const userId = user.id;
    const count = 1;
    const sizeId = productSizeSelected;
    if (userId && count && productId && sizeId)
      dispatch(createBasket(userId, count, productId, sizeId));
  };

  return (
    <Wrapper>
      <h2>
        {model.name} {color?.name}
      </h2>
      <h3>
        {type?.name} {model.name} {color?.name}
      </h3>
      <FlexContainer className="product__prase">
        {sales > 0 ? (
          <FlexContainer align="start" direction="column">
            <div className="price">€{price - (sales / 100) * price}</div>
            <FlexContainer>
              <div className="price price-before">€{price}</div>
              <SalesLabel sales={sales} size="small" />
            </FlexContainer>
          </FlexContainer>
        ) : (
          <div className="price">€{price}</div>
        )}
      </FlexContainer>
      <span className="line"></span>
      <p>Color</p>
      <ColorBlok colorActive={color.id} colors={model.colors} model={model} />
      <p>Size</p>
      <SizeBlock sizes={sizes} productId={id} />
      <FlexContainer className="button__wrapper">
        <Button onClick={addBasket} text="Add to basket">
          <ShoppingFilled />
        </Button>
      </FlexContainer>
      <details>
        <summary>Description</summary>
        <p>{info}</p>
      </details>
    </Wrapper>
  );
};

export default InfoBlok;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  height: 100%;
  gap: 30px;
  h2 {
    font-size: 38px;
    color: #2e2323;
  }
  h3,
  p {
    font-size: 20px;
    color: #6a6a6a;
  }
  .product__prase {
    .price {
      font-size: 30px;
      color: #000;
      font-weight: 700;
      &.price-before {
        color: #c20000;
        text-decoration: line-through;
        font-weight: 300;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }
  .line {
    display: block;
    width: 100%;
    border-bottom: 1px solid rgba(160, 160, 160, 0.25);
  }
  details {
    cursor: pointer;
    width: 100%;
    font-size: 20px;
    color: #6a6a6a;
    summary {
      padding: 10px 0;
      border-bottom: 1px solid rgba(160, 160, 160, 0.25);
    }
    p {
      padding: 10px 0;
      font-weight: 300;
    }
  }
  .button__wrapper {
    width: 100%;
  }
`;
