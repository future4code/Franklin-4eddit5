import React from "react";
// import { useNavigate } from "react-router-dom";
import { ButtonPrimary, ButtonTransparent } from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import { Box, Image } from "./styles";
// import { goToCadastro, goToFeed, goToPosts } from "../../routes/coordinator";
import useForm from '../../hooks/useForm'

export const Login = () => {
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: ""
  })

  const onSubmitLogin = (event) => {
    event.preventDefault()
    console.log(form)
    cleanFields()
  }

  return (
    <Box>
      <Image src="/images/LabEddit.png" alt="LabEddit" />
      <form onSubmit={onSubmitLogin}>
        <Input
          label={"Email"}
          name={"email"}
          type={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <Input
          label={"Senha"}
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={onChange}
          required
        />
        <ButtonPrimary
          name="Continuar"
          type={"submit"}
        />
      </form>
      <ButtonTransparent name="Crie uma conta" />
    </Box>
  );
};
