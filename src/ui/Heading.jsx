import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-weight: 700;
  text-align: left;
  color: var(--color-black);
  transition: 0.3s all ease-in-out;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2rem;
      text-align: center;
      /* margin-top: 2rem; */
      width: 200px;
      margin: 3rem auto 2rem;

      @media (min-width: 950px) {
        width: 100%;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.7rem;
      margin-bottom: 20px;
    `}

     ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.5rem;
      /* margin-bottom: 0.3rem; */
      cursor: pointer;

      ${(props) =>
        props.$type === "green" &&
        css`
          color: var(--color-moderate-cyan);
        `};

      ${(props) =>
        props.$type === "black" &&
        css`
          color: var(--color-black);
          &:hover {
            color: var(--color-moderate-cyan);
          }
        `};

      ${(props) =>
        props.$outOfStock === 0 &&
        props.$type === "black" &&
        css`
          color: var(--color-out-of-stock-black);
        `}

      ${(props) =>
        props.$outOfStock === 0 &&
        props.$type === "green" &&
        css`
          color: var(--color-out-of-stock-cyan);
        `}
    `}

      ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      line-height: 1;

      ${(props) =>
        props.$outOfStock === 0 &&
        css`
          color: var(--color-out-of-stock-black);
        `}
    `}

    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--color-black);
      cursor: pointer;

      @media (min-width: 950px) {
        text-align: right;
        color: var(--color-white);
      }
    `}
`;

export default Heading;
