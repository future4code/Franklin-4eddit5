import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFiMzYzNTgyLTQ2N2QtNGJkYy05YzdhLTE2MjM2YWU1MDNiMCIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY1ODc5ODU5NywiZXhwIjoxNjU4ODQxNzk3fQ.nfoO-PyprbdYISjQX3PSwy4E4xeMY9-Ll-veeXafQ3g'
    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
                alert('Ocorreu um erro, tente novamente')
            })
    }, [url])

    return (data)
}

export {useRequestData}