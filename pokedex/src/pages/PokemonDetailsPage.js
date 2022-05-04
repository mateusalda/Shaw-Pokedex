import { useParams } from "react-router-dom"
import React from "react"
import Header from "../../src/components/header/Header";


const PokemonDetailsPage = () => {
    const params = useParams().id 
    return (
        
        <Header title={params}/>
    )

}
export default PokemonDetailsPage
    
