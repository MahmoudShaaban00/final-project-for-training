import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const location = useLocation();
  const { title, img, price } = location.state || {};

  if (!title) return <p>Product not found.</p>;



  return (

    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden my-20">
      <img className="w-full h-60 object-cover " src={img} alt={title}
        onError={(e) => { e.target.onerror = null; e.target.src = '../../public/img/teblat.jpg'; }} // Fallback image
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-lg font-semibold mt-4">Price: ${price}</p>
        <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;