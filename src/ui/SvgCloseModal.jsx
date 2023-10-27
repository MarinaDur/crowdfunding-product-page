import styled from "styled-components";
import { useInputAndClick } from "../context/InputAndClickContext";

const StyledSVG = styled.svg`
  // Define your CSS styles here
  fill: #000;
  fill-rule: evenodd;
  opacity: 0.4;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

function SvgCloseModal() {
  const { handleCloseModal } = useInputAndClick();

  return (
    <StyledSVG
      width="15"
      height="15"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleCloseModal}
    >
      <path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" />
    </StyledSVG>
  );
}

export default SvgCloseModal;
