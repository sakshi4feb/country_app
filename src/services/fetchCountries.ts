import axios from "axios"
import { Country } from "../types/CountryTypes"

const baseURL = 'https://restcountries.com/v3.1/all'

export const fetchCountry = async () => {
    // let response = await fetch(baseURL)
    // return response.json()
    let response = await axios.get(baseURL)
    let data: Country[] = await response.data
    return data
  }