import "./App.css";
import logo from "./logo.png";
import { Homepage } from "./cave-components/Homepage/homepage";
import { Products } from "./cave-components/Products/products";
import { Cart } from "./cave-components/Cart/cart";
import { WishList } from "./cave-components/Wishlist/wishlist";
import { Signup } from "./cave-components/Signup/signup";
import { Login } from "./cave-components/Login/login"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Homepage />}/>
        <Route path="/products" element = {<Products />}/>
        <Route path="/cart" element = {<Cart />}/>
        <Route path="/wishlist" element = {<WishList />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/signup" element = {<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
