import { ShoppingFilled } from "@ant-design/icons";
import styled from "styled-components";
import Button from "./base/Buttons";
import ColorBlok from "./ColorBlok";
import SalesLabel from "./SalesLabel";
import SizeBlok from "./SizeBlok";
import { FlexContainer } from "./styled/FlexContainer";

const InfoBlok = ({
  id,
  name,
  price,
  sales,
  color,
  types,
  colors,
  sizes,
  info,
}) => {
  return (
    <Wrapper>
      <h2>
        {name} {color}
      </h2>
      {types.map((type) => (
        <p>
          {type.name} {name} {color}
        </p>
      ))}
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
      <div className="line"></div>
      <p>Color</p>
      <ColorBlok colors={colors} />
      <p>Size</p>
      <SizeBlok sizes={sizes} />
      <FlexContainer className="button__wrapper">
        <Button onClick={() => {}} text="Add tu basket">
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
