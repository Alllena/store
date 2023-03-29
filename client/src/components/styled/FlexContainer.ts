import styled from "styled-components";
interface Props {
  direction?: string;
  wrap?: string;
  justify?: string;
  align?: string;
  gap?: string;
  className?: string;
}

export const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: ${({ wrap }) => wrap || "wrap"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  gap: ${({ gap }) => gap || "10px"};
  /* height: 100%; */
  /* width: 100%; */
`;
