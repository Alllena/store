import styled from "styled-components";
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
        <h3>
          {type.name} {name} {color}
        </h3>
      ))}
      <FlexContainer className="product__prase" justify="start">
        {sales > 0 ? (
          <FlexContainer justify="start">
            <div className="price price-discount">
              €{price - (sales / 100) * price}
            </div>
            <div className="price price-before">€{price}</div>
            <SalesLabel sales={sales} />
          </FlexContainer>
        ) : (
          <div className="price">€{price}</div>
        )}
      </FlexContainer>
      <ColorBlok colors={colors} />
      <SizeBlok sizes={sizes} />

      <p>{info}</p>
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
`;
