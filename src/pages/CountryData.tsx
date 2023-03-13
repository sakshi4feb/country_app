import React from 'react'
import {useLocation} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';


const CountryData = () => {
  
    const {state} = useLocation() 
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={state.name.common}
        subheader={state.capital}
      />
      <CardMedia
        component="img"
        height="200"
        image={state.flags.png}
        alt="flag"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        The country belongs to {state.region} region and {state.subregion} sub-region.
       Located at the {state.latlng[0]} N and {state.latlng[1]} W, this country has population of {state.population} and it gained 
       the independent , according to the CIA World Factbook.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>

    </Card>

    
 
    
  )
}

export default CountryData

