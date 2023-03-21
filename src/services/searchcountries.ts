import axios from "axios";

import { CountryT } from "../types/CountryTypes";

const baseURL = "https://restcountries.com/v3.1/name/";

export const searchCountry = async (name : string) => {
  const response = await axios.get(`${baseURL}/${name}`);
  const data: CountryT[] = await response.data;
  return data;
};
