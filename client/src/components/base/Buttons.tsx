import styled from "styled-components";
import React, { ReactElement } from "react";
import { FC } from "react";
import { FlexContainer } from "../styled/FlexContainer";

export enum ButtonLook {
  extra = "extra",
  main = "main",
}

interface ButtonProps {
  onClick: () => void;
  children?: ReactElement | React.ReactNode;
  look?: ButtonLook;
}

const Button: FC<ButtonProps> = ({ onClick, look, children }) => {
  return (
    <ButtonWrapper onClick={onClick} look={look}>
      <FlexContainer>{children}</FlexContainer>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.look === "main"
      ? "transparent"
      : props.look === "extra"
      ? "transparent"
      : "#000"};
  color: ${(props) =>
    props.look === "main"
      ? "#000"
      : props.look === "extra"
      ? "#2745ac"
      : "#fff"};
  font-family: "Circular", sans-serif;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;

  &:hover {
    background-color: ${(props) =>
      props.look === "main"
        ? "transparent"
        : props.look === "extra"
        ? "#000"
        : "#2745ac"};
  }
`;
