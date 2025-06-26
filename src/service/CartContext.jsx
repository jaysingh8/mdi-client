// src/service/CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItem))
  }, [cartItem])

  const addToCart = (product) => {
    const exist = cartItem.find(item => item.product.id === product.id)
    if (exist) {
      setCartItem(cartItem.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCartItem([...cartItem, { product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCartItem(cartItem.filter(item => item.product.id !== id))
  }

  const clearCart = () => setCartItem([])

  const increaseQty = (id) => {
    setCartItem(cartItem.map(item =>
      item.product.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  }

  const decreaseQty = (id) => {
    setCartItem(cartItem.map(item =>
      item.product.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ))
  }

  const getTotal = () =>
    cartItem.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const cartCount = cartItem.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cartItem,
      addToCart,
      removeFromCart,
      clearCart,
      increaseQty,
      decreaseQty,
      getTotal,
      cartCount,
    }}>
      {children}
    </CartContext.Provider>
  )
}
