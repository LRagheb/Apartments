import { configureStore } from "@reduxjs/toolkit";
import apartmentReducer from "./reducers/apartment";

export const store = configureStore({
  reducer: {
    apartment: apartmentReducer,
  },
});
console.log(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
