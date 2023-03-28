import styled from "styled-components";
import { useState } from "react";

const SizeBlok = ({ sizes }) => {
  const [isActive, setIsActive] = useState(Number);
  return (
    <Wrapper>
      {sizes.map((size) =>
        isActive === size.id ? (
          <div className="size__item active">{size.name}</div>
        ) : (
          <div className="size__item" onClick={() => setIsActive(size.id)}>
            {size.name}
          </div>
        )
      )}
    </Wrapper>
  );
};

export default SizeBlok;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  .size__item {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 27px;
    min-width: 27px;
    cursor: pointer;
    &.active {
      color: #fff;
      background-color: #000;
    }
  }
`;
