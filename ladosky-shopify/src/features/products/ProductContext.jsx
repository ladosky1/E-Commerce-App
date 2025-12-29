import { createContext, useEffect, useState, useContext } from "react";
import { fetchProducts } from "../../api/productsApi";

const ProductContext = createContext(null);

export function ProductProvider({children}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts().then((data) => {
            setProducts(data);
            setLoading(false);
        }).catch((err) => {
            setError("Failed to load products.");
            setLoading(false);
        });
    }, []);

    const addProduct = (product) => {
        setProducts((prev) => [...prev, product]);
    }

    const deleteProduct = (id) => {
        setProducts((prev) => prev.filter(p => p.id !== id))
    }

    return(
        <ProductContext.Provider 
            value={{products, loading, error, addProduct, deleteProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProducts(){
    return useContext(ProductContext);
}