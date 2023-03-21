import React from "react";

import { useAppSelector } from "../app/hooks";

const FavouriteCountries = () => {
  const { favouriteCountries } = useAppSelector(
    (state) => state.countryR
  );
  const renderCountries = favouriteCountries.map((country:string)=><li> {country}</li>)
  return (<div className="fav-country" >
  {favouriteCountries.length ?
  <div className="fav-country">Favourite Countries:<ul>{renderCountries}</ul></div> 
  : <h3 text-align = "center">There are no favourite countries</h3>}
  </div>);
};

export default FavouriteCountries;
