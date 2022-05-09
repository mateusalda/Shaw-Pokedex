import { Box, Card, CardContent, CardMedia, Grid, Paper, Stack, Typography } from "@mui/material"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useColorType } from "../hooks/useColorType"
import { goBack } from "../routes/coordinates"
import { useParams } from "react-router-dom"
import React from "react"
import Header from "../../src/components/header/Header";
import GlobalStateContext from "../GlobalState/GlobalStateContext";

const PokemonDetailsPage = () => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({})
    const [color1, color2, getTypes] = useColorType(pokemon.types)
    const params = useParams().id 
    const {states, setters} = useContext(GlobalStateContext)

    useEffect(() => {
        getPokemon()
    }, [])

    useEffect(() => {
        getTypes(pokemon.types)
    }, [pokemon])

    const getPokemon = () => {
        setPokemon(states.details)

        // axios.get(`https://pokeapi.co/api/v2/pokemon/6`)
        // .then(response => {
        //     setPokemon(response.data)
        // })
        // .catch(error => {
        //     console.log(error.response);
        // })
    }
    
    return (
        <div style={{
            height: '100vh',
            background: `linear-gradient(45deg, ${color1} 0 50%, ${color2} 50% 100%)`
        }}>
              <Header title={params}/>
            <Box sx={{ flexGrow: 1, pt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Card sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 300,
                            width: 300,
                            margin: 2
                        }}>
                            <CardMedia
                                component="img"
                                alt="pokemon"
                                height="280"
                                image={pokemon.sprites && pokemon.sprites.front_default}
                            />
                        </Card>
                        <Card sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 300,
                            width: 300,
                            margin: 2
                        }}>
                            <CardMedia
                                component="img"
                                alt="pokemon"
                                height="280"
                                image={pokemon.sprites && pokemon.sprites.back_default}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Card sx={{
                            display: 'flex',
                            alignContent: 'center',
                            height: '100%',
                            width: 400,
                            margin: 2
                        }}>
                            <CardContent sx={{ flex: '1 0 auto', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '80%' }}>
                                <Typography component="div" variant="h4">
                                    Stats
                                </Typography>
                                <Stack
                                    direction="column"
                                    justifyContent="space-evenly"
                                    spacing={2}
                                    sx={{ mx: 2, my: 4 }}
                                >
                                    {pokemon.stats && pokemon.stats.map((stat) => {
                                        return <Box key={stat.stat.name} sx={{ display: 'flex', justifyContent: 'space-between' }} >
                                            <Typography component='div' variant='h6'>{stat.stat.name}</Typography>
                                            <Typography component='div' variant='body1'>{stat.base_stat}</Typography>
                                        </Box>
                                    })}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Card sx={{
                            height: 150,
                            width: 300,
                            margin: 2
                        }}>
                            <CardContent sx={{ flex: '1 0 auto', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '80%' }}>
                                <Typography component="div" variant="h4">
                                    Tipo
                                </Typography>
                                <Stack
                                    direction="row"
                                    justifyContent="space-evenly"
                                    spacing={2}
                                    sx={{ mx: 2, my: 4 }}
                                >
                                    {pokemon.types && pokemon.types.map((type) => {
                                        return <Box key={type.type.name}>
                                            <Typography component='div' variant='body1'>{type.type.name}</Typography>
                                        </Box>
                                    })}
                                </Stack>
                            </CardContent>
                        </Card>
                        <Card sx={{
                            display: 'flex',
                            alignContent: 'center',
                            height: 450,
                            width: 300,
                            margin: 2
                        }}>
                            <CardContent sx={{ flex: '1 0 auto', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '80%' }}>
                                <Typography component="div" variant="h4">
                                    Habilidades
                                </Typography>
                                <Stack
                                    direction="column"
                                    justifyContent="space-evenly"
                                    spacing={2}
                                    sx={{ mx: 2, my: 4 }}
                                >
                                    {pokemon.moves && pokemon.moves.filter((move, i) => i < 8).map((move) => {
                                        return <Box key={move.move.name} sx={{ display: 'flex', justifyContent: 'space-between' }} >
                                            <Typography component='div' variant='body1'>{move.move.name}</Typography>
                                        </Box>
                                    })}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default PokemonDetailsPage
    
