import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  categories: [],
  status: null,
};
// pass slicename/thunkname
export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async () => {
    try {
      const { data, status } = await axios.get("/api/categories");

      if (status == 200) {
        return data.categories;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [getAllCategories.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.categories = action.payload;
    },
    [getAllCategories.rejected]: (state) => {
      state.status = "failed";
    },
    [getAllCategories.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default categoriesSlice.reducer;