import axios from "axios"
import { useEffect, useState } from "react"


const useRequestData = ((URL, initialState, qntPokemons) => {
    const [data, setData] = useState (initialState)
    let pokemonsDetails = []

    const getPokemons =(() => {

        for(let i = 1; i <= qntPokemons; i++) {
            axios
            .get(`${URL}/${i}`)
            .then((res) => {
                pokemonsDetails.push(res.data)
                if(pokemonsDetails.length === qntPokemons){
                    pokemonsDetails.sort((a,b) => {
                        return a.id - b.id
                    })
                    setData(pokemonsDetails)
                }
            })
        }
    })

    useEffect(() => {
        getPokemons()
    }, [])
    
    return data
})

export default useRequestData