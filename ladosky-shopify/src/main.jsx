import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './auth/AuthContext.jsx'
import { CartProvider } from './features/cart/CartContext.jsx'
import { ProductProvider } from './features/products/ProductContext.jsx'
import { WishlistProvider } from './features/wishlist/WishlistContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <ProductProvider>
            <App/>
          </ProductProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  </StrictMode>,
)
