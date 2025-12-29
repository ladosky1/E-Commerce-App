import { WishlistContext } from "./WishlistContext";
import { useContext } from "react";

export function useWishlist(){

    const { wishlist, dispatch } = useContext(WishlistContext);

    const addToWishList = (product) => {
        dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }

    const removeFromWishList = (Id) => {
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: Id });
    }

    const isInWishList = (id) => 
        wishlist.some(item => item.id === id);

    return { wishlist, addToWishList, removeFromWishList, isInWishList };
}