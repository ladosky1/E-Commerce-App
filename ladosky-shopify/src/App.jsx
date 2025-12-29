import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Admin from './pages/Admin'
import AdminRoutes from './auth/AdminRoute'

function App() {
  
  const [searchTerm, setSearchTerm] = useState("");

  return (      
      <BrowserRouter>
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path='/admin' element={
                                        <AdminRoutes>
                                          <Admin/>
                                        </AdminRoutes>}/>
          <Route path="/products" element={<Products searchTerm={searchTerm} />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/wishlist" element={<Wishlist />}/>
        </Routes>
      </BrowserRouter>
  );
  
}

export default App
