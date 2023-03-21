import { CountryT } from "../types/CountryTypes";
import axios from "axios";

const baseURL = "https://restcountries.com/v3.1/name/";

export const searchCountry = async (name : string) => {
  let response = await axios.get(`${baseURL}/${name}`);
  let data: CountryT[] = await response.data;
  return data;
};
