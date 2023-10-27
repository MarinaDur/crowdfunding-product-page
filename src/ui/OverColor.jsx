import styled from "styled-components";
import { useInputAndClick } from "../context/InputAndClickContext";

const StyledOverColor = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: var(--color-black);
  opacity: 0.6;
  z-index: 99;
`;

function OverColor() {
  const { handleCloseModal } = useInputAndClick();

  return <StyledOverColor onClick={handleCloseModal} />;
}

export default OverColor;
