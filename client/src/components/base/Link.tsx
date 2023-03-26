import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React, { ReactElement, FC } from "react";

interface LinkProps {
  to: string;
  children?: ReactElement | React.ReactNode;
}

const Link: FC<LinkProps> = ({ to, children }) => {
  return (
    <LinkWrapper>
      <NavLink
        to={to}
        className={({ isActive, isPending }) => (isPending ? "pending" : "")}
      >
        {children}
      </NavLink>
    </LinkWrapper>
  );
};

export default Link;

const LinkWrapper = styled.li`
  a {
    display: flex;
    gap: 10px;
    justify-content: start;
    align-items: center;
    color: rgb(77, 76, 76);
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
