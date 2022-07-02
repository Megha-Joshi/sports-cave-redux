import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/auth/authSlice";
import productsReducer from "../reducers/Product-Listing/productsSlice";
import categoryReducer from "../reducers/Product-Listing/categorySlice";
import cartReducer from "../reducers/Cart/cartSlice";
import wishlistReducer from "../reducers/Wishlist/wishlistSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productsReducer,
    categories: categoryReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});