import "../../public-css/navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/cartContext";
import { useWishlist } from "../../Context/wishlistContext";

const Navbar = () =>{

const { wishState } = useWishlist();
const { cartState } = useCart();

return (
<div className="App">
    <div class="container">
        <nav class="nav-header justify-align">
            <Link to="/">
            <div class="left-nav">SPORTS CAVE
            </div>
            </Link>
            <div>
                <input type="text" placeholder="Search" name="search" class="search-box" />
            </div>
            <div class="right-navbar">
                <Link to="/login">
                <button className="btn-secondary-outline btn-text no-margin btn-login login-color">Login</button>
                </Link>
                <Link to="/wishlist">
                <div class="badge-item">
                    <button class="btn btn-only-icon no-margin">
                        <i class="far fa-heart fa-2x"></i></button>
                    <div class="badge red-circle">{wishState.wishlist.length}</div>
                </div>
                </Link>
                <Link to="/cart">
                <div class="badge-item">
                    <button class="btn btn-only-icon no-margin">
                        <i class="far fa-shopping-cart fa-2x"></i></button>
                    <div class="badge red-circle">{cartState.cart.length}</div>
                </div>
                </Link>
            </div>
        </nav>
    </div>
</div>
);
};

export { Navbar };