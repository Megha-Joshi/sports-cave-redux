import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext();

const wishFunction = (wishState, action) =>{
    switch(action.type){
        case "Add_to_wishlist" : 
            return {
                ...wishState,
                wishlist:[
                ...wishState.wishlist,
                {...action.payload}
                ]
            }
        case "Remove_from_wishlist" :
            return {
                ...wishState,
                wishlist: [
                    ...wishState.wishlist.filter((product) => product._id!== action.payload._id)
                ]
            }
        default : 
            return wishState;
            
    }
}
const WishlistProvider = ({children}) => {
    const [wishState, wishDispatch] = useReducer(wishFunction, {wishlist: []})
    console.log(wishState);
    return(
        <WishlistContext.Provider value={{wishState, wishDispatch}}>{children}</WishlistContext.Provider>
    );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
