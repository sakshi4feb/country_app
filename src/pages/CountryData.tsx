/* eslint-disable no-restricted-globals */
import React from "react";
import { useLocation , Link } from "react-router-dom";

import { useAppSelector , useAppDispatch} from "../app/hooks";
import { updateFavourite } from "../redux/country/countrySlice";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue} from "@mui/material/colors";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PlaceIcon from '@mui/icons-material/Place';

import { ToastContainer } from "react-toastify";
import Box from "@mui/material/Box";

const CountryData = () => {
  const { favouriteCountries } = useAppSelector(
    (state) => state.countryR
  );
  const { state } = useLocation();
  const dispatch = useAppDispatch();
  const isFavourite = (countryName : string)=>(favouriteCountries.includes(countryName))

   return (
    <Box  sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , minHeight:580}}>
    <Card sx={{  maxWidth: 345,  bgcolor: '#e65100' , boxShadow: 1 , mt:8 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="country">
           {`${state.name.common}`.charAt(0)}
          </Avatar>
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
      <Link to={"/countries"}>
          <ArrowBackIosIcon />
          </Link>
       <IconButton color={isFavourite(state.name.common) ? "secondary" : "primary"}
            onClick={() => dispatch(updateFavourite(state.name.common))}>
            <FavoriteIcon  />
       </IconButton>
      <Link to={state.maps.googleMaps} target="_blank">
          <IconButton  sx={{marginLeft: 28}} >
              <PlaceIcon />
          </IconButton>
      </Link>
      </CardActions>
      <ToastContainer />
    </Card>
    </Box>
  );
};

export default CountryData;
