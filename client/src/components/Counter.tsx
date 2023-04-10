import React, { FC, useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import Button, { ButtonLook } from "./base/Buttons";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { FlexContainer } from "./styled/FlexContainer";

interface ICounterProps {
  decrement: () => void;
  increment: () => void;
  count: number;
  price: number;
  sales: number;
}

const Counter: FC<ICounterProps> = ({
  decrement,
  increment,
  count,
  price,
  sales,
}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    count && price && countPriceProducts();
  }, [count]);

  const countPriceProducts = () => {
    const counter = count * (price - (price * sales) / 100);
    setTotalPrice(counter);
  };

  return (
    <CounterWrapper>
      <Button onClick={increment} look={ButtonLook.main}>
        <PlusOutlined />
      </Button>
      <FlexContainer className="count">{count}</FlexContainer>
      <Button onClick={decrement} look={ButtonLook.main}>
        <MinusOutlined />
      </Button>
      <FlexContainer className="count__cash" justify="start">
        €<span>{totalPrice}</span>
      </FlexContainer>
    </CounterWrapper>
  );
};
export default Counter;

const CounterWrapper = styled.div`
  display: flex;
  gap: 5px;
  font-size: 22px;
  font-weight: 400;
  .count {
    width: 70px;
  }
  .count,
  .count__prase {
    height: 50px;
    border-bottom: 1px solid rgba(160, 160, 160, 0.25);
  }
  .count__cash {
    width: 100px;
  }
  button {
    padding: 5px;
  }
`;
