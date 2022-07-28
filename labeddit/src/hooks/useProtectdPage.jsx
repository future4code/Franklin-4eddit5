import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const useProtectedPage = () => {
    const navigate = useNavigate();

    useEffect( () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFiMzYzNTgyLTQ2N2QtNGJkYy05YzdhLTE2MjM2YWU1MDNiMCIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY1ODc5ODU5NywiZXhwIjoxNjU4ODQxNzk3fQ.nfoO-PyprbdYISjQX3PSwy4E4xeMY9-Ll-veeXafQ3g' 

        if(token === null) {
            console.log("Não está logado!")
            navigate('/')
        }

    }, [navigate]);
    
}