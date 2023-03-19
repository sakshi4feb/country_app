import { useAppSelector } from "../app/hooks";
import React from "react";

const FavouriteCountries = () => {
  const { favouriteCountries } = useAppSelector(
    (state) => state.countryR
  );

  const renderCountries = favouriteCountries.map((country:string)=><li> {country}</li>)
  return (<>
  <h3 className="fav-countries">Favourite Countries:</h3>
  <div className="fav-country"><ul>{renderCountries}</ul></div>
  </>);
};

export default FavouriteCountries;
