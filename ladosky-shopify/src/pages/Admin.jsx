import { useProducts } from "../features/products/ProductContext"
import "../styles/admin.css"
import { toNaira } from "../util/price";
import { formatNaira } from "../util/price";

function Admin(){

    const {
            loading,
            error,
            products, 
            addProduct, 
            deleteProduct} = useProducts();
    
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

    function handleAddProducts(){
        const newProduct = {
            id: Date.now(),
            title: "New Product",
            price: 1000,
            category: "electronics",
            thumbnail: "/placeholder.png"
        };

        addProduct(newProduct);
    }

    
    return(
        <div className="admin-page">
            <h1>Admin Dashboard</h1>

            <div className="admin-actions">
                <button onClick={handleAddProducts}>
                    ➕
                </button>
            </div>

            <div className="admin-list">
                {products.map(product => (
                    <div className="admin-card" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>₦{formatNaira(toNaira(product.price))}</p>
                        <button onClick={() => deleteProduct(product.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Admin