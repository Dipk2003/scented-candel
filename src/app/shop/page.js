"use client";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

export default function Shop() {
  const { cart, addToCart } = useCartStore();
  const router = useRouter();

  const products = [
    { id: 1, image: "/images/p1.jpg", name: "Vanilla Scented Candle", price: 499 },
    { id: 2, image: "/images/p2.jpg", name: "Lavender Bliss", price: 599 },
    { id: 3, image: "/images/p3.jpg", name: "Rose Petal Glow", price: 699 },
    { id: 4, image: "/images/p4.jpg", name: "Ocean Breeze", price: 799 },
  ];

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      addToCart(product);
    } else {
      router.push("/cart");
    }
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    router.push("/cart");
  };

  return (
    <section className="py-20 px-6 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Shop Our Best-Selling Candles 🕯️
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
            <p className="text-gray-600 text-lg font-medium mb-3">₹{product.price}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-gray-700 w-full sm:w-auto"
              >
                🛒 Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-green-500 w-full sm:w-auto"
              >
                🚀 Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
