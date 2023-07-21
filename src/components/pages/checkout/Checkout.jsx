import "./Checkout.css";
import { TextField, Button } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="checkoutContainer">
      <h1 className="titleC">CheckOut</h1>
      <p className="pleaseText">Please complete the following form with your information.</p>
      <form onSubmit={handleSubmit}>
        <TextField
          color="secondary"
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
        />
        <TextField
          color="secondary"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          color="secondary"
          label="Phone"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          helperText={errors.phone}
          error={errors.phone ? true : false}
        />
        <Button variant="outlined" type="submit" className="buttonMui">
          Buy
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
