import React from "react";
import Header from "../../components/Header";
import { Container, FormContainer, Form, Line, PostsContainer } from "./styles";
import TextArea from "../../components/Form/TextArea";
import { ButtonSecondary } from "../../components/Form/Button";

export const Feed = () => {
  return (
    <Container>
      <Header LinkName={"Logout"} />
      <FormContainer>
        <Form>
          <TextArea label={"Escreva seu Post..."} />
          <ButtonSecondary name={"Postar"} />
          <Line />
        </Form>
      </FormContainer>
      <PostsContainer>
        <div style={{ background: "grey", textAlign: "center" }}>PostCard</div>
        <div style={{ background: "grey", textAlign: "center" }}>PostCard</div>
        <div style={{ background: "grey", textAlign: "center" }}>PostCard</div>
      </PostsContainer>
    </Container>
  );
};
