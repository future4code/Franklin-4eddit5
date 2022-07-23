import TextField from "@mui/material/TextField";

function Input({ label, type }) {
  return <TextField label={label} type={type} fullWidth />;
}

export default Input;
