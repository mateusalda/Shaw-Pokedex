import { useNavigate } from "react-router-dom"
import React from "react"
import Header from "../../src/components/header/Header"



const HomePage = () => {
    const navigate = useNavigate()
    return (
        <Header title={"PokeHome"}/>
    )
}

export default HomePage