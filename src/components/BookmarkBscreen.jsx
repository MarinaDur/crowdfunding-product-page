import styled from "styled-components";
import Svg from "../ui/Svg";
import Paragraph from "../ui/Paragraph";
import { useInputAndClick } from "../context/InputAndClickContext";

const StyledBookmarkCon = styled.div`
  padding-right: 1.5rem;
  color: var(--color-white);
  font-weight: 700;
  border-radius: 40px;
  border: none;
  background: var(--color-out-of-stock-bookmark);
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  @media (max-width: 949.9px) {
    display: none;
  }
`;

function BookmarkBscreen() {
  const { handleBookmark, isBookmarked, setIsHovered } = useInputAndClick();

  return (
    <StyledBookmarkCon
      $isBookmarked={isBookmarked}
      onClick={handleBookmark}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Svg handleBookMarkB={handleBookmark} />
      <Paragraph>{isBookmarked ? "Bookmarked" : "Bookmark"}</Paragraph>
    </StyledBookmarkCon>
  );
}

export default BookmarkBscreen;
