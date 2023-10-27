import Container from "../ui/Container";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import React from "react";
import { useInputAndClick } from "../context/InputAndClickContext";

const ThankYouModal = React.forwardRef(() => {
  const { modalThanksRef, handleCloseModal } = useInputAndClick();
  return (
    <Container
      $type="modalProducts"
      $subType="thanks-modal"
      $flexModal="flex-column"
      ref={modalThanksRef}
    >
      <img src="icon-check.svg" alt="submitted icon" />
      <Heading as="h3" $type="black">
        Thanks for your support!
      </Heading>
      <Paragraph>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </Paragraph>
      <Button $size="small" onClick={handleCloseModal}>
        Got it!
      </Button>
    </Container>
  );
});

export default ThankYouModal;
