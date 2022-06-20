import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [details, setDetails] = useState({})

    const pokedexEntry = (pokemon) => {
        let updatedPokedex = [...pokedex]
        const index = updatedPokedex.findIndex(entry => entry.id === pokemon.id)

        index < 0 ? 
        updatedPokedex.push(pokemon) :
        updatedPokedex.splice(index, 1)

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