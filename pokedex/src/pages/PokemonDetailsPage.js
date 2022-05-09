import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack, Typography } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useColorType } from "../hooks/useColorType"
import { useParams } from "react-router-dom"
import React from "react"
import Header from "../../src/components/header/Header";
import GlobalStateContext from "../GlobalState/GlobalStateContext";

const PokemonDetailsPage = () => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({})
    const [color1, color2, colors, getTypes] = useColorType(pokemon.types)
    const {states, setters} = useContext(GlobalStateContext)
    const [addedToPokedex, setAddedToPokedex] = useState(states.pokedex.some(entry => entry.id === states.details.id))
    const params = useParams().id

    useEffect(() => {
        getPokemon()
    }, [])

    useEffect(() => {
        getTypes(pokemon.types)
    }, [pokemon])

    const getPokemon = () => {
        setPokemon(states.details)
    }

    const entryPokedexData = () => {
        setters.pokedexEntry(pokemon)
        setAddedToPokedex(!addedToPokedex)
    }

    return (
        <div style={{
            height: '100vh',
            background: `linear-gradient(45deg, ${color1} 0 50%, ${color2} 50% 100%)`
        }}>
            <Header title={params} />
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
                            height: 450,
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
                        <Card sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                            height: 150,
                            width: 400,
                            margin: 2
                        }}>
                            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button size="large" startIcon={<Avatar src="https://img.icons8.com/color/344/pokedex.png" sx={{height: 100, width: 100, mr: 2}} />} sx={{ filter: addedToPokedex ? 'grayscale(0%)' : 'grayscale(100%)' }} onClick={() => entryPokedexData()} >
                                    {addedToPokedex ? 'Remover da Pokedex' : 'Adicionar à Pokedex'}
                                </Button>
                            </CardActions>
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
                                    {pokemon.types && pokemon.types.map((type, i) => {
                                        return <Box key={type.type.name} sx={{ borderRadius: '12pt', boxShadow: `0 0 0 4pt ${colors[i]}`}}>
                                            <Typography component='div' variant='body1' sx={{mx: 1, my: '3px'}} >{type.type.name}</Typography>
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

