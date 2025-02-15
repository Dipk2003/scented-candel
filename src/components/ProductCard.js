"use client"; // ✅ Add this line at the top

import { useCartStore } from "../store/useCartStore"; // Import cart state

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)} // ✅ Add to cart working now
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
