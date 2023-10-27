import { useInputAndClick } from "../context/InputAndClickContext";
import Container from "../ui/Container";
import { HorizontalDevider } from "../ui/Devider";
import ProgressLine from "../ui/ProgressLine";
import Total from "./Total";

function TotalContainer() {
  const { totalBackers, totalBackedAmount } = useInputAndClick();
  return (
    <Container $type="outer-con">
      <Container $type="total-flex-column">
        <Total
          total={`$${totalBackedAmount.toLocaleString()}`}
          text="of $100,000 backed"
          devider={true}
        />
        <HorizontalDevider />
        <Total
          total={totalBackers.toLocaleString()}
          text="total backers"
          devider={true}
        />
        <HorizontalDevider />
        <Total total="56" text="days left" devider={false} />
      </Container>
      <ProgressLine />
    </Container>
  );
}

export default TotalContainer;
