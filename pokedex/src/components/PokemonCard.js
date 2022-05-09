import { Avatar, Card } from "@mui/material"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToPokemonDetailsPage } from "../routes/coordinates";
import GlobalStateContext from "../GlobalState/GlobalStateContext";


const PokemonCard = (props) => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({})
    const [addedToPokedex, setAddedToPokedex] = useState(false)
    const {states, setters} = useContext(GlobalStateContext)

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.index}`)
        .then(response => {
            setPokemon(response.data)
            setAddedToPokedex(states.pokedex.some(entry => entry.id === response.data.id))
        })
        .catch(error => {
            console.log(error.response);
        })
    }

    const selectPokemonDetails = () => {
        setters.setDetails(pokemon)
        goToPokemonDetailsPage(navigate)
    }

    const entryPokedexData = () => {
        setters.pokedexEntry(pokemon)
        setAddedToPokedex(!addedToPokedex)
    }

    return (
        <Card sx={{ maxWidth: 250, m: 2 }}>
            <CardMedia
                component="img"
                alt="pokemon"
                height="200"
                image={pokemon.sprites && pokemon.sprites.front_default}
            />
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {pokemon && pokemon.name}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button size="small" startIcon={ <Avatar src="https://img.icons8.com/color/344/pokedex.png" />} sx={{filter: addedToPokedex ? 'grayscale(0%)' : 'grayscale(100%)'}} onClick={() => entryPokedexData()} ></Button>
                <Button size="small" startIcon={ <Avatar src="https://img.icons8.com/color/344/details.png" />} onClick={() => selectPokemonDetails()} ></Button>
            </CardActions>
        </Card>
    )
}

export default PokemonCard