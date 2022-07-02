import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  status: null,
};

export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
  try {
    const { data, status } = await axios.get("/api/products");

    if (status == 200) {
      return data.videos;
    }
  } catch (error) {
    return Promise.reject(error);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getAllProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getAllProducts.pending]: (state, action) => {
      state.status = "loading";
    },
  },
});

export default productsSlice.reducer;