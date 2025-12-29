import { Link } from "react-router-dom"
import "../styles/home.css";

function Home(){

    return(
        <div className="home">
            <h2>Ladosky Shopify 🏬</h2>
            <p>
                This is a demo e-commerce website/app made with React by ladosky.
                I hope you enjoy your shopping.
            </p>
            <Link to='/products'>
                <button className="shop-btn">
                    Shop Now 🛍️
                </button>
            </Link>
        </div>
    )
}

export default Home