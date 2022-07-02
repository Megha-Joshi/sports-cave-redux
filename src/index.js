import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { CartProvider } from "./Context/cartContext";
import { WishlistProvider} from "./Context/wishlistContext";
import { FilterProvider } from "./Context/filterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
    <CartProvider>
    <WishlistProvider>
    <App />
    </WishlistProvider>
    </CartProvider>
    </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
