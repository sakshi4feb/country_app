import { useAppSelector } from "../app/hooks";
import React from "react";

const FavouriteCountries = () => {
  const { favouriteCountries } = useAppSelector(
    (state: { countryR: any }) => state.countryR
  );
  return <div>{favouriteCountries}</div>;
};

export default FavouriteCountries;
