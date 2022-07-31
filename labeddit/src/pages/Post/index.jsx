import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostCard } from "../../components/PostCard";
import Header from "../../components/Header";
import api from "../../services/api";
import {
  Container,
  FormContainer,
  Form,
  Line,
  CommentsContainer,
} from "./styles";
import TextArea from "../../components/Form/TextArea";
import { ButtonSecondary } from "../../components/Form/Button";
import { handleSubmitComment } from "../../utils/handleSubmit";
import { Alert, Snackbar } from "@mui/material";

export const Post = () => {
  const { id } = useParams();
  const [isFail, setIsFail] = useState(false);
  const [comments, setComments] = useState([]);
  const { token, post } = JSON.parse(localStorage.getItem("labeddit"));

  function handleClose() {
    setIsFail(false);
  }

  useEffect(() => {
    api
      .get(`posts/${id}/comments`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setComments(response.data);
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
          <PostCard
            id={post.id}
            username={post.username}
            message={post.message}
            comment={post.comment}
          />

          <Form
            component={"form"}
            onSubmit={(event) =>
              handleSubmitComment(event, setIsFail, setComments, post.id)
            }
          >
            <TextArea label={"Escreva seu Post..."} required />
            <ButtonSecondary name={"Postar"} type={"submit"} />
            <Line />
          </Form>
        </FormContainer>
        <CommentsContainer>
          {comments?.map((post, index) => {
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
        </CommentsContainer>
        <Snackbar
          open={isFail}
          onClose={handleClose}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Algo deu errado, seu comentário não foi publicado!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};
