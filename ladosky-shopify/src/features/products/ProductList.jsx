import {useState} from "react";
import { useProducts } from "./useProducts";
import ProductCard from "./ProductCard";
import { CATEGORIES } from "../../constants/categories";



function ProductList({searchTerm}) {
    const { products, loading, error } = useProducts();
    const [selectedCategory, setSelectedCategory] = useState("all");

    if (loading) return (
        <div className="loading-grid">
            {Array.from({ length: 8}).map((_, i) => (
                <div key={i} className="loading-card"></div>
            ))}
        </div>
    )
    if (error) return (
        <div className="error-message">
            <p>{error}</p>
            <p>Refresh the page / connect to the internet</p>
        </div>
    )

    const filteredProducts = 
            selectedCategory === "all"
                ? products : products.filter(
                    (product) => product.category === selectedCategory
                );
    
    const searchFilteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="categories">

                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        className={`category-btn ${
                            selectedCategory === cat ? "active" : ""
                        }`}
                        onClick={() => setSelectedCategory(cat)}>
                        {cat}
                    </button>
                ))}
            </div>
            <div className="product-grid">
            {searchFilteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>

            {searchFilteredProducts.length === 0 && (
                    <p style={{textAlign: "center"}}>No products found matching your search.</p>
                )}
        </>
    )
}

export default ProductList