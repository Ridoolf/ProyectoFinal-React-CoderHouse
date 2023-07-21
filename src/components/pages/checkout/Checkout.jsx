import "./Checkout.css";
import { TextField, Button } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="checkoutContainer">
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          color="secondary"
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
        />
        <TextField
          margin="normal"
          color="secondary"
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          margin="normal"
          color="secondary"
          label="Phone"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          helperText={errors.phone}
          error={errors.phone ? true : false}
        />
        <Button variant="outlined" type="submit">
          Buy
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
