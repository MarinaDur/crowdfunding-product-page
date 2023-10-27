import { useInputAndClick } from "../context/InputAndClickContext";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import { Image } from "../ui/Image";
import Paragraph from "../ui/Paragraph";
import BookmarkBscreen from "./BookmarkBscreen";
import BookmarkSScreen from "./BookmarkSScreen";

function ProjectPreview() {
  const { handleOpenModal } = useInputAndClick();

  return (
    <Container $type="projectPreview">
      <Image src="logo-mastercraft.svg" alt="logo" />
      <Heading as="h1">Mastercraft Bamboo Monitor Riser</Heading>
      <Paragraph $type="projectPreview">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Paragraph>
      <Container $type="flex-row">
        <Button onClick={() => handleOpenModal("")}>Back this project</Button>
        <BookmarkSScreen />
        <BookmarkBscreen />
      </Container>
    </Container>
  );
}

export default ProjectPreview;
