import api from "../services/api";

export function handleSubmitLogin(event, setState, navigate) {
  event.preventDefault();

  const { title, message } = {
    title: event.target[0].value,
    message: event.target[2].value,
  };

  api
    .post("users/login", {
      title: title,
      message: message,
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

  const { title, message } = {
    title: event.target[0].value,
    message: event.target[2].value,
  };

  api
    .post("posts", {
      title: title,
      body: message,
    })
    .then(() => {
      api
        .get("posts")
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
