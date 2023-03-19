import { fetchCountry } from "../../services/fetchCountries";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { CountryState } from "../../types/CountryTypes";
import { CountryT } from "../../types/CountryTypes";

const initialState: CountryState = {
  countries: [],
  isLoading: false,
  message: "",
  isError: false,
  favouriteCountries: [],
  searchedCountry: [],
};

export const fetchCountries = createAsyncThunk(
  "country/fetchCountry",
  async (_, thunkAPI) => {
    const response: CountryT [] = await fetchCountry();
    return response;
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateFavourite: (state, action:PayloadAction<string>) => {
      let existingCountry = state.favouriteCountries.find(
        (country: string) => country === action.payload
      );
      if (!existingCountry) {
        state.favouriteCountries.push(action.payload);
        toast("A country just added to the favorite page!");
      } else {
        state.favouriteCountries=state.favouriteCountries.filter((country:string)=>country!==action.payload)
        toast("A country just got removed from the favorite page!");
      }
    },
    searchCountry: (state, action:PayloadAction<CountryT>) => {
      const existingCountry = state.countries.find(
        (country: CountryT) => country.name.common === action.payload.name.common
      );
      if (existingCountry) {
        state.searchedCountry = [];
        state.searchedCountry.push(action.payload);
      }
    },
  },

  extraReducers: (builder) => {
    //fetch countries
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCountries.fulfilled,
        (state, action: PayloadAction<CountryT[]>) => {
          state.isLoading = false;
          state.message = "Fetch Successful";
          state.countries = action.payload;
          
        }
      )
      .addCase(fetchCountries.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.message = "Fetch Failed";
        state.countries = [];
      });
  },
});

export const { updateFavourite, searchCountry } = countrySlice.actions;
export default countrySlice.reducer;
