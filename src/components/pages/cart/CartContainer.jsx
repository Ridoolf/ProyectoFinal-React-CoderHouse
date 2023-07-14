import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";

const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);

  return (
    <>
      <div className="containerCart">
        <button onClick={clearCart} className="clean">
          Clean
        </button>
        {cart.length === 0 ? (
          <h4 className="empty">Empty</h4>
        ) : (
          cart.map((product) => {
            return (
              <div key={product.id} className="cartCardContainer">
                <img src={product.img} alt="" />
                <div className="infoCart">
                  <h2>{product.title}</h2>
                  <h3>${product.price}</h3>
                  <p>amount: {product.quantity}</p>
                </div>
                <div className="delete">
                  <button onClick={() => removeById(product.id)}>D</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default CartContainer;
