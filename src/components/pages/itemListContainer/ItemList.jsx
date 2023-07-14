import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="h1-container">
        <h1>SHOP</h1>
      </div>
      <div className="card-container">
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
