import { useNavigate } from "react-router-dom"
import PokemonCard from "../components/PokemonCard"
import { goToPokedexPage } from "../routes/coordinates"


const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => goToPokedexPage(navigate)} >Pokedex</button>
            <PokemonCard name='Mew' img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png' />
        </div>
    )
}

export default HomePage