import { useAppSelector , useAppDispatch} from "../app/hooks";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import React from "react";
import { useLocation } from "react-router-dom";
import { updateFavourite } from "../redux/country/countrySlice";

const CountryData = () => {
  const { favouriteCountries } = useAppSelector(
    (state) => state.countryR
  );
  const { state } = useLocation();
  const dispatch = useAppDispatch();
  const isFavourite = (countryName : string)=>(favouriteCountries.includes(countryName))
  
  return (
    <Card sx={{ maxWidth: 345, m:10 , ml:70}}>
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
          The country belongs to {state.region} region and {state.subregion}{" "}
          sub-region. Located at the {state.latlng[0]} N and {state.latlng[1]}{" "}
          W, this country has population of {state.population} and it gained the
          independent , according to the CIA World Factbook.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       <IconButton color={isFavourite(state.name.common) ? "secondary" : "primary"}
            onClick={() => dispatch(updateFavourite(state.name.common))}>
            <FavoriteIcon  />
       </IconButton>
       
      </CardActions>
    </Card>
  );
};

export default CountryData;
