import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";

const CartWidget = ({ totalItems }) => {
  return (
    <div className="cartContainer">
      <p className="cont">{totalItems}</p>
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
