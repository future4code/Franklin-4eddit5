import { Alert, Checkbox, FormControl, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import { handleSubmitSignUp } from "../../utils/handleSubmit";
import { Box } from "../Login/styles";
import { Title } from "./styles";

export const Cadastro = () => {
  const navigate = useNavigate();
  const [isFail, setIsFail] = useState(false);

  function handleClose() {
    setIsFail(false);
  }

  return (
    <Box>
      <Title>Olá, boas vindas ao LabEddit ;) </Title>
      <FormControl
        fullWidth
        component={"form"}
        onSubmit={(event) => handleSubmitSignUp(event, setIsFail, navigate)}
      >
        <Input label="Nome" type="text" required />
        <Input label="E-mail" type="email" required />
        <Input label="Senha" type="password" required />
        <div>
          <Checkbox required /> Eu concordo em receber emails da Labeddit Ao
          continuar você concorda com o nosso Contrato de usuário e nossa
          Politica de Privacidade.
        </div>
        <ButtonPrimary name="Cadastrar" type={"submit"} />
      </FormControl>
      <Snackbar
        open={isFail}
        onClose={handleClose}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Algo deu errado, seu cadastro não foi concluído!
        </Alert>
      </Snackbar>
    </Box>
  );
};
