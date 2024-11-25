import getApiUrl from "../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApartments = createAsyncThunk(
  "apartments/list",
  async () => {
    const { data } = await axios.get(`${getApiUrl()}/apartments`);
    return data;
  }
);

export const fetchApartmentById = createAsyncThunk(
  "apartments/getById",
  async () => {
    const { data } = await axios.get(`${getApiUrl()}/apartments`);
    return data;
  }
);

export const createApartment = createAsyncThunk(
  "apartments/add",
  async () => {
    const { data } = await axios.post(`${getApiUrl()}/apartments`);
    return data;
  }
);
