import "../../public-css/root.css";
import "../../public-css/product-wishlist.css"
import "./wishlist.css";
import "../../public-css/root.css";
import { useWishlist } from "../../Context/wishlistContext";
import { useCart } from "../../Context/cartContext";
import { Navbar } from "../Navbar/navbar";

const WishList = () => {
const { wishState, wishDispatch } = useWishlist();
const { cartState, cartDispatch } = useCart();
return (
<div className="App">
    <Navbar />
    <div class="wishlist-container justify-align">
        <h1 class="title">My Wishlist</h1>
        <div class="wishlist-card-container justify-align">
            {wishState.wishlist.map((item) =>
            <div class="card-ecom">
                <article class="card image-overlay">
                    <div class="card-body">
                        <img src={item.imgSrc} alt="Card Image" class="card-img" />
                        <div className="card-rating">
                            <div>{item.rating}</div>
                            <span><i class="fad fa-star filled"></i></span>
                        </div>
                        <div class="written">
                            <h3 class="card-head">{item.title}</h3>
                            <p class="card-text">{item.price}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        {cartState.cart.find((cartItem) => cartItem._id === item._id) ?
                        <button class="btn btn-text btn-info" onClick={()=> cartDispatch({type: "Increase_quantity",
                            payload: item})}>Increase quantity</button>
                        : <button class="btn btn-text btn-info" onClick={()=> cartDispatch({type: "Add_to_cart",
                            payload: item})}>Move to Cart</button>
                        }
                        <button class="btn btn-no-bg btn-text" onClick={()=> wishDispatch({type: "Remove_from_wishlist",
                            payload: item})}>Remove <i class="fas fa-heart wish-icon"></i></button>
                    </div>
                </article>
            </div>)}
        </div>
    </div>
</div>
);
};

export {WishList};