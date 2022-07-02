import "../../public-css/root.css";
import "../../public-css/product-wishlist.css"
import "./products.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../../Context/cartContext";
import { useWishlist } from "../../Context/wishlistContext";
import { Filter } from "../Filter/filter";
import { useFilter } from "../../Context/filterContext";
import { Navbar } from "../Navbar/navbar";

const Products = () => {

const { filterState, filterDispatch, products } = useFilter();
const { wishState, wishDispatch } = useWishlist();
const { cartState, cartDispatch } = useCart();

useEffect(() => {
filterState.showData.length === 0 &&
filterDispatch({type : "SET_DATA", payload: products});
}, [products]);

const filterCategory = (showData, filterOnCategories) => {
if (filterOnCategories.length > 0) {
console.log(filterOnCategories);
return showData.filter((product) => {
console.log(product);
return filterOnCategories.includes(product.categoryName);
});
} else {
return showData;
}
};

const filterPrice = (showData, filterOnPrice) => {
if (filterOnPrice === "PRICE_LOW_TO_HIGH") {
return showData.sort(
(product1, product2) => product1.price - product2.price
);
} else if (filterOnPrice === "PRICE_HIGH_TO_LOW") {
return showData.sort(
(product1, product2) => product2.price - product1.price
);
} else {
return showData;
}
};

const filterPriceRange = (showData, filterOnPriceRange) => {
if (filterOnPriceRange !== null) {
return showData.filter(
(product) => product.price <= filterOnPriceRange ); } else { return showData; } }; const filterRating=(showData,
    filterOnRating)=> {
    if (filterOnRating != null) {
    return showData.filter((product) => product.rating >= filterOnRating);
    } else {
    return showData;
    }
    };

    const productFilter = (filterState) => {
    const sortByCategoryData = filterCategory(
    filterState.showData,
    filterState.categoryFilter
    );

    const sortByPriceData = filterPrice(
    sortByCategoryData,
    filterState.sortByFilter
    );

    const sortByRatingData = filterRating(sortByPriceData, filterState.ratingFilter);

    const sortByPriceRangeData = filterPriceRange(
    sortByRatingData,
    filterState.priceRangeFilter
    );
    return sortByPriceRangeData;
    };
    return (
    <div className="App">
        <Navbar />
        <div class="page-container">
            <Filter />
            <div class="product-container">
                <h1 class="title">Showing All Products</h1>
                <div class="product-card-container">
                    {productFilter(filterState).length > 0 &&
                    productFilter(filterState).map((item =>
                    <div class="card-ecom">
                        <article class="card image-overlay">
                            <div class="card-body">
                                <img src={item.imgSrc} alt="Card Image" class="card-img" />
                                <div className="card-rating">
                                    <div>{item.rating}</div>
                                    <span><i class="fad fa-star filled"></i></span>
                                </div>
                                <div>
                                    <h3 class="card-head">{item.title}</h3>
                                    <p class="card-text">₹ {item.price}</p>
                                </div>
                            </div>
                            <div class="card-footer">
                                {cartState.cart.find((cartItem) => cartItem._id===item._id) ?
                                <Link to="/cart">
                                <button class="btn btn-text btn-info">Go to Cart</button>
                                </Link> : <button class="btn btn-text btn-info" onClick={()=> cartDispatch({type:
                                    "Add_to_cart", payload: item})}>Add to Cart</button>
                                }
                                {wishState.wishlist.find((wishItem) => wishItem._id === item._id) ?
                                <Link to="/wishlist" className="outline-btn-color">
                                <button class="btn btn-text btn-info-outline outline-btn-color">Go to Wishlist</button>
                                </Link> : <button class="btn btn-text btn-info-outline outline-btn-color" onClick={()=>
                                    wishDispatch({type: "Add_to_wishlist", payload: item})}>Wishlist</button>
                                }
                            </div>
                        </article>
                    </div>))}
                </div>
            </div>
        </div>
    </div>
    );
    };

    export {Products};