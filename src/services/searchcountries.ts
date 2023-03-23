import axios from "axios";

import { Response } from "../types/CountryTypes";

const baseURL = "https://restcountries.com/v3.1/name/";

export const searchCountry = async (name : string) => {
  const response : Response = await axios.get(`${baseURL}/${name}`);
  return response;
};
