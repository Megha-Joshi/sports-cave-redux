import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  wishlist: [],
  status: null,
};

export const getWishlistItems = createAsyncThunk(
  "wishlist/getWishlistItems",
  async () => {
    try {
      const { data, status } = await axios.get("/api/user/wishlist");

      if (status == 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const addItemToWishlist = createAsyncThunk(
  "wishlist/addItemToWishlist",
  async (product) => {
    try {
      const { data, status } = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (status == 201) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const removeItemFromWishlist = createAsyncThunk(
  "wishlist/removeItemFromWishlist",
  async (productId) => {
    try {
      const { data, status } = await axios.delete(
        "/api/user/wishlist/" + productId,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (status == 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers: {
    [getWishlistItems.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.wishlist = action.payload.wishlist;
    },
    [getWishlistItems.rejected]: (state) => {
      state.status = "failed";
    },
    [getWishlistItems.pending]: (state) => {
      state.status = "loading";
    },
    [addItemToWishlist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.wishlist = action.payload.wishlist;
    },
    [addItemToWishlist.rejected]: (state) => {
      state.status = "failed";
    },
    [addItemToWishlist.pending]: (state) => {
      state.status = "loading";
    },
    [removeItemFromWishlist.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.wishlist = action.payload.wishlist;
    },
    [removeItemFromWishlist.rejected]: (state) => {
      state.status = "failed";
    },
    [removeItemFromWishlist.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default wishlistSlice.reducer;