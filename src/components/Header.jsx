import styled from "styled-components";
import NavBar from "./NavBar";
import Menu from "./Menu";
import { useInputAndClick } from "../context/InputAndClickContext";

const StyledHeader = styled.header`
  width: 100%;
  height: 300px;
  background: url("image-hero-mobile.jpg") no-repeat center;
  background-size: cover;
  padding: 2rem;
  top: 0;
  left: 0;

  @media (min-width: 950px) {
    background: url("image-hero-desktop.jpg") no-repeat center;
    background-size: cover;
    height: 400px;
  }
`;

function Header() {
  const { openMenu } = useInputAndClick();
  return (
    <StyledHeader>
      <NavBar />
      {openMenu && <Menu modalMenu="modal-menu" />}
    </StyledHeader>
  );
}

export default Header;
