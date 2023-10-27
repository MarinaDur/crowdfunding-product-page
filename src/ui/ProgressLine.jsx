import styled from "styled-components";

const ProgresslineContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--color-light-gray);
  border-radius: 10px;
`;

const StyledProgressline = styled.div`
  width: 80%;
  height: 100%;
  background: var(--color-moderate-cyan);
  border-radius: 10px;
`;

function ProgressLine() {
  return (
    <ProgresslineContainer>
      <StyledProgressline />
    </ProgresslineContainer>
  );
}

export default ProgressLine;
