import { Container } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import Header from "../../src/components/header/Header"
import PokemonCard from "../components/PokemonCard"
import GlobalStateContext from "../GlobalState/GlobalStateContext"


const PokedexPage = () => {
    const [pokedex, setPokedex] = useState([])
    const {states, setters} = useContext(GlobalStateContext)

    useEffect(() => {
        getPokedexEntries()
    }, [])

    const getPokedexEntries = () => {
        setPokedex(states.pokedex)
    }

    const displayPokemonCard = pokedex.map((entry) => <PokemonCard key={entry.id} index={entry.id} />)

    return (
        <div>
            <Header title={"Pokedex"} />
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

export default PokedexPage