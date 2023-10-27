import styled, { css } from "styled-components";

const Button = styled.button`
  background: var(--color-moderate-cyan);
  padding: 1.5rem 4.2rem;
  color: var(--color-white);
  font-weight: 700;
  border-radius: 40px;
  border: none;
  transition: 0.3s all ease-in-out;

  &:hover {
    background: var(--color-dark-cyan);
  }

  ${(props) =>
    props.$size === "small" &&
    css`
      padding: 1.2rem 3rem;
      font-size: 1.4rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.$outOfStock === 0 &&
    css`
      background: var(--color-out-of-stock-gray);
    `}

     ${(props) =>
    props.$width === "pledge" &&
    css`
      width: 45%;
      padding: 1.2rem 2rem;

      @media (min-width: 950px) {
        width: 30%;
        padding: 1.2rem 0rem;
      }
    `}
`;
export default Button;
