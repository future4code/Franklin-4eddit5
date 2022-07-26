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
      <ButtonPrimary name="Cadastrar" />
    </Box>
  );
};
