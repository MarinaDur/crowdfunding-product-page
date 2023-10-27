import Container from "../ui/Container";
import { StyledDevider } from "../ui/Devider";
import Heading from "../ui/Heading";

function Menu({ noDisplay, bigScreen, noDevider }) {
  return (
    <Container $type="about" $secondType="menu" $noDisplay={noDisplay}>
      <Container
        $bigScreen={bigScreen}
        $secondType="padding"
        // $colorMenu="transparent"
        // $noPadding="no-padding"
      >
        <Heading as="h5">About</Heading>
      </Container>
      <StyledDevider $noDevider={noDevider} />
      <Container
        $bigScreen={bigScreen}
        $secondType="padding"
        // $colorMenu="transparent"
        // $noPadding="no-padding"
      >
        <Heading as="h5">Discover</Heading>
      </Container>
      <StyledDevider $noDevider={noDevider} />
      <Container
        $secondType="padding"
        $bigScreen={bigScreen}

        // $colorMenu="transparent"
        // $noPadding="no-padding"
      >
        <Heading as="h5">Get started</Heading>
      </Container>
    </Container>
  );
}

export default Menu;
///$screen="big"
