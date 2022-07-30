import axios from "axios"
import { BASE_URL } from "../constantes/urls"
import { goToFeed } from "../routes/coordinator"



export const logar = (body) => {
    axios.post(`${BASE_URL}/users/login`, body, {
        headers:{
          'Content-Type': 'application/json'
        } 
    })
    .then((res) => {
        console.log("Deu certo", res.token)
        localStorage.setItem("token", res.token)
    })
    .catch((err) => {
        console.log("Deu erro", err.data)
    })
}

export const cadastrar = (body, cleanFields, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body, {
        headers:{
          'Content-Type': 'application/json'
        } 
    })
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        cleanFields()
        setIsLoading(false)
        goToFeed(navigate)
    })
    .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message)
    })
}

const api = axios.create({
    headers: {
        Authorization: JSON.parse(localStorage.getItem("labeddit"))?.token,
    },
  baseURL: "https://labeddit-2.herokuapp.com/",
});

export default api;
