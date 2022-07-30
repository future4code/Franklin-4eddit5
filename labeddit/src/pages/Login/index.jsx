import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary, ButtonTransparent } from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import { Box, Image } from "./styles";
import { FormControl, Snackbar, Alert } from "@mui/material";
import { handleSubmitLogin } from "../../utils/handleSubmit";

export const Login = () => {
  const navigate = useNavigate();
  const [isFail, setIsFail] = useState(false);

  function handleClose() {
    setIsFail(false);
  }

  return (
    <Box>
      <Image src="/images/LabEddit.png" alt="LabEddit" />
      <FormControl
        component={"form"}
        onSubmit={(event) => handleSubmitLogin(event, setIsFail, navigate)}
      >
        <Input label={"Email"} name={"email"} type={"email"} required />
        <Input label={"Senha"} name={"password"} type={"password"} required />
        <ButtonPrimary name="Continuar" type={"submit"} />
      </FormControl>
      <ButtonTransparent name="Crie uma conta" />

      <Snackbar
        open={isFail}
        onClose={handleClose}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          E-mail ou senha inválida!
        </Alert>
      </Snackbar>
    </Box>
  );
};
