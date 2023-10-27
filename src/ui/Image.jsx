import styled from "styled-components";

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ImageCloseModal = styled.img`
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    & > svg {
      path {
        fill: #ff0000; /* Change the fill color on hover */
      }
    }
  }
`;

const ImageBookmark = styled.svg`
  width: 100px; // Set the width
  height: 100px; // Set the height
  fill: #ff0000; // Set the fill color
`;

const StyledNavImage = styled.img`
  @media (min-width: 950px) {
    display: none;
  }
`;

export { Image, ImageCloseModal, ImageBookmark, StyledNavImage };
