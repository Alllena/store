import styled from "styled-components";
import React, { ReactElement } from "react";
import { FC } from "react";
import { FlexContainer } from "../styled/FlexContainer";

export enum ButtonLook {
  extra = "extra",
  main = "main",
  header = "header",
}

interface ButtonProps {
  onClick: () => void;
  children?: ReactElement | React.ReactNode;
  look?: ButtonLook;
  text?: string;
}

const Button: FC<ButtonProps> = ({ onClick, look, children, text }) => {
  return (
    <ButtonWrapper onClick={onClick} look={look}>
      <FlexContainer>
        {children}
        {text}
      </FlexContainer>
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
      : props.look === "header"
      ? "transparent"
      : "#000"};
  color: ${(props) =>
    props.look === "main"
      ? "#000"
      : props.look === "header"
      ? "#000"
      : props.look === "extra"
      ? "#4096ff"
      : "#fff"};
  font-family: "Circular", sans-serif;
  font-weight: 700;
  font-size: ${(props) =>
    props.look === "header" ? "36px" : props.text ? "20px" : "22px"};
  display: flex;
  border: none;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 15px 20px;

  &:hover {
    background-color: ${(props) =>
      props.look === "main"
        ? "transparent"
        : props.look === "header"
        ? "transparent"
        : props.look === "extra"
        ? "#000"
        : "#4096ff"};

    color: ${(props) =>
      props.look === "header"
        ? "#4096ff"
        : props.look === "extra"
        ? "#4096ff"
        : props.look === "main"
        ? "#000"
        : "#fff"};
  }
`;
