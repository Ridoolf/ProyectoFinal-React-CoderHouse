import "./Checkout.css";
import { TextField, Button } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          color="secondary"
          label="name"
          variant="outlined"
          name="phone"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          color="secondary"
          label="email"
          variant="outlined"
          name="name"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          color="secondary"
          label="phone"
          variant="outlined"
          name="phone"
          onChange={handleChange}
        />
        <Button variant="outlined" type="submit">
          Buy
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
