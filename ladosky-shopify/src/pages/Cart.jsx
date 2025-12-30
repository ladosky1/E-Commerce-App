import {Link} from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { useCart } from '../features/cart/useCart';
import { toNaira } from '../util/price';
import { formatNaira } from '../util/price';
import "../styles/cart.css";


function Cart(){

    const { user } = useAuth();
    const { 
            cart, 
            increaseQuantity, 
            decreaseQuantity, 
            removeItem, 
            clearCart, 
            totalPrice } = useCart();

    if(!user){
        return(
            <div className='cart'>
                <h2>Your Cart 🛒</h2>
                <p>You need to login to view your cart.</p>
                <Link to='/login' className='cart__login-btn'>
                    Go to Login
                </Link>
            </div>
        )
    };

    if(cart.length === 0){
        return(
                <div className='cart-empty'>
                    <p>Your Cart 🛒 is empty.</p>
                    <Link to='/products'>
                        <button className="shop-btn">
                            Shop Now 🛍️
                         </button>
                    </Link>
                </div>
        )
    }

    return(
        <div className='cart-page'>
            <h2 className='cart-title'>Your Cart 🛒</h2>
            {cart.map((item) => (
                <div key={item.id} className='cart-item'>
                    <div className='cart-image'>
                    <img src={item.thumbnail} alt={item.title}/>
                    </div>
                    
                    <div className='cart-item-info'>
                        <h4>{item.title}</h4>
                        <p>₦{formatNaira(toNaira(item.price))}</p>
                    </div>
                <div className='cart-actions'>
                    <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}>
                        ➖
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        onClick={() => increaseQuantity(item.id)}>
                        ➕
                    </button>
                </div>
                    <button 
                        className='cart-remove'
                        onClick={() => removeItem(item.id)}>
                        remove
                    </button>
                </div>
            ))}
            <h3 className='cart-total'>Total: ₦{formatNaira(totalPrice)}</h3>
            <button 
                onClick={clearCart}
                className='cart-item__clear-btn'>
                Clear Cart
            </button>
        </div>
    )
}

export default Cart