import React from "react";

import { useAppSelector } from "../app/hooks";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const FavouriteCountries = () => {
  const { favouriteCountries } = useAppSelector(
    (state) => state.countryR
  );
  const renderCountries = favouriteCountries.map((country:string)=><li> {country}</li>)
  return (
  <Box sx={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , minHeight:595 }}>
  {favouriteCountries.length ?
  <div className="fav-country">Favourite Countries:<ul>{renderCountries}</ul></div> 
  : <h3 text-align = "center">There are no favourite countries</h3>}

  <Link to={"/countries"}>
      <Button variant="contained" color="success" sx={{p:3}}>
        Back to countries!
      </Button>
  </Link>
  </Box>
  );
};

export default FavouriteCountries;
