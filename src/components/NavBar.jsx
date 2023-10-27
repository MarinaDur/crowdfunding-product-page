import styled from "styled-components";
import { useInputAndClick } from "../context/InputAndClickContext";
import { StyledNavImage } from "../ui/Image";
import Menu from "./Menu";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 950px) {
    padding: 30px 150px;
  }
`;

function NavBar() {
  const { handleOpenMenu, openMenu } = useInputAndClick();
  return (
    <StyledNav>
      <img src="logo.svg" alt="logo" />
      {openMenu ? (
        <StyledNavImage src="icon-close-menu.svg" alt="icon close menu/>" />
      ) : (
        <StyledNavImage
          src="icon-hamburger.svg"
          alt="icon-hamburger"
          onClick={handleOpenMenu}
        />
      )}
      <Menu
        $menu="big-screen"
        noDisplay="no-display"
        bigScreen="big-screen"
        noDevider="no"
      />
    </StyledNav>
  );
}

export default NavBar;
