import { createContext, useReducer, useEffect, useRef } from "react";
import { cartReducer, initialCart } from "./CartReducer";

export const CartContext = createContext(null);

export function CartProvider({children}){

    const [cart, dispatch] = useReducer(cartReducer, initialCart);

    const isFirstLoad = useRef(true);

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if(savedCart){
            dispatch({type: "LOAD_CART", payload: JSON.parse(savedCart)});
        }
    }, [])

    useEffect(() => {
        if(isFirstLoad.current){
            isFirstLoad.current = false;
            return;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    return(
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}