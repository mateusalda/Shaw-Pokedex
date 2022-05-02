import { useNavigate } from "react-router-dom"
import { goBack } from "../routes/coordinates"


const PokemonDetailsPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Detalhes</h1>
            <button onClick={() => goBack(navigate)} >Voltar</button>
        </div>
    )
}

export default PokemonDetailsPage