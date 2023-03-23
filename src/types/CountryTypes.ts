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

export type ThemeContent = {
  mode: "light" | "dark"
  setMode:(c: "light" | "dark") => void
}

export type PaginationContentPage = {
  page: number
  setPage:(c: number) => void
}

export type PaginationContentRowsPerPage = {
  rowsPerPage: number
  setRowsPerPage:(c: number) => void
}

export type IsSearchContent =  {
  isSearch: boolean
  setIsSearch:(c: boolean) => void
}

export type Response = {
  status: number
  message: string;
  data : CountryT[];
};