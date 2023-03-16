import { fetchCountry } from "../../services/fetchCountries";
import { Country } from "../../types/CountryTypes";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState: any = {
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
    const response: Country[] = await fetchCountry();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateFavourite: (state, action) => {
      const existingCountry = state.favouriteCountries.find(
        (country: any) => country === action.payload
      );
      if (!existingCountry) {
        state.favouriteCountries.push(action.payload);
        toast("A country just added to the favorite page!");
      } else {
        state.favouriteCountries.pop(action.payload);
        toast("A country just got removed from the favorite page!");
      }
    },
    searchCountry: (state, action) => {
      const existingCountry = state.countries.find(
        (country: any) => country.name.common === action.payload.name.common
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
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.message = "Fetch Successful";
          state.countries = state.countries.concat(action.payload);
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
