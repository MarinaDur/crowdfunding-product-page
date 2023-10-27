import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import { useInputAndClick } from "../context/InputAndClickContext";
import OverColor from "../ui/OverColor";

const StyledBody = styled.div`
  margin: 0 auto 30px;
  width: 100%;
  height: 100%;
  position: relative;
`;

function Body() {
  const { openModal, openThanksModal, openMenu } = useInputAndClick();
  return (
    <>
      <StyledBody>
        {(openModal || openThanksModal || openMenu) && <OverColor />}
        <Header />
        <Main />
      </StyledBody>
    </>
  );
}

export default Body;
