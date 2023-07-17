import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Cart from "./Cart";

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartAlert = () => {
    Swal.fire({
      title: "Are you sure you want to clear the cart?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes, clear",
      denyButtonText: `No, cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("The cart was cleaned successfully", "", "success");
      } else if (result.isDenied) {
        Swal.fire("The cart remains unchanged", "", "info");
      }
    });
  };

  return (
    <Cart
      cart={cart}
      removeById={removeById}
      total={total}
      clearCartAlert={clearCartAlert}
    />
  );
};

export default CartContainer;
