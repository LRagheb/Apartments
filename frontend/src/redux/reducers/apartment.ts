import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchApartmentById, fetchApartments, createApartment } from "../actions/apartment";
import { Apartment } from '../../types/apartment';

interface ApartmentState {
  list: Array<Apartment>;
  currentApartment: Apartment | null;
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
  currentApartment: null,
};

const ApartmentSlice = createSlice({
  name: "apartment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchApartments reducers
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
      })
      // fetch apartment reducers
      .addCase(fetchApartmentById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchApartmentById.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.currentApartment = action.payload.apartment;
        }
      )
      .addCase(fetchApartmentById.rejected, (state) => {
        state.isLoading = false;
      })
      // create apartment reducers
      .addCase(createApartment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        createApartment.fulfilled,
        (state, action: PayloadAction<Apartment>) => {
          state.isLoading = false;
          state.list.push(action.payload);
        }
      )
      .addCase(createApartment.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default ApartmentSlice.reducer;
