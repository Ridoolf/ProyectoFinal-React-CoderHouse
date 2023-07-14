import { Link } from "react-router-dom";
import CartWidgetContainer from "../../common/cartWidget/CartWidgetContainer";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navBarContainer">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dy3natzfk/image/upload/v1684853084/logo_mbelxq.png"
            alt="logo Ecommerce"
          />
        </Link>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <Link to="/category/women">Women</Link>
          </li>
          <li>
            <Link to="/category/men">Men</Link>
          </li>
        </ul>

        <Link to="/form">
          <p className="about">CONTACT</p>
        </Link>
      </div>
      <div className="line"></div>
      <Link to="/cart">
        <div className="cart">
          <CartWidgetContainer />
        </div>
      </Link>
    </>
  );
};

export default Navbar;
