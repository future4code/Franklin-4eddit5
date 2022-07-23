import { Primary, Secondary, Transparent } from "./styles";

export function ButtonPrimary({ name, onClick }) {
  return (
    <Primary variant="contained" onClick={onClick}>
      {name}
    </Primary>
  );
}

export function ButtonSecondary({ name, onClick }) {
  return (
    <Secondary variant="contained" onClick={onClick}>
      {name}
    </Secondary>
  );
}

export function ButtonTransparent({ name, onClick }) {
  return (
    <Transparent variant="contained" onClick={onClick}>
      {name}
    </Transparent>
  );
}
