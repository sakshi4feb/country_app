import axios from "axios";

import { Response } from "../types/CountryTypes";

const baseURL = "https://restcountries.com/v3.1/all";

export const fetchCountry = async () => {
  const response : Response = await axios.get(baseURL);
  return response;
};
