import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container, FormContainer, Form, Line, PostsContainer } from "./styles";
import TextArea from "../../components/Form/TextArea";
import { InputSecondary } from "../../components/Form/Input";
import { ButtonSecondary } from "../../components/Form/Button";
import { useProtectedPage } from "../../hooks/useProtectdPage";
import { handleSubmitPost } from "../../utils/handleSubmit";
import { Snackbar, Alert } from "@mui/material";
import api from "../../services/api";
import { PostCard } from "../../components/PostCard";

export const Feed = () => {
  useProtectedPage();

  const [posts, setPosts] = useState([]);
  const [isFail, setIsFail] = useState(false);
  const authorization = JSON.parse(localStorage.getItem("labeddit"))?.token

  function handleClose() {
    setIsFail(false);
  }

  useEffect(() => {
    api
      .get("posts", {
        headers: {
          Authorization: authorization,
        },
      })
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header LinkName={"Logout"} />
      <Container>
        <FormContainer>
          <Form
            component={"form"}
            onSubmit={(event) => handleSubmitPost(event, setIsFail, setPosts)}
          >
            <InputSecondary label={"Título do post"} type={"text"} required />
            <TextArea label={"Escreva seu Post..."} required />
            <ButtonSecondary name={"Postar"} type={"submit"} />
            <Line />
          </Form>
        </FormContainer>
        <PostsContainer>
          {posts?.map((post, index) => {
            return (
              <PostCard
                key={index}
                id={post.id}
                username={post.username}
                message={post.body}
                comment={post.commentCount}
              />
            );
          })}
        </PostsContainer>
        <Snackbar
          open={isFail}
          onClose={handleClose}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Algo deu errado, seu post não foi publicado!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};
