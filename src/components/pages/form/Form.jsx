import { TextField } from "@mui/material";
import "./Form.css";

const Form = ({ handleSubmit, handleChange, errors }) => {
  return (
    <>
      <div className="formContainer">
        <h2>CONTACT</h2>

        <form onSubmit={handleSubmit} className="form">
          <TextField
            margin="normal"
            color="secondary"
            label="name"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />
          <TextField
            margin="normal"
            color="secondary"
            label="email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            color="secondary"
            margin="normal"
            id="outlined-textarea"
            label="Message"
            multiline
            maxRows={4}
          />
          <button className="sendButton" type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
