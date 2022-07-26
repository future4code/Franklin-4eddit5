import { Container } from "@mui/material";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { ButtonPrimary, ButtonTransparent } from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import { Box, Image } from "./styles";
// import { goToCadastro, goToFeed, goToPosts } from "../../routes/coordinator";

export const Login = () => {
  return (
    <Box>
      <Image src="/images/LabEddit.png" alt="LabEddit" />
      <Input label="Nome" type="text" />
      <Input label="Senha" type="password" />
      <ButtonPrimary name="Continuar" />
      <ButtonTransparent name="Crie uma conta" />
    </Box>
  );
};
