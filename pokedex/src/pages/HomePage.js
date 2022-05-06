import { useNavigate } from "react-router-dom"
import PokemonCard from "../components/PokemonCard"
import { goToPokedexPage } from "../routes/coordinates"
import { Container } from "@mui/material"


const HomePage = () => {
    const navigate = useNavigate()

    const quantidadePokemon = Array.from({ length: 20 }, (_, index) => ++index)
    const displayPokemonCard = quantidadePokemon.map((i) => <PokemonCard key={i} index={i} />)

    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => goToPokedexPage(navigate)} >Pokedex</button>
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