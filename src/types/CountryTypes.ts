export interface Country {
  common: string;
}

export interface CountryT {
  // userId: number
  // id: number
  // title: string
  // completed: boolean
  name: Country;
}

export interface CountryState {
  countries: CountryT[];
  isLoading: boolean;
  isError: boolean;
  message: string;
}
