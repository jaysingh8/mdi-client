import React from 'react';
import HeroSection from '../Components/HeroSection';
import Consult from '../Components/Consult';
import { useProduct } from '../service/ProductContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const product = useProduct();

  return (
    <div>
      <HeroSection />
      <Consult />

      {/* Product Section */}
      <div className="mt-10 mx-5 mb-10 bg-amber-50 rounded-xl p-6 shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Top Products</h1>
          <Link
            to="/product"
            className="text-purple-600 font-medium bg-blue-100 px-4 py-2 rounded-md hover:bg-purple-600 hover:text-white transition-colors duration-300"
          >
            View More
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {product.slice(0, 5).map((item, index) => (
            <Link
              to={`/product/category/${item.id}`} 
              key={item.id || index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-3 flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-40 h-44 object-cover rounded-lg mb-3"
              />
              <h2 className="text-md font-semibold text-gray-800 text-center mb-1">
                {item.title}
              </h2>
              <p className="text-purple-600 font-bold text-md">₹{item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
