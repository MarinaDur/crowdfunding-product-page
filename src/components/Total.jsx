import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { StyledTotalDivider } from "../ui/Devider";

function Total({ total, text, devider }) {
  return (
    <Container $type="flex-column" $subtype="inner-con">
      <Heading as="h4">{total}</Heading>
      <Paragraph $type="margin-bottom">{text}</Paragraph>
      {devider && <StyledTotalDivider />}
    </Container>
  );
}

export default Total;
