import styled, { css } from "styled-components";
import { useInputAndClick } from "../context/InputAndClickContext";

const StyledSVG = styled.svg`
  circle {
    fill: ${(props) =>
      props.$isBookmarked
        ? "var(--color-dark-cyan)"
        : "#2F2F2F"}; // Change the fill color of the circle
  }

  path {
    fill: ${(props) =>
      props.$isBookmarked
        ? "white"
        : "#B1B1B1"}; // Change the fill color of the path
  }

  ${(props) =>
    props.$isHovered &&
    css`
      circle {
        fill: #606060;
        transition: 0.1s all ease-in-out;
      }
    `}
`;

function Svg({ handleBookMarkB }) {
  const { handleBookmark, isBookmarked, isHovered } = useInputAndClick();

  return (
    <StyledSVG
      width="56"
      height="56"
      xmlns="http://www.w3.org/2000/svg"
      $isBookmarked={isBookmarked}
      onClick={() => {
        handleBookmark();
        if (handleBookMarkB) {
          handleBookMarkB(); // Call the function if it exists
        }
      }}
      $isHovered={isHovered}
    >
      <circle cx="28" cy="28" r="28" />
      <path d="M23 19v18l5-5.058L33 37V19z" />
    </StyledSVG>
  );
}

export default Svg;
