import { useInputAndClick } from "../context/InputAndClickContext";
import Container from "../ui/Container";
import ProductItem from "./ProductItem";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
`;

function Products({ data, type, subType }) {
  const { chosenPledge } = useInputAndClick();

  return (
    <Container $type="flex-column" $subtype="inner-con">
      <StyledUl>
        {data.map((cur) => (
          <ProductItem
            cur={cur}
            key={cur.productName}
            type={type}
            chosen={chosenPledge === cur.productName}
            subType={subType}
          />
        ))}
      </StyledUl>
    </Container>
  );
}

export default Products;
