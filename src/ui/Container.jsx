import styled, { css } from "styled-components";

const Container = styled.div`
  background: var(--color-white);
  border-radius: 10px;
  padding: 25px;
  width: 100%;

  ${(props) =>
    props.$colorMenu === "transparent" &&
    css`
      background: transparent;
      padding: 0;
    `}

  ${(props) =>
    props.$type === "projectPreview" &&
    css`
      /* display: flex; */
      /* align-items: center;
      justify-content: space-between;
      flex-direction: column; */
      /* gap: 2rem; */
      padding: 20px 25px 40px;
      margin-top: -5rem;
      position: relative;

      @media (min-width: 950px) {
        margin-top: -8rem;
      }
    `}

  ${(props) =>
    props.$type === "flex-row" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      padding: 0;
    `}

      ${(props) =>
    props.$subtype === "totalCon" &&
    css`
      padding: 40px 25px;
    `}

    ${(props) =>
    props.$type === "flex-column" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 2rem;
    `}

    ${(props) =>
    props.$subtype === "inner-con" &&
    css`
      padding: 0;
      gap: 1.5rem;
    `}

      ${(props) =>
    props.$type === "about" &&
    css`
      padding: 10px 0 30px;
    `}

     ${(props) =>
    props.$type === "flex-column-left" &&
    css`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      gap: 2rem;
    `}

      ${(props) =>
    props.$type === "flex-row-left" &&
    css`
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 1rem;
      padding: 0;
    `}

        ${(props) =>
    props.$type === "flex-row-right" &&
    css`
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      gap: 1rem;
      padding: 0;
    `}

      ${(props) =>
    props.$type === "products" &&
    css`
      margin-bottom: 50px;
    `}


     ${(props) =>
    props.$type === "modalProducts" &&
    css`
      position: absolute;
      top: 130px;
      left: 50%;
      transform: translateX(-50%);
      width: 85%;
      z-index: 999;
      max-width: 680px;
      /* height: 500px; */
      /* overflow: scroll; */

      ${(props) =>
        props.$subType === "thanks-modal" &&
        css`
          @media (min-width: 950px) {
            max-width: 450px;
            top: 25%;
            text-align: center;
          }
        `}
    `}


    ${(props) =>
    props.$typeTitle === "title" &&
    css`
      width: 85%;
    `}

${(props) =>
    props.padding === "10" &&
    css`
      padding: 30px 15px 25px;
    `}

      ${(props) =>
    props.$flexModal === "flex-column" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 2rem;
    `}

       ${(props) =>
    props.$secondType === "menu" &&
    css`
      position: absolute;
      top: 90px;
      left: 50%;
      transform: translateX(-50%);
      width: 85%;
      z-index: 999;
      /* height: 500px; */
      /* overflow: scroll; */

      @media (min-width: 950px) {
        position: static;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 45%;
        position: static;
        background: transparent;
        left: 0;
        left: auto;
        top: auto;
        transform: none;
        padding: 0;
      }
      ${(props) =>
        props.$noDisplay &&
        css`
          @media (max-width: 949.9px) {
            display: none;
          }
        `}
    `}

    ${(props) =>
    props.$bigScreen === "big-screen" &&
    css`
      @media (min-width: 950px) {
        background: transparent;
        padding: 0;
      }
    `}

    ${(props) =>
    props.$menu === "big-screen" &&
    css`
      @media (max-width: 949.9px) {
        display: none;
      }
    `}

    ${(props) =>
    props.$secondType === "padding" &&
    css`
      padding: 15px 20px;

      ${(props) =>
        props.$noPadding &&
        css`
          padding: 0;
        `}
    `}

      ${(props) =>
    props.$type === "total-flex-column" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 2rem;
      padding: 20px;

      @media (min-width: 950px) {
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
      }
    `}

     ${(props) =>
    props.$type === "outer-con" &&
    css`
      padding-bottom: 40px;
    `}




    ${(props) =>
    props.$bscreen === "product-item-b-screen" &&
    props.$type !== "modalProducts" &&
    css`
      @media (min-width: 950px) {
        display: flex;
        align-items: center;
        justify-content: ${(props) =>
          props.$subType === "modalProducts" ? "flex-left" : "space-between"};
        flex-direction: row;
        padding: 0;
        width: 100%;
      }
    `} 

      
   ${(props) =>
    props.$liModalCon === "modal-con" &&
    css`
      @media (min-width: 950px) {
        display: none;
      }
    `};

  ${(props) =>
    props.$width === "width" &&
    css`
      width: 50%;
    `}

  ${(props) =>
    props.$type === "modalProducts" &&
    css`
      ${(props) =>
        props.$mediaCon === "modalProducts" &&
        css`
          @media (min-width: 950px) {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            gap: 1rem;
            padding: 0;
          }
        `}
    `}

    ${(props) =>
    props.$padding === "0" &&
    css`
      padding: 0;
    `}

    ${(props) =>
    props.$screen === "small" &&
    props.$subType === "modalProducts" &&
    css`
      @media (min-width: 950px) {
        display: none;
      }
    `}

     ${(props) =>
    props.$screen === "big" &&
    props.$subType === "modalProducts" &&
    css`
      @media (max-width: 949.9px) {
        display: none;
      }
    `}

     ${(props) =>
    props.$screen === "big" &&
    props.$subType === "products" &&
    css`
      display: none;
    `}


    ${(props) =>
    props.$type === "pledge-con" &&
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 2rem;
      padding: 30px 15px 25px;
      gap: 1.5rem;

      @media (min-width: 950px) {
        flex-direction: row;
      }
    `}


    ${(props) =>
    props.$widthBig === "width" &&
    css`
      @media (min-width: 950px) {
        width: 50%;
        justify-content: flex-end;
      }
    `}
`;

export default Container;
