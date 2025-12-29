import { createContext, useReducer, useEffect, useRef } from "react";
import { wishlistReducer, initialWishlist } from "./WishlistReducer";

export const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, dispatch] = useReducer(wishlistReducer, initialWishlist);

  const isFirstLoad = useRef(true);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      dispatch({
        type: "LOAD_WISHLIST",
        payload: JSON.parse(saved),
      });
    }
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}