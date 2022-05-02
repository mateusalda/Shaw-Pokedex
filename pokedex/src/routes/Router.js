import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PokedexPage from '../pages/PokedexPage'
import PokemonDetailsPage from '../pages/PokemonDetailsPage'

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path='pokedex' element={<PokedexPage/>} />
                <Route path='details' element={<PokemonDetailsPage/>} />
            </Routes>
        </BrowserRouter>
    )
}