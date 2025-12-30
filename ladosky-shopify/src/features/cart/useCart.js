import { useContext, useMemo } from "react";
import { CartContext } from "./CartContext";
import { toNaira } from "../../util/price";


export function useCart(){
    const {cart, dispatch} = useContext(CartContext);

    const addToCart = (product) => {
        dispatch({type: "ADD_TO_CART", payload: product});
    }
    const increaseQuantity = (productId) => {
        dispatch({type: "INCREASE_QUANTITY", payload: productId});
    }
    const decreaseQuantity = (productId) => {
        dispatch({type: "DECREASE_QUANTITY", payload: productId});
    }
    const removeItem = (productId) => {
        dispatch({type: "REMOVE_ITEM", payload: productId});
    }
    const clearCart = () => {
        dispatch({type: "CLEAR_CART"});
    }

    const totalPrice = useMemo(() => {
        return cart.reduce(
            (total, item) => total + toNaira(item.price) * item.quantity, 0);
    }, [cart]);

    return {
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        totalPrice
    }
}