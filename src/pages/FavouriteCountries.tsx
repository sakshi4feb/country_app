import React from 'react'
import { useAppSelector } from '../app/hooks'

const FavouriteCountries = () => {
const {favouriteCountries} = useAppSelector((state: { countryR: any }) => state.countryR)
  return (
    <div>{favouriteCountries}</div>
  )
}

export default FavouriteCountries