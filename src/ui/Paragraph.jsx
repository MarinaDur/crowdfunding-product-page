import styled, { css } from "styled-components";

const Paragraph = styled.p`
  color: var(--color-dark-gray);
  font-size: 1.4rem;
  line-height: 1.8;

  ${(props) =>
    props.$type === "projectPreview" &&
    css`
      text-align: center;
      margin-bottom: 2rem;
    `}

  ${(props) =>
    props.$type === "margin-bottom" &&
    css`
      margin-bottom: 1rem;
    `}

    ${(props) =>
    props.$outOfStock === 0 &&
    css`
      color: var(--color-out-of-stock-gray);
    `}

      ${(props) =>
    props.$type === "error" &&
    css`
      color: red;
    `}

    ${(props) =>
    props.$isBookmarked &&
    css`
      color: var(--color-dark-cyan);
    `}
`;

export default Paragraph;
