import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ elemento }) => {
  return (
    <div className="card">
      <h3>{elemento.title}</h3>
      <img src={elemento.img} alt="" />
      <p>{elemento.description}</p>
      <h4>${elemento.price}</h4>
      <Link to={`/itemDetail/${elemento.id}`}>
        <button>View Detail</button>
      </Link>
    </div>
  );
};

export default ProductCard;
