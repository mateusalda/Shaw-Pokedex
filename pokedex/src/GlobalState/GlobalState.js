import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [details, setDetails] = useState({})

    const pokedexEntry = (pokemon) => {
        let index
        let updatedPokedex = [...pokedex]

        updatedPokedex.some(entry => entry.id === pokemon.id) ? 
        updatedPokedex.splice(updatedPokedex.indexOf(pokemon), 1) :
        updatedPokedex.push(pokemon)

        updatedPokedex.sort((a, b) => a.id - b.id)

        setPokedex(updatedPokedex)
    }

    const states = { pokedex, details }
    const setters = { pokedexEntry, setDetails }

    return (
        <GlobalStateContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState