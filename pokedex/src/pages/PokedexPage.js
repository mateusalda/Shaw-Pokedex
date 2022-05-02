import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../routes/coordinates"


const PokedexPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Pokedex</h1>
            <button onClick={() => goToHomePage(navigate)} >Home</button>
        </div>
    )
}

export default PokedexPage