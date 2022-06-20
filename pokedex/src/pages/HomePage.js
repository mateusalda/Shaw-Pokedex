import { useNavigate } from "react-router-dom"
import PokemonCard from "../components/PokemonCard/PokemonCard"
import { goToPokedexPage } from "../routes/coordinates"
import { Container } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"
import Header from "../../src/components/header/Header"



const HomePage = () => {
    const navigate = useNavigate()

    const quantidadePokemon = Array.from({ length: 151 }, (_, index) => ++index)
    const displayPokemonCard = quantidadePokemon.map((i) => <PokemonCard key={i} index={i} />)

    return (
        <div>
            <Header title={"PokeHome"}/>
            <Container sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '90%'
            }}>
                {displayPokemonCard}
            </Container>
        </div>
    )
}

export default HomePage