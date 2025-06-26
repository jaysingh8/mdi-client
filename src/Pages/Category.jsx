import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../service/ProductContext'

const Category = () => {
  const { category } = useParams()
  const product = useProduct() || []

  const formattedCategory = category ? category.toLowerCase().replace(/\s+/g, '') : ''

  const filterProduct = product.filter(item => {
    if (!item.category) return false
    const formattedItemCategory = item.category.toLowerCase().replace(/\s+/g, '')
    return formattedItemCategory === formattedCategory
  })

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4">
      {filterProduct.length > 0 ? (
        filterProduct.map((pro, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition w-64 h-72"
          >
            <img
              src={pro.img}
              alt={pro.title}
              className="w-60 h-52 object-cover rounded-lg mb-2"
            />
            <h1 className="text-lg font-semibold text-gray-800 text-center mb-1">
              {pro.title}
            </h1>
            <p className="text-purple-600 font-bold text-md">₹{pro.price}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600 mt-8 text-lg">
          No products found in category: <strong>{category}</strong>
        </p>
      )}
    </div>
  )
}

export default Category
