"use client";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";
import Image from "next/image";

const products = [
  { id: 1, image: "/images/p1.jpg", title: "Vanilla Candle", price: 499, rating: 4.8, stock: true },
  { id: 2, image: "/images/p2.jpg", title: "Lavender Bliss", price: 599, rating: 4.6, stock: true },
  { id: 3, image: "/images/p3.jpg", title: "Rose Petal Glow", price: 699, rating: 4.7, stock: false },
  { id: 4, image: "/images/p4.jpg", title: "Ocean Breeze", price: 799, rating: 4.9, stock: true },
];

export default function PremiumShop() {
  const { addToCart } = useCartStore();
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">✨ Premium Candle Collection ✨</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            <div className="relative">
              <Image src={product.image} alt={product.title} width={300} height={300} className="rounded-lg w-full h-60 object-cover" />
              <button
                className={`absolute top-3 right-3 text-xl ${wishlist.includes(product.id) ? "text-red-500" : "text-gray-400"}`}
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist.includes(product.id) ? "❤️" : "🤍"}
              </button>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-4">{product.title}</h2>
            <p className="text-gray-600 text-lg font-medium">₹{product.price}</p>
            <p className="text-yellow-500 text-lg font-medium">⭐ {product.rating}</p>
            <p className={`text-sm ${product.stock ? "text-green-600" : "text-red-600"}`}>
              {product.stock ? "In Stock" : "Out of Stock"}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-700 w-full sm:w-auto"
              >
                🛒 Add to Cart
              </button>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-blue-500 w-full sm:w-auto"
              >
                ⚡ Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
