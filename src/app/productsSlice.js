import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await axios.get("https://api.npoint.io/db1e3d62c4d7210ef559");
    return res.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { data: {}, loading: true },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [getProducts.rejected]: (state) => {
      state.loading = true;
    },
  },
});

export default productsSlice.reducer;
