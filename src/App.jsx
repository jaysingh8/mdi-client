import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Viewproduct from './Pages/Viewproduct'
import Category from './Pages/Category'
import SingleProduct from './Pages/SingleProduct'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { ProductProvider } from './service/ProductContext'
import { CartProvider } from './service/CartContext'
import ProductCart from './Pages/ProductCart'
import User from './Pages/User'
import Contact from './Pages/Contact'
import ConsultDoctor from './Pages/ConsultDoctor'

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <Routes>
            <Route path ='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route element={<MainLayout />}>
              <Route path='/home' element={<Home />} />
              <Route path='/product' element={<Viewproduct />} />
              <Route path='/product/:category' element={<Category />} />
              <Route path='/product/category/:id' element={<SingleProduct />} />
              <Route path='/cart' element={<ProductCart/>} />
              <Route path='/user' element={<User/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/doctor' element={<ConsultDoctor/>}/>
              
            </Route>
          </Routes>
        </CartProvider>
      </ProductProvider>
    </Router>
  )
}

export default App
