import React, { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../service/ProductContext'
import { useCart } from '../service/CartContext'
import axios from 'axios'

const SingleProduct = () => {
  const { id } = useParams()
  const products = useProduct() 
  const product = products.find(p => String(p.id) === id)
  const { addToCart } = useCart()

 
  const user = useMemo(() => {
    try {
      const stored = localStorage.getItem('user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  }, [])

  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    rating: 5,
    comment: '',
  })

  
  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await axios.get(`https://mdi-backend-wxoa.onrender.com/api/v1/api/v1/reviews?productId=${id}`)
        setReviews(res.data.reviews)
      } catch (err) {
        setError('Failed to load reviews.')
        setReviews([])
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [id])

  const productReviews = reviews || []

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      alert('Please log in to submit a review.')
      return
    }
    if (!formData.comment.trim()) {
      alert('Please write a comment.')
      return
    }

    try {
      const token = localStorage.getItem('token')

      const newReview = {
        productId: id,
        name: user.name,
        rating: Number(formData.rating),
        message: formData.comment.trim(),
        userId: user._id,
      }

      const res = await axios.post('https://mdi-backend-wxoa.onrender.com/api/v1/reviews', newReview, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      
      setReviews(prev => [res.data.review, ...prev])
      setFormData({ rating: 5, comment: '' })
    } catch (err) {
      alert('Failed to submit review. Try again later.')
    }
  }

  const stars = (rating) => '*'.repeat(rating) + '*'.repeat(5 - rating)

  if (!product) {
    return (
      <div className="p-8 text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <p>Please check the product ID or go back to the products list.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.img}
          alt={product.title}
          className="w-full md:w-1/2 object-cover rounded-lg shadow-md"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-purple-600 font-semibold mb-4">₹{product.price}</p>
          <p className="mb-6">{product.desc}</p>

          <button
            onClick={() =>{ addToCart(product)}}
            className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      
      <div className="bg-amber-50 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-purple-700">Customer Reviews</h2>

        
        <form onSubmit={handleSubmit} className="mb-8 max-w-lg space-y-4">
          <div>
            <label htmlFor="rating" className="block text-purple-700 font-semibold mb-2">
              Rating
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {[5, 4, 3, 2, 1].map(num => (
                <option key={num} value={num}>
                  {num} Star{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="comment" className="block text-purple-700 font-semibold mb-2">
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="4"
              value={formData.comment}
              onChange={handleChange}
              required
              placeholder="Write your review here..."
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Submit Review
          </button>
        </form>

       
        {loading && <p className="text-center text-gray-600">Loading reviews...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        
        <div className="space-y-6">
          {!loading && productReviews.length === 0 && (
            <p className="text-center text-gray-600">No reviews yet. Be the first to review!</p>
          )}

          {productReviews
            .filter((r) => r) // filter out undefined/null
            .map(({ _id, name, rating, message }) => (
              <div key={_id} className="bg-white p-4 rounded-md shadow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-purple-700">{name}</h3>
                  <span className="text-yellow-500 text-lg">{stars(rating)}</span>
                </div>
                <p className="text-gray-700">{message}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
