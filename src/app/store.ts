import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../redux/counter/counterSlice'
import countryReducer from '../redux/country/countrySlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    countryR:countryReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
