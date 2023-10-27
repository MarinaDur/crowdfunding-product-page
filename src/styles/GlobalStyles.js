import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {



///Primary

--color-moderate-cyan: hsl(176, 50%, 47%);
--color-dark-cyan: hsl(176, 72%, 28%);

////Neutral

--color-black: hsl(0, 0%, 0%);
--color-out-of-stock-black: #696969;
--color-out-of-stock-cyan:#BBEDE2;
--color-out-of-stock-gray: #CBCBCB;
--color-out-of-stock-devider: hsl(0, 0%, 85%);
--color-out-of-stock-bookmark: hsl(0, 0%, 90%);



--color-dark-gray: hsl(0, 0%, 48%);
--color-light-gray: #f4f4f4;
--color-gray-devider: hsl(0, 0%, 80%);
--color-open-modal:hsl(0,0%,20%);


--color-white: hsl(0, 0%, 100%);


 
}
/* 
#root{
  width: 100vw;
  height: 100vh;
} */

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
   height: 100vh;
}

body {
  font-family: 'Commissioner', sans-serif;
  //color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
   line-height: 1.5;
  font-size: 16px;
  background: var(--color-light-gray);
  margin-bottom: 100px;

  /* min-height: 100vh;
  min-width: 100vw; */
  /* display  :flex ;
justify-items: center; */
/* 
 display: grid;
  place-content: center;
  
  min-height: 100vh; */

  
}

input{
    font-size: 3.2rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ul {
  list-style: none;
} */

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  display: none;
}


p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  //filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}





  




`;
export default GlobalStyles;
