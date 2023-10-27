import styled from "styled-components";
import Svg from "../ui/Svg";

const StyledSmallScreenBookmark = styled.div`
  height: fit-content;
  cursor: pointer;
  @media (min-width: 950px) {
    display: none;
  }
`;

function BookmarkSScreen() {
  return (
    <StyledSmallScreenBookmark>
      <Svg />
    </StyledSmallScreenBookmark>
  );
}

export default BookmarkSScreen;
