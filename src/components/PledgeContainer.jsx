import Container from "../ui/Container";
import Paragraph from "../ui/Paragraph";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useInputAndClick } from "../context/InputAndClickContext";
import Error from "./Error";
import { StyledDevider } from "../ui/Devider";

function PledgeContainer({ pledge, name }) {
  const { handleEnterPledge, error, handleTotalBackers, handleTotalBacked } =
    useInputAndClick();
  return (
    <>
      <StyledDevider />
      <Container $type="pledge-con">
        <Paragraph>Enter you pledge</Paragraph>
        {Object.keys(error).map(
          (optionName) =>
            error[optionName].error &&
            optionName === name && <Error key={optionName} />
        )}
        <Container $subtype="inner-con" $type="flex-row" $widthBig="width">
          <Input pledge={pledge} />
          <Button
            $size="small"
            $width="pledge"
            onClick={(e) => {
              handleEnterPledge(e, name);
              handleTotalBackers();
              handleTotalBacked();
            }}
          >
            Continue
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default PledgeContainer;
