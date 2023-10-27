import styled from "styled-components";

const StyledCirclePickerContainer = styled.div`
  width: 25px;
  border-radius: 50%;
  border: 1px solid var(--color-gray-devider);
  /* padding: 2px; */
  height: 25px;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCirclePicker = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.$outOfStock === 0
      ? "var(--color-white)"
      : props.$chosen
      ? "var(--color-moderate-cyan)"
      : "var(--color-white)"};
`;

function CirclePicker({ outOfStock, chosen }) {
  return (
    <StyledCirclePickerContainer>
      <StyledCirclePicker $outOfStock={outOfStock} $chosen={chosen} />
    </StyledCirclePickerContainer>
  );
}

export default CirclePicker;
