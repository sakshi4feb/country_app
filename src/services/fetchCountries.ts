import axios from "axios";

import { CountryT } from "../types/CountryTypes";

const baseURL = "https://restcountries.com/v3.1/all";

export const fetchCountry = async () => {
  const response = await axios.get(baseURL);
  const data: CountryT[] = await response.data;
  return data;
};
