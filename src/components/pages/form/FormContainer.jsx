import Form from "./Form";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (data) => {
      console.log("El form se envio");
      console.log(data);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required()
        .min(3, "El campo debe tener al menos 3 caracteres"),
      email: Yup.string().email(),
    }),
  });

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />
    </>
  );
};

export default FormContainer;
