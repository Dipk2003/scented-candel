"use client";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import supabase from "@/store/supabaseClient";
import Image from "next/image";

const saleProducts = [
  {
    id: "sale-1",
    name: "Vanilla Dream Bundle",
    image: "/images/candle1.jpg",
    originalPrice: 899,
    salePrice: 599,
    discount: 33,
    description: "Limited time offer on our bestselling vanilla scented candles.",
    features: ["100% Natural Soy Wax", "45-hour burn time", "Hand-poured"],
  },
  {
    id: "sale-2",
    name: "Lavender Relaxation Set",
    image: "/images/candle2.jpg",
    originalPrice: 1299,
    salePrice: 899,
    discount: 31,
    description: "Perfect for stress relief and better sleep quality.",
    features: ["Pure Lavender Oil", "Eco-friendly wick", "Gift packaging"],
  },
  {
    id: "sale-3",
    name: "Rose Garden Collection",
    image: "/images/candle3.jpg",
    originalPrice: 1599,
    salePrice: 999,
    discount: 38,
    description: "Elegant floral fragrance for romantic ambiance.",
    features: ["Rose Petal Infused", "Premium Glass Jar", "60-hour burn"],
  },
];

export default function SalePage() {
  const { addToCart } = useCartStore();
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  // Countdown timer for sale
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = (product) => {
    const cartProduct = {
      id: product.id,
      title: product.name,
      price: product.salePrice,
      image: product.image,
      originalPrice: product.originalPrice,
    };
    addToCart(cartProduct);
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    router.push("/cart");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Sale Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            🔥 MEGA SALE 🔥
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Up to 40% OFF on Premium Scented Candles!
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">⏰ Sale Ends In:</h3>
            <div className="flex space-x-4 text-center">
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-sm">Days</div>
              </div>
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Min</div>
              </div>
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Sec</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sale Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {saleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 relative"
            >
              {/* Sale Badge */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                -{product.discount}% OFF
              </div>

              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Features */}
                <ul className="text-sm text-gray-500 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl font-bold text-red-600">₹{product.salePrice}</span>
                  <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                    Save ₹{product.originalPrice - product.salePrice}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 transition"
                  >
                    🛒 Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition"
                  >
                    🚀 Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Sale Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Limited Time Offer! 🎁</h2>
          <p className="text-lg mb-6">
            Free shipping on orders above ₹999 + Get a free mini candle with every purchase!
          </p>
          <button
            onClick={() => router.push("/shop")}
            className="bg-white text-red-500 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Shop All Products →
          </button>
        </div>
      </div>
    </div>
  );
}
