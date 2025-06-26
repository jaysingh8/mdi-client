import React from 'react'
import { useCart } from '../service/CartContext'

const ProductCart = () => {
  const {
    cartItem,
    removeFromCart,
    clearCart,
    getTotal,
    increaseQty,
    decreaseQty
  } = useCart()

  if (!cartItem || cartItem.length === 0) {
    return <div className="p-6 text-center">Your cart is empty.</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <ul>
        {cartItem.map(item => (
          <li key={item.product.id} className="flex items-center mb-4 border-b pb-4">
            <img
              src={item.product.img}
              alt={item.product.title}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.product.title}</h3>
              <p className="text-purple-600 font-semibold">₹{item.product.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => decreaseQty(item.product.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.product.id)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.product.id)}
              className="text-red-500 hover:text-red-700 ml-4"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ₹{getTotal().toFixed(2)}</p>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCart
