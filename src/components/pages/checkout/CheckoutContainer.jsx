import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {
      let ordersCollection = collection(db, "orders");

      let order = {
        buyer: data,
        items: cart,
        total: total,
      };

      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.map((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string().required("").min(3),
      email: Yup.string().email().required(),
      phone: Yup.string().required().min(10),
    }),
  });

  return (
    <>
      <div>
        {orderId ? (
          <>
            <h1 className="endCheckout">
              Your purchase was successful. Order Number: <span>{orderId}</span>
            </h1>
            <Link to="/">
              <button className="returnToHome">return to home</button>
            </Link>
          </>
        ) : (
          <Checkout
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        )}
      </div>
    </>
  );
};

export default CheckoutContainer;
