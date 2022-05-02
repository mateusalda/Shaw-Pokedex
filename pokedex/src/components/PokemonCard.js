import { Avatar, Card } from "@mui/material"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const PokemonCard = (props) => {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                component="img"
                alt="pokemon"
                height="200"
                image={props.img}
            />
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
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