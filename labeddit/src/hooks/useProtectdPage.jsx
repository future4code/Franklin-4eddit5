import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const useProtectedPage = () => {
    const navigate = useNavigate();

    useEffect( () => {
        const token = JSON.parse(localStorage.getItem("labeddit"))?.token;

        if(!token) {
            console.log("Não está logado!")
            navigate('/')
        }

    }, [navigate]);
    
}