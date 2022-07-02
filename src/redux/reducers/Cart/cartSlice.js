import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cart: [],
  status: null,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async () => {
    try {
      const { data, status } = await axios.get("/api/user/cart");

      if (status == 200) {
        return data;
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (product) => {
    try {
      const { data, status } = await axios.post(
        "/api/user/cart",
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

export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async (productId) => {
    try {
      const { data, status } = await axios.delete(
        "/api/user/cart/" + productId,
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
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [getCartItems.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.cart = action.payload.cart;
    },
    [getCartItems.rejected]: (state) => {
      state.status = "failed";
    },
    [getCartItems.pending]: (state) => {
      state.status = "loading";
    },
    [addItemToCart.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.cart = action.payload.cart;
    },
    [addItemToCart.rejected]: (state) => {
      state.status = "failed";
    },
    [addItemToCart.pending]: (state) => {
      state.status = "loading";
    },
    [removeItemFromCart.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.cart = action.payload.cart;
    },
    [removeItemFromCart.rejected]: (state) => {
      state.status = "failed";
    },
    [removeItemFromCart.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default cartSlice.reducer;