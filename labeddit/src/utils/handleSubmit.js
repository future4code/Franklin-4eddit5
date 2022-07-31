import api from "../services/api";

export function handleSubmitLogin(event, setState, navigate) {
  event.preventDefault();

  const { email, password } = {
    email: event.target[0].value,
    password: event.target[2].value,
  };

  api
    .post("users/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      localStorage.setItem(
        "labeddit",
        JSON.stringify({ token: response.data.token })
      );
      navigate("/feed");
    })
    .catch((error) => {
      setState(true);
      console.error(error);
    });
}

export function handleSubmitPost(event, setIsFail, setPosts) {
  event.preventDefault();

  const authorization = JSON.parse(localStorage.getItem("labeddit"))?.token;
  const { title, message } = {
    title: event.target[0].value,
    message: event.target[2].value,
  };

  api
    .post(
      "posts",
      {
        title: title,
        body: message,
      },
      {
        headers: {
          Authorization: authorization,
        },
      }
    )
    .then(() => {
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
    })
    .catch((error) => {
      setIsFail(true);
      console.error(error);
    });
  event.target.reset();
}

export function handleSubmitComment(event, setIsFail, setComments, id) {
  event.preventDefault();

  const authorization = JSON.parse(localStorage.getItem("labeddit"))?.token;
  const { message } = {
    message: event.target[0].value,
  };

  api
    .post(
      `posts/${id}/comments`,
      {
        body: message,
      },
      {
        headers: {
          Authorization: authorization,
        },
      }
    )
    .then(() => {
      api
        .get(`posts/${id}/comments`, {
          headers: {
            Authorization: authorization,
          },
        })
        .then((response) => {
          setComments(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      setIsFail(true);
      console.error(error);
    });
  event.target.reset();
}
