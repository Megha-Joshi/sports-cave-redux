import "../../public-css/navbar.css";
import "../../public-css/root.css";
import "./homepage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFilter } from "../../Context/filterContext";
import { Navbar } from "../Navbar/navbar";
import { Footer } from "../Footer/footer";

const Homepage = () => {
const [category, setCategory] = useState([]);
const { filterDispatch } = useFilter();
useEffect(()=>{
axios.get("/api/categories")
.then(response =>{setCategory(response.data.categories)})
},[])

return (
<div className="App">
    <Navbar />
    <div class="body-container">
        <div class="hero-image">
            <img src="./images/sport-latest.jpg" alt="sport" class="res-image" />
        </div>
        <div class="sports-flex justify-align">
            <Link to="/products">
            <div className="img-category">
                <img src="../images/all-products.jpg" alt="Cricket" className="box" />
                <Link to="/products">
                <button className="btn-info-outline btn btn-text products-btn-color">ALL PRODUCTS</button>
                </Link>
            </div>
            </Link>
            {category.map(item =>
            <div class="img-category">
                <img src={item.imgSrc} alt="Cricket" class="sport-img" />
                <Link to="/products">
                <button class="btn-info btn btn-text" onClick={()=> filterDispatch({type: "CATEGORIES", payload:
                    item.categoryName})}>{item.categoryName}</button>
                </Link>
            </div>)}
        </div>
    </div>
    <Footer />
</div>
);
};

export { Homepage };