import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchApartmentById, fetchApartments, createApartment } from "../actions/apartment";
import { Apartment } from '../../types/apartment';

interface ApartmentState {
  list: Array<Apartment>;
  total: number;
  isLoading: boolean;
}

interface FetchApartmentsPayload {
  apartments: Array<Apartment>;
  total: number;
}

const initialState: ApartmentState = {
  list: [],
  total: 0,
  isLoading: false,
};

const ApartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApartments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchApartments.fulfilled,
        (state, action: PayloadAction<FetchApartmentsPayload>) => {
          state.isLoading = false;
          state.total = action.payload.total;
          state.list = action.payload.apartments;
        }
      )
      .addCase(fetchApartments.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default ApartmentSlice.reducer;
