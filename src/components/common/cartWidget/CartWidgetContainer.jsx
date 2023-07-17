import { useContext } from "react";
import CartWidget from "./CartWidget";
import { CartContext } from "../../../context/CartContext";

const CartWidgetContainer = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <>
      <CartWidget totalItems={totalItems} />
    </>
  );
};

export default CartWidgetContainer;
