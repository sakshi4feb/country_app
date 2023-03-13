import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { fetchCountry } from '../../services/fetchCountries'
import { CountryState, CountryT, Country } from '../../types/CountryTypes'
import axios from "axios"


const initialState: any = {
  countries:[],
  isLoading: false,
  message:'',
  isError: false,
  favouriteCountries:[],
  searchedCountry:[],
  
 }

export const fetchCountries = createAsyncThunk(
    'country/fetchCountry',
    async (_,thunkAPI) => {
      const response : Country[] = await fetchCountry()
      // The value we return becomes the `fulfilled` action payload
      return response
    }
  )

  export const countrySlice = createSlice({
    name: 'country',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateFavourite: (state, action) => {
      const existingCountry = state.countries.find((country:any) =>country.name.common === action.payload);
      if (existingCountry) {
       state.favouriteCountries.push(action.payload)
      }
    },
    searchCountry:(state,action) => {
      console.log(action.payload)
      const existingCountry=state.countries.find((country:any)=>country.name.common===action.payload.name.common)
       if (existingCountry) {
          state.searchedCountry=[];
           state.searchedCountry.push(action.payload)
           

       }
    }
     },

    extraReducers: (builder) => {
        //fetch countries
        builder
        .addCase(fetchCountries.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchCountries.fulfilled, (state, action:PayloadAction<any>) => {
          state.isLoading = false;
          state.message = "Fetch Successful";
          //console.log(action.payload)
          state.countries =  state.countries.concat(action.payload)
        })
        .addCase(fetchCountries.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
          state.message = "Fetch Failed";
          state.countries = [];
        });
    },
  });
  
  export const { updateFavourite , searchCountry} = countrySlice.actions;
  export default countrySlice.reducer;