import React, {  useState } from "react"
import {BASE_URL} from "../constants/constants"
import GlobalStateContext from "./GlobalStateContext"
import useRequestData from "../hooks/useRequestData"

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState ([])

    const pokemons = useRequestData(BASE_URL, [], 151)


        return(
            <GlobalStateContext.Provider value={{pokedex, setPokedex, pokemons}}>
                {props.children}
            </GlobalStateContext.Provider>
        )
}  

export default GlobalState