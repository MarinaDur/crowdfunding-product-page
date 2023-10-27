import React from "react";
import Container from "../ui/Container";

const ProductsContainer = React.forwardRef((props, ref) => {
  const { children, type } = props;
  const containerProps = type === "modalProducts" ? { ref } : {};
  return (
    <Container $type={type} {...containerProps}>
      {children}
    </Container>
  );
});
// function ProductsContainer({ children, type }) {
//   return <Container $type={type}>{children}</Container>;
// }

export default ProductsContainer;
