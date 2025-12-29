import ProductList from "../features/products/ProductList"

function Products({searchTerm}) {

    return(
        <div>
            <h2 style={{textAlign: "center", margin: "20px 0", color: "var(--primary-blue)"}}>
            Products
            </h2>
            <ProductList searchTerm={searchTerm}/>
        </div>
    ) 
}

export default Products