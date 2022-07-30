// import TextField from "@mui/material/TextField";
import { InputText, InputTextSecondary } from "./styles";

function Input(props) {
  return <InputText {...props} fullWidth />;
}

export function InputSecondary(props) {
  return <InputTextSecondary {...props} fullWidth />;
}

export default Input;
