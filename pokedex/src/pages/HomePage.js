import { useNavigate } from "react-router-dom"
import PokemonCard from "../components/PokemonCard"
import { goToPokedexPage } from "../routes/coordinates"
import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"
import Header from "../../src/components/header/Header"



const HomePage = () => {
    const navigate = useNavigate()

    const quantidadePokemon = Array.from({ length: 20 }, (_, index) => ++index)
    const displayPokemonCard = quantidadePokemon.map((i) => <PokemonCard key={i} index={i} />)

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => goToPokedexPage(navigate)} >Pokedex</button>
            {displayPokemonCard}
        </div>
        <Header title={"PokeHome"}/>
    )
}

export default HomePage