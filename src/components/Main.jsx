import styled from "styled-components";
import ProjectPreview from "./ProjectPreview";
import TotalContainer from "./TotalContainer";
import ProductsContainer from "./ProductsContainer";
import About from "./About";
import Products from "./Products";
import { products, productsModal } from "../data/data";
import { useInputAndClick } from "../context/InputAndClickContext";
import ThankYouModal from "./ThankYouModal";

const StyledMain = styled.main`
  width: 85%;
  margin: 0 auto 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 680px;
`;

function Main() {
  const { openModal, modalRef, openThanksModal } = useInputAndClick();
  return (
    <>
      <StyledMain>
        {openThanksModal && <ThankYouModal />}
        <ProjectPreview />
        <TotalContainer />
        <ProductsContainer type="products">
          <About
            title="About this project"
            paragraphOne=" The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand."
            paragraphTwo=" Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand."
          />
          <Products data={products} type="products" subType="products" />
        </ProductsContainer>
        {openModal && (
          <ProductsContainer type="modalProducts" ref={modalRef}>
            <About
              title="Back this project"
              paragraphOne="Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"
            />
            <Products
              data={productsModal}
              type="modalProducts"
              subType={"modalProducts"}
            />
          </ProductsContainer>
        )}
      </StyledMain>
    </>
  );
}

export default Main;
