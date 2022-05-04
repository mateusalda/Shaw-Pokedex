import { Avatar, Card } from "@mui/material"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useEffect, useState } from "react";


const PokemonCard = (props) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        getPokemon()
    }, [])

    const getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.index}`)
        .then(response => {
            setPokemon(response.data)
        })
        .catch(error => {
            console.log(error.response);
        })
    }

    return (
        <Card sx={{ maxWidth: 250 }}>
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
                <Button size="small" startIcon={ <Avatar src="https://img.icons8.com/color/344/pokedex.png" />} ></Button>
                <Button size="small" startIcon={ <Avatar src="https://img.icons8.com/color/344/details.png" />} ></Button>
            </CardActions>
        </Card>
    )
}

export default PokemonCard