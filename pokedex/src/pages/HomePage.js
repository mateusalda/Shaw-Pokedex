import { useNavigate } from "react-router-dom"
import { goToPokedexPage } from "../routes/coordinates"


const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => goToPokedexPage(navigate)} >Pokedex</button>
        </div>
    )
}

export default HomePage