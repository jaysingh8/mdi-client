import React from 'react'
import { useProduct } from '../service/ProductContext'
import { Link } from 'react-router-dom'

const Viewproduct = () => {
  const product = useProduct([])

  
  const categories = [
    ...new Set(product.map(item => item.category?.replace(/\s+/g, '')))
  ]

  return (
    <div className="p-5">
      {categories.map((category, index) => {
        const categoryProducts = product.filter(
          item => item.category?.replace(/\s+/g, '') === category
        )
        return (
          <div key={index} className="mb-10 bg-amber-50 p-5 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{category}</h2>
              <Link
                to={`/product/${category}`}
                className="text-purple-600 font-semibold bg-blue-100 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition duration-300"
              >
                View More
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {categoryProducts.slice(0, 4).map((item, i) => (
                <Link
                  key={i}
                  className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition w-64 h-80"
                  to={`/product/category/${item.id}`}

                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-60 h-52 object-cover rounded-lg mb-2"
                  />
                  <h1 className="text-lg font-semibold text-gray-800 text-center mb-1">
                    {item.title}
                  </h1>
                  <p className="text-purple-600 font-bold text-md">₹{item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Viewproduct
