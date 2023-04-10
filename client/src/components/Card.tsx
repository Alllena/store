import { useState } from "react";
import styled from "styled-components";
import { FlexContainer } from "./styled/FlexContainer";
import { ShoppingFilled } from "@ant-design/icons";
import Button from "./base/Buttons";
import { IProduct } from "../models/IProducts";
import SizeBlock from "./SizeBlock";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { createBasket, fetchBaskets } from "../http/userAPI";

interface IProps {
  product: IProduct;
  onClick: () => void;
}

const Card: React.FC<IProps> = ({
  product: {
    id,
    model,
    model: { colors },
    price,
    sales,
    isNew,
    imgs,
    sizes,
  },
  onClick,
}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);
  const { productSizeSelected } = useAppSelector(
    (state) => state.oneProductReducer
  );
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const addBasket = () => {
    const productId = id;
    const userId = user.id;
    const count = 1;
    const sizeId = productSizeSelected;
    if (userId && count && productId && sizeId)
      dispatch(createBasket(userId, count, productId, sizeId));
  };

  return (
    <CardWrapper onClick={onClick}>
      <FlexContainer className="img__bloc">
        {sales > 0 && (
          <FlexContainer className="sales">-{sales}%</FlexContainer>
        )}
        {isHover
          ? imgs
              ?.filter((item) => item.isSecond === true)
              .map((item) => (
                <img
                  key={item.id}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  src={process.env.REACT_APP_API_URL + item.file}
                  alt={model.name}
                />
              ))
          : imgs
              ?.filter((item) => item.isMain === true)
              .map((item) => (
                <img
                  key={item.id}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  src={process.env.REACT_APP_API_URL + item.file}
                  alt={model.name}
                />
              ))}
      </FlexContainer>
      <FlexContainer className="color__bloc">
        {colors?.map((color?) => (
          <Color key={color.id} className="color__item" color={color.name} />
        ))}
      </FlexContainer>
      <SizeBlock sizes={sizes} productId={id} />
      <FlexContainer className="info__bloc" wrap="nowrap">
        <FlexContainer direction="column" wrap="nowrap" align="start">
          <div className="product__name">{model.name}</div>
          <FlexContainer className="product__prase" justify="start">
            {sales > 0 ? (
              <FlexContainer justify="start">
                <div className="price price-discount">
                  €{price - (sales / 100) * price}
                </div>
                <div className="price price-before">€{price}</div>
              </FlexContainer>
            ) : (
              <div className="price">€{price}</div>
            )}
          </FlexContainer>
        </FlexContainer>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            addBasket();
          }}
        >
          <ShoppingFilled />
        </Button>
      </FlexContainer>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  font-size: 22px;
  font-weight: 300;
  text-transform: uppercase;
  display: flex;
  gap: 50px;
  width: 20%;
  flex-direction: column;
  text-align: center;
  padding: 15px;
  &:hover {
    outline: none 1px #f2f2f2;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.15);
  }
  .img__bloc {
    height: 260px;
    width: 260px;
    position: relative;
    img {
      height: 260px;
      width: 260px;
    }
    .sales {
      position: absolute;
      left: 0;
      top: 0;
      height: 50px;
      width: 80px;
      font-weight: 700;
      color: white;
      background-color: #c20000;
    }
  }
  .size__bloc {
    size__item {
      min-height: 1.5rem;
      min-width: 1.5rem;
    }
  }
  .info__bloc {
  }
  .product__prase {
    .price {
      font-weight: 700;
      &.price-discount {
        color: #c20000;
      }
      &.price-before {
        text-decoration: line-through;
        font-weight: 300;
      }
    }
  }
`;

const Color = styled.div`
  min-height: 27px;
  min-width: 27px;
  border-radius: 50%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.color || ""};
`;
