import { Checkbox } from "@mui/material";
import React from "react";
import { ButtonPrimary } from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import { Box } from "../Login/styles";
import { Title } from "./styles";

export const Cadastro = () => {
  return (
    <Box>
      <Title>Olá, boas vindas ao LabEddit ;) </Title>
      <Input label="Nome" type="text" />
      <Input label="E-mail" type="email" />
      <Input label="Senha" type="password" />
      <div>
        Ao continuar você concorda com o nosso Contrato de usuário e nossa
        Politica de Privacidade.
      </div>
      <Checkbox /> Eu concordo em receber emails da Labeddit
      <ButtonPrimary name="Cadastrar" />
    </Box>
  );
};
