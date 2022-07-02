import {
    createContext,
    useReducer,
    useContext, useState, useEffect
} from "react";
import axios from "axios";

const initValue = {
    priceRangeFilter: 2000,
    categoryFilter: [],
    ratingFilter: 1,
    sortByFilter: "",
    showData: [],
    realData: [],
}

const FilterContext = createContext();

const filterFunction = (filterState, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...filterState,
                showData: action.payload,
                    realData: action.payload,
            };
        case "CLEAR_ALL":
            return {
                ...filterState,
                priceRangeFilter: 2000,
                    categoryFilter: [],
                    ratingFilter: 1,
                    sortByFilter: "",
                    showData: filterState.realData,
                    realData: filterState.realData,
            };
        case "SORT_BY_PRICE":
            if (action.payload === "PRICE_LOW_TO_HIGH") {
                return {
                    ...filterState,
                    sortByFilter: "PRICE_LOW_TO_HIGH",
                    showData: [...filterState.showData].sort(
                        (a, b) => a.Price - b.Price
                    ),
                };
            } else if (action.payload === "PRICE_HIGH_TO_LOW") {
                return {
                    ...filterState,
                    sortByFilter: "PRICE_HIGH_TO_LOW",
                    showData: [...filterState.showData].sort(
                        (a, b) => b.Price - a.Price
                    ),
                };
            } else {
                return {
                    ...filterState
                };
            }
            case "PRICE_RANGE":
                return {
                    ...filterState,
                    priceRangeFilter: action.payload,
                };
            case "CATEGORIES":
                return {
                    ...filterState,
                    categoryFilter: action.payload,
                };
            case "RATING":
                return {
                    ...filterState,
                    ratingFilter: action.payload,
                };
            default:
                return filterState;
    }
}

const FilterProvider = ({children}) => {

    useEffect(()=>{
        axios.get("/api/products")
        .then(response => {setProducts(response.data.products)});
        },[]);

        const [products, setProducts] = useState([]);
        const [filterState, filterDispatch] = useReducer(filterFunction, initValue)
        return ( < FilterContext.Provider value = {{filterState,filterDispatch, products}} > {children} </FilterContext.Provider>)};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
