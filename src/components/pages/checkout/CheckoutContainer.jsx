import { useFormik } from "formik";
import Checkout from "./Checkout";
import * as Yup from "yup";

const CheckoutContainer = () => {
  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {},
  });

  return (
    <>
      <div>
        <Checkout handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default CheckoutContainer;
