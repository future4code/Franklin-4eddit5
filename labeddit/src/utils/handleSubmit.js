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
