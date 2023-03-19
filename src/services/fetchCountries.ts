import { CountryT } from "../types/CountryTypes";
import axios from "axios";

const baseURL = "https://restcountries.com/v3.1/all";

export const fetchCountry = async () => {
  let response = await axios.get(baseURL);
  let data: CountryT[] = await response.data;
  return data;
};
