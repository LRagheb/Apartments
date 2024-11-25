import getApiUrl from "../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApartmentFormData } from "@/types/apartment";

export const fetchApartments = createAsyncThunk(
  "apartments/list",
  async () => {
    const { data } = await axios.get(`${getApiUrl()}/apartments`);
    return data;
  }
);

export const fetchApartmentById = createAsyncThunk(
  "apartments/getById",
  async (id: string | string[]) => {
    const { data } = await axios.get(`${getApiUrl()}/apartments/${id}`);
    return data;
  }
);

export const createApartment = createAsyncThunk(
  "apartments/add",
  async (formData: ApartmentFormData) => {
    const { data } = await axios.post(`${getApiUrl()}/apartments`, formData);
    return data;
  }
);
