import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cartContainer">
      <p className="cont">0</p>
      <BsFillCartCheckFill
        className="cart"
        color="#fff"
        size="40px"
        cursor="pointer"
      />
    </div>
  );
};

export default CartWidget;
