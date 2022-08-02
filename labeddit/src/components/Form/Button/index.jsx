import { useNavigate } from "react-router-dom";
import { goToCadastro, goToFeed } from "../../../routes/coordinator";
import { Primary, Secondary, Transparent } from "./styles";

export function ButtonPrimary({ name, type }) {
  return (
    <Primary variant="contained" type={type}>
      {name}
    </Primary>
  );
}

export function ButtonSecondary(props) {
  return (
    <Secondary {...props} variant="contained">
      {props.name}
    </Secondary>
  );
}

export function ButtonTransparent({ name, onClick }) {
  const navigate = useNavigate();
  return (
    <Transparent variant="contained" onClick={() => goToCadastro(navigate)}>
      {name}
    </Transparent>
  );
}
