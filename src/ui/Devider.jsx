import styled, { css } from "styled-components";

const StyledDevider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--color-out-of-stock-devider);

  ${(props) =>
    props.$noDevider &&
    css`
      @media (min-width: 950px) {
        display: none;
      }
    `}
`;

const StyledTotalDivider = styled.div`
  width: 75px;
  height: 1px;
  background: var(--color-gray-devider);

  @media (min-width: 950px) {
    display: none;
  }
`;

const HorizontalDevider = styled.div`
  width: 2px;
  height: 80px;
  background: var(--color-gray-devider);

  @media (max-width: 949.9px) {
    display: none;
  }
`;

export { StyledDevider, StyledTotalDivider, HorizontalDevider };
