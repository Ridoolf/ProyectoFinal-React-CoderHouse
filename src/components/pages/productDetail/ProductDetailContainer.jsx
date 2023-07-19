import { useState, useEffect, useContext } from "react";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Swal from "sweetalert2";

import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ProductDetailContainer = () => {
  const [productSelected, setProductSelected] = useState({});

  const { addToCart, getTotalQuantity } = useContext(CartContext);

  const { id } = useParams();

  const productAmount = getTotalQuantity(id);

  const onAdd = (amount) => {
    let data = {
      ...productSelected,
      quantity: amount,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Product added successfully",
      showConfirmButton: false,
      timer: 1500,
    });

    console.log(data);
  };

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setProductSelected({ ...res.data(), id: res.id });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {productSelected.price ? (
        <ProductDetail
          productSelected={productSelected}
          addToCart={addToCart}
          productAmount={productAmount}
          onAdd={onAdd}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "250px",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default ProductDetailContainer;
