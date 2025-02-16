"use client";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

export default function Shop() {
  const { cart, addToCart } = useCartStore();
  const router = useRouter();

  const products = [
    {
      id: 1,
      image: "/images/p1.jpg",
      name: "Vanilla Scented Candle",
      price: 499,
    },
    {
      id: 2,
      image: "/images/p2.jpg",
      name: "Lavender Bliss",
      price: 599,
    },
    {
      id: 3,
      image: "/images/p3.jpg",
      name: "Rose Petal Glow",
      price: 699,
    },
    {
      id: 4,
      image: "/images/p4.jpg",
      name: "Ocean Breeze",
      price: 799,
    },
  ];

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cart.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      addToCart(product);
    } else {
      router.push("/cart"); // Redirect to cart if already added
    }
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    router.push("/cart");
  };

  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Made padding responsive */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        {/* Adjusted text size for mobile */}
        Shop Our Best-Selling Candles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Adjusted grid gap for better spacing */}
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-3 sm:p-4 rounded-lg shadow-lg text-center"
          >
            {/* Adjusted padding for mobile view */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 sm:h-40 object-cover mb-3 sm:mb-4 rounded"
            />
            {/* Adjusted image height for smaller screens */}
            <h2 className="text-base sm:text-lg font-semibold">{product.name}</h2>
            {/* Adjusted text size for mobile */}
            <p className="text-gray-600 mb-2">₹{product.price}</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-3 sm:mt-4">
              {/* Changed buttons to stack vertically on mobile */}
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto"
              >
                {/* Made buttons full-width on mobile */}
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full sm:w-auto"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
