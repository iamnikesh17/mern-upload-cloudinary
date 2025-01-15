import React from 'react';

export const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="h-56 w-full bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-gray-900 font-bold text-lg truncate">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-gray-600 font-semibold text-lg mt-2">
          ${product.price}
        </p>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-1 h-16 overflow-hidden">
          {product.description}
        </p>

        {/* Call to Action */}
        <button className="w-full mt-4 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
