import { useFilter } from "../../Context/filterContext";
import "../Products/products.css"

const Filter = () => {
const { filterState, filterDispatch } = useFilter();
return (
<div className="App">
    <aside class="filter">
        <div class="filter-head">
            <h3 class="filter-heading">Filters</h3>
            <button class="btn btn-no-bg btn-text" onClick={()=> filterDispatch({type: "CLEAR_ALL", payload: {
                ...filterState.realData }})}>CLEAR ALL</button>
        </div>
        <div>
            <h4 class="filter-heading">Price</h4>
            <div class="range-category">
                <span class="sm-text range-number">400</span>
                <span class="sm-text range-number">1100</span>
                <span class="sm-text range-number">2000</span>
            </div>
            <input type="range" class="price-range" min="400" max="2000" step="200" value={filterState.priceRangeFilter}
                onChange={(e)=> filterDispatch({type: "PRICE_RANGE", payload: Number(e.target.value)})} />
        </div>
        <div>
            <h4 class="filter-heading">Category</h4>
            <label for="cricket" class="disp-new-line sm-text">
                <input type="radio" id="cricket" name="category" checked={filterState.categoryFilter==="Cricket" }
                    onClick={()=> filterDispatch({type: "CATEGORIES",
                payload: "Cricket"})} /> Cricket
            </label>
            <label for="football" class="disp-new-line sm-text">
                <input type="radio" id="football" name="category" checked={filterState.categoryFilter==="Football" }
                    onClick={()=> filterDispatch({type: "CATEGORIES", payload: "Football"
                })}/> Football
            </label>
            <label for="badminton" class="disp-new-line sm-text">
                <input type="radio" id="badminton" name="category" checked={filterState.categoryFilter==="Badminton" }
                    onClick={()=> filterDispatch({type: "CATEGORIES", payload: "Badminton"
                })}/> Badminton
            </label>
            <label for="basketball" class="disp-new-line sm-text">
                <input type="radio" id="basketball" name="category" checked={filterState.categoryFilter==="Basketball" }
                    onClick={()=> filterDispatch({type: "CATEGORIES", payload: "Basketball"
                })}/> Basketball
            </label>
            <label for="tennis" class="disp-new-line sm-text">
                <input type="radio" id="tennis" name="category" checked={filterState.categoryFilter==="Tennis" }
                    onClick={()=> filterDispatch({type: "CATEGORIES", payload: "Tennis"
                })}/> Tennis
            </label>
        </div>
        <div>
            <h4 class="filter-heading">Ratings</h4>
            <label for="1star" class="disp-new-line sm-text">
                <input type="radio" id="1star" name="rating" value={filterState.ratingFilter==="1" } onClick={()=>
                filterDispatch({type: "RATING", payload: 1})}/> 1 star and above
            </label>
            <label for="2star" class="disp-new-line sm-text">
                <input type="radio" id="2star" name="rating" value={filterState.ratingFilter==="2" } onClick={()=>
                filterDispatch({type: "RATING", payload: 2})} /> 2 star and above
            </label>
            <label for="3star" class="disp-new-line sm-text">
                <input type="radio" id="3star" name="rating" value={filterState.ratingFilter==="3" } onClick={()=>
                filterDispatch({type: "RATING", payload: 3})} /> 3 star and above
            </label>
            <label for="4star" class="disp-new-line sm-text">
                <input type="radio" id="4star" name="rating" value={filterState.ratingFilter==="4" } onClick={()=>
                filterDispatch({type: "RATING", payload: 4})} /> 4 star and above
            </label>
            <label for="4star" class="disp-new-line sm-text">
                <input type="radio" id="5star" name="rating" value={filterState.ratingFilter==="5" } onClick={()=>
                filterDispatch({type: "RATING", payload: 5})} /> 5 star
            </label>
        </div>
        <div>
            <h4 class="filter-heading">Sort by</h4>
            <label for="l-to-h" class="disp-new-line sm-text">
                <input type="radio" id="l-to-h" name="sorting" value="PRICE_LOW_TO_HIGH"
                    checked={filterState.sortByFilter==="PRICE_LOW_TO_HIGH" } onClick={()=> filterDispatch({type:
                "SORT_BY_PRICE", payload: "PRICE_LOW_TO_HIGH"})}/> Price : Low to High
            </label>
            <label for="h-to-l" class="disp-new-line sm-text">
                <input type="radio" id="h-to-l" name="sorting" value="PRICE_HIGH_TO_LOW"
                    checked={filterState.sortByFilter==="PRICE_HIGH_TO_LOW" } onClick={()=> filterDispatch({type:
                "SORT_BY_PRICE", payload: "PRICE_HIGH_TO_LOW"})}/> Price : High to Low
            </label>
        </div>
    </aside>
</div>
);
}

export { Filter };