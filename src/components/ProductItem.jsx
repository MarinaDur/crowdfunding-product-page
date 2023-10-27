import styled, { css } from "styled-components";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useInputAndClick } from "../context/InputAndClickContext";
import CirclePicker from "../ui/CirclePicker";
import PledgeContainer from "./PledgeContainer";

const StyledProductItem = styled.li`
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-direction: column;
`;

const StyledProductItemContainer = styled.div`
  transition: 0.3s height ease-in;
  overflow: hidden;
  border: ${(props) =>
    props.$chosen && props.$type === "modalProducts"
      ? "2px solid var(--color-dark-cyan)"
      : "1px solid var(--color-gray-devider)"};
  border-radius: 10px;
  height: ${(props) =>
    props.$type !== "modalProducts"
      ? "360px"
      : props.$name === "Pledge with no reward" && props.$chosen
      ? "380px"
      : props.$name === "Pledge with no reward"
      ? "220px"
      : props.$chosen
      ? "430px"
      : "285px"};

  ${(props) =>
    props.$outOfStock === 0 &&
    css`
      border: 1px solid var(--color-out-of-stock-devider);
    `};

  @media (min-width: 550px) {
    height: ${(props) =>
      props.$type !== "modalProducts"
        ? "320px"
        : props.$name === "Pledge with no reward" && props.$chosen
        ? "360px"
        : props.$name === "Pledge with no reward"
        ? "185px"
        : props.$chosen
        ? "400px"
        : "260px"};
  }
  @media (min-width: 750px) {
    height: ${(props) =>
      props.$type !== "modalProducts"
        ? "300px"
        : props.$name === "Pledge with no reward" && props.$chosen
        ? "330px"
        : props.$name === "Pledge with no reward"
        ? "170px"
        : props.$chosen
        ? "380px"
        : "240px"};
  }

  @media (min-width: 950px) {
    height: ${(props) =>
      props.$type !== "modalProducts"
        ? "210px"
        : props.$name === "Pledge with no reward" && props.$chosen
        ? "280px"
        : props.$name === "Pledge with no reward"
        ? "170px"
        : props.$chosen
        ? "280px"
        : "180px"};
  }
`;

function ProductItem({ cur, type, chosen, subType }) {
  const { handleOpenModal, handleChoosePledge } = useInputAndClick();
  const {
    productName,
    productPrice,
    productDescription,
    productInventoryNum,
    pledge,
  } = cur;

  const idSectionModal = type === "modalProducts" ? productName : "";

  return (
    <StyledProductItemContainer
      $outOfStock={productInventoryNum}
      onClick={(e) => {
        e.stopPropagation();
        handleChoosePledge(productName);
      }}
      $chosen={chosen}
      $type={type}
      $name={productName}
      id={idSectionModal}
    >
      <StyledProductItem>
        <Container $padding="0" $type="flex-row">
          <Container $type="flex-row-left" $subtype="inner-con">
            {type === "modalProducts" && (
              <CirclePicker outOfStock={productInventoryNum} chosen={chosen} />
            )}
            <Container
              $subtype="inner-con"
              $typeTitle="title"
              $bscreen="product-item-b-screen"
              $subType={subType}
            >
              <Heading as="h3" $type="black" $outOfStock={productInventoryNum}>
                {productName !== null && productName}
              </Heading>
              <Heading as="h3" $type="green" $outOfStock={productInventoryNum}>
                {productPrice !== null && productPrice}
              </Heading>
            </Container>
          </Container>
          <Container
            $subtype="inner-con"
            $type="flex-row-right"
            $width="width"
            $screen="big"
            $subType={subType}
          >
            <Heading as="h4" $outOfStock={productInventoryNum}>
              {productInventoryNum !== null && productInventoryNum}
            </Heading>
            {productInventoryNum !== null && (
              <Paragraph $outOfStock={productInventoryNum}>left</Paragraph>
            )}
          </Container>
        </Container>

        <Paragraph $outOfStock={productInventoryNum}>
          {productDescription !== null && productDescription}
        </Paragraph>

        <Container
          $subtype="inner-con"
          $type="flex-column-left"
          $bscreen="product-item-b-screen"
        >
          <Container
            $subtype="inner-con"
            $type="flex-row-left"
            $width="width"
            $screen="small"
            $subType={subType}
          >
            <Heading as="h4" $outOfStock={productInventoryNum}>
              {productInventoryNum !== null && productInventoryNum}
            </Heading>
            {productInventoryNum !== null && (
              <Paragraph $outOfStock={productInventoryNum}>left</Paragraph>
            )}
          </Container>

          {type !== "modalProducts" && (
            <Button
              $size="small"
              $outOfStock={productInventoryNum}
              onClick={(e) => {
                // e.stopPropagation();
                handleOpenModal();
              }}
              disabled={productInventoryNum === 0}
            >
              Select Reward
            </Button>
          )}
        </Container>
      </StyledProductItem>
      {type === "modalProducts" && productInventoryNum !== 0 && chosen && (
        <PledgeContainer pledge={pledge} name={productName} />
      )}
    </StyledProductItemContainer>
  );
}

export default ProductItem;
