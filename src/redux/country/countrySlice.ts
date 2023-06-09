import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCountry } from "../../services/fetchCountries";
import { searchCountry } from "../../services/searchcountries";
import { CountryState } from "../../types/CountryTypes";
import { CountryT } from "../../types/CountryTypes";
import { Response } from "../../types/CountryTypes";

import { toast } from "react-toastify";

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
    try{
    const response:Response = await fetchCountry();
    return response.data;
    }
    catch(error){
      return thunkAPI.rejectWithValue({message: "Data could not be fetched!"});
    }
  });

export const searchCountries = createAsyncThunk(
  "country/searchCountry",
  async (value : string, thunkAPI) => {
    try{
    const response: Response = await searchCountry(value);
    return response.data;
    }
    catch(error){
      return thunkAPI.rejectWithValue({message: "No Country found with this name! Please try another."});
  }
});

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    updateFavourite: (state, action:PayloadAction<string>) => {
      const existingCountry = state.favouriteCountries.find(
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
          state.isError=false
          state.isLoading = false;
          state.message = "Fetch Successful";
          state.countries = action.payload;
        }
      )
      .addCase(fetchCountries.rejected,
        (state,action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.countries = [];
      });

      //searchCountries
      builder
      .addCase(searchCountries.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(
        searchCountries.fulfilled,
        (state, action: PayloadAction<CountryT[]>) => {
          state.isLoading = false;
          state.isError=false;
          state.message = "Search Successful";
          state.searchedCountry = action.payload;
        }
      )
      .addCase(searchCountries.rejected, (state , action:any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
      });
  },
});

export const { updateFavourite } = countrySlice.actions;
export default countrySlice.reducer;
