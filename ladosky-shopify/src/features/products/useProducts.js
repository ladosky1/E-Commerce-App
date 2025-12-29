import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/productsApi";

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts().
            then((data) => {
                setProducts(data);
                setLoading(false);
            }).
            catch(() => {
                setError("Could not load products.");
                setLoading(false);
            });
    }, []);

    return { products, loading, error}
}