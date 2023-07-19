import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ clearCartAlert, cart, removeById, total }) => {
  return (
    <>
      <div className="containerCart">
        {cart.length === 0 ? (
          <h4 className="empty">Empty</h4>
        ) : (
          cart.map((product) => {
            return (
              <>
                <button onClick={clearCartAlert} className="clean">
                  Clean
                </button>
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
              </>
            );
          })
        )}
        <div className="totalContainer">
          <h4>Total: ${total}</h4>
          <Link to="/checkout">
            <button>Finish</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
