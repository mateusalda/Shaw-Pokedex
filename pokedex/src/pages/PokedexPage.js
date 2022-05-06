import { useNavigate } from "react-router-dom"
import React from "react"
import Header from "../../src/components/header/Header"


const PokedexPage = () => {
    const navigate = useNavigate()
    return (
        <Header title={"Pokedex"}/>
    )
}

export default PokedexPage