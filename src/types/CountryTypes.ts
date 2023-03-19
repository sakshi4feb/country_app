export interface Country {
  common: string;
}

export interface CountryT {
  languages:{[key: string]: string}
  population:number
  region:string
  flags:{png:string}
  name: {common:string};
}

export interface CountryState {
  countries: CountryT[];
  isLoading: boolean;
  message: string;
  isError: boolean;
  favouriteCountries: string[],
  searchedCountry: CountryT[],
  
}

export type Order = "asc" | "desc"

export type OrderBY = "name" | "population"