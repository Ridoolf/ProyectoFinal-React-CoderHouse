import { useState, useEffect, useContext } from "react";
import ProductDetail from "./ProductDetail";
import { products } from "../../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { addToCart, getTotalQuantity } = useContext(CartContext);

  const { id } = useParams();

  const productAmount = getTotalQuantity(+id);

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <ProductDetail
      productSelected={productSelected}
      addToCart={addToCart}
      productAmount={productAmount}
    />
  );
};

export default ProductDetailContainer;
