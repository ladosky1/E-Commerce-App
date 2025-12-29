import { useWishlist } from "../features/wishlist/useWishList";
import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom"
import "../styles/wishlist.css"

function Wishlist(){

    const { wishlist,  removeFromWishList} = useWishlist();
    const { user } = useAuth();

    if(!user){
        return(
            <div className='cart'>
                <h2>Your Wishlist 💙</h2>
                <p>You need to login to view your Wishlist.</p>
                <Link to='/login' className='cart__login-btn'>
                    Go to Login
                </Link>
            </div>
        )
    };
    
    if(wishlist.length === 0){
        return (
            <div className="wishlist-empty">
                <p>Your Wishlist is Empty 💙</p>
                <Link to='/products'>
                    <button className="shop-btn">
                        Shop Now 🛍️
                    </button>
                </Link>
            </div>
        )
    } 

    return(
        <div className="wishlist-page">
            <h2 className="wishlist-title">Your WishList</h2>
        <div className="wishlist-grid">
            {wishlist.map((item) => (
                <div 
                    key={item.id}
                    className="wishlist-card">
                    <img src={item.thumbnail} alt={item.title}/>
                    <h4>{item.title}</h4>
                    <button 
                        className="wishlist-remove"
                        onClick={() => removeFromWishList(item.id)}>
                        remove
                    </button>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Wishlist