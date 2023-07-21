import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

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
          <h1 className="endCheckout">
            Su compra fue exitosa. Numero de Orden: {orderId}
          </h1>
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
