import "./cart.css";
import "../../public-css/navbar.css";
import "../../public-css/root.css";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/cartContext"
import { useWishlist } from "../../Context/wishlistContext";
import { Navbar } from "../Navbar/navbar";

const Cart = () => {
const { cartState, cartDispatch} = useCart();
const { wishState, wishDispatch} = useWishlist();
const initialPrice = cartState.cart.reduce((acc, item) => acc + Number(item.price) * Number(item.quantity),0);
const discountPrice = (10*initialPrice)/100;
const totalPrice = initialPrice-discountPrice;

return (
<div className="App">
    < Navbar />
    <h1 class="title cart-title">My Cart <span>({cartState.cart.length})</span></h1>
    <div class="cart-container">
        <div class="cart-card-container justify-align">
            {cartState.cart.map((item) =>
            <article class="card hz-card image-overlay">
                <div class="horizontal-flex">
                    <img src={item.imgSrc} alt={item.title} class="cart-card-img" />
                    <div className="card-cart-rating">
                            <div>{item.rating}</div>
                            <span><i class="fad fa-star filled"></i></span>
                        </div>
                    <div class="card-content justify-align">
                        <p class="card-text">{item.title}</p>
                        <h3 class="card-head">₹1,304.1 <span class="sm-text discount">{item.price}</span></h3>
                        <p class="card-text sm-text discount-item">10% OFF</p>
                        <div class="quantity">
                            <p class="sm-text">Quantity : </p>
                            <button><i class="fal fa-plus qnt-change" onClick={()=> cartDispatch({type:
                                    "Increase_quantity", payload: item})}></i></button>
                            <div class="count qnt-product">{item.quantity}</div>
                            <button><i class="fal fa-minus qnt-change" onClick={()=> cartDispatch({ type:
                                    "Decrease_quantity", payload: item})}></i></button>
                        </div>
                        <div class="cart-card-footer">
                            <button class="btn btn-text btn-info" onClick={()=> cartDispatch({type: "Remove_from_cart",
                                payload: item})}>Remove From Cart</button>
                            {wishState.wishlist.find((wishItem) => wishItem._id === item._id) ?
                            <Link to="/wishList">
                            <button class="btn btn-text btn-info-outline outline-btn-color">Go to Wishlist</button>
                            </Link> : <button class="btn btn-text btn-info-outline outline-btn-color">Move to Wishlist</button>}
                        </div>
                    </div>
                </div>
            </article>)}
        </div>
        <div class="cart-bill-container">
            <h3>PRICE DETAILS</h3>
            <div class="line w-800"></div>
            <div class="bill-items">
                <p>Price (2 items)</p>
                <p>₹ {initialPrice}</p>
            </div>
            <div class="bill-items">
                <p>10% Discount</p>
                <p>₹ {discountPrice}</p>
            </div>
            <div class="line w-800"></div>
            <div class="bill-items">
                <h3>TOTAL AMOUNT</h3>
                <p>₹ {totalPrice}</p>
            </div>
            <div class="line w-800"></div>
            <p>You will save ₹ {discountPrice} on this order.</p>
            <Link to="/">
            <button class="btn btn-text btn-primary">PLACE ORDER</button>
            </Link>
        </div>
    </div>
</div>
);
};

export {Cart};