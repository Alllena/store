import styled from "styled-components";
import React, { ReactElement } from "react";
import { FC } from "react";
import { FlexContainer } from "../styled/FlexContainer";

export enum ButtonLook {
  extra = "extra",
  main = "main",
  icon = "icon",
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
      : props.look === "icon"
      ? "transparent"
      : "#000"};
  color: ${(props) =>
    props.look === "main"
      ? "#000"
      : props.look === "icon"
      ? "#000"
      : props.look === "extra"
      ? "#4096ff"
      : "#fff"};
  font-family: "Circular", sans-serif;
  font-weight: 700;
  font-size: ${(props) => (props.look === "icon" ? "40px" : "22px")};
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
        : props.look === "icon"
        ? "transparent"
        : props.look === "extra"
        ? "#000"
        : "#4096ff"};

    color: ${(props) =>
      props.look === "icon"
        ? "#4096ff"
        : props.look === "extra"
        ? "#4096ff"
        : props.look === "main"
        ? "#000"
        : "#fff"};
  }
`;
