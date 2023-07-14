import ItemCount from "../../ItemCount";
import "./ProductDetail.css";

const ProductDetail = ({ productSelected, addToCart, productAmount }) => {
  const onAdd = (amount) => {
    let data = {
      ...productSelected,
      quantity: amount,
    };

    addToCart(data);

    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <img src={productSelected.img} />
        </div>
        <div className="infoContainer">
          <h3>{productSelected.title}</h3>
          <p>{productSelected.description}</p>
          <h4>${productSelected.price}</h4>

          <ItemCount
            stock={productSelected.stock}
            initial={productAmount}
            onAdd={onAdd}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
