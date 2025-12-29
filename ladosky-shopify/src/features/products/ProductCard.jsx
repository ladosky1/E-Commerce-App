import { useCart } from "../cart/useCart"
import { useWishlist } from "../wishlist/useWishList";
import { toNaira } from "../../util/price";
import { formatNaira } from "../../util/price";
import "../../styles/products.css"

function ProductCard({ product }) {

    const { addToCart } = useCart();
    const { addToWishList, removeFromWishList, isInWishList } = useWishlist();
    const liked = isInWishList(product.id);

    return(
        <div className="product-card">
            <img 
                src={product.thumbnail}
                alt={product.title}
                className="product-card__image"/>
            
            <h3 className="product-card__title">{product.title}</h3>
            <p className="product-card__price">
                ₦{formatNaira(toNaira(product.price))}
            </p>

            <button
                onClick={() => addToCart(product)} 
                className="product-card__btn">
                Add To Cart
            </button>

            <button 
                onClick={() => liked ? removeFromWishList(product.id) : addToWishList(product)}
                className="product-card__like-btn">
                {liked ? "❤️" : "🤍"}
            </button>
        </div>
    )
}

export default ProductCard