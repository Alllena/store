import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React, { ReactElement, FC } from "react";

export enum LinkLook {
  warning = "warning",
  important = "important",
}

interface LinkProps {
  to: string;
  children?: ReactElement | React.ReactNode;
  look?: LinkLook;
  onClick?: () => void;
}

const Link: FC<LinkProps> = ({ to, children, look, onClick }) => {
  return (
    <LinkWrapper look={look} to="">
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        onClick={onClick}
      >
        {children}
      </NavLink>
    </LinkWrapper>
  );
};

export default Link;

const LinkWrapper = styled.div<LinkProps>`
  a {
    display: flex;
    gap: 10px;
    justify-content: start;
    align-items: center;
    color: ${(props) =>
      props.look === "important"
        ? "#4096ff"
        : props.look === "warning"
        ? "#c20000"
        : "rgb(77, 76, 76)"};
    padding: 15px 15px;
    font-size: 24px;
    font-weight: 300;
    &.pending {
      color: #4096ff;
    }
    &:hover {
      color: #4096ff;
    }
  }
`;
