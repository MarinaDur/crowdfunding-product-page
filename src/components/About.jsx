import { useInputAndClick } from "../context/InputAndClickContext";
import Container from "../ui/Container";
import Heading from "../ui/Heading";

import Paragraph from "../ui/Paragraph";
import SvgCloseModal from "../ui/SvgCloseModal";

function About({ title, paragraphOne, paragraphTwo }) {
  const { openModal } = useInputAndClick();
  return (
    <Container $type="about">
      <Container $type="flex-row">
        <Heading as="h2">{title}</Heading>
        {openModal && <SvgCloseModal />}
      </Container>
      <Paragraph $type="margin-bottom">{paragraphOne}</Paragraph>
      {paragraphTwo && <Paragraph>{paragraphTwo}</Paragraph>}
    </Container>
  );
}

export default About;
