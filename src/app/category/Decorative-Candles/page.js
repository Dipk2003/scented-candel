"use client";
import { useRouter } from "next/navigation";

const decorativeCandles = [
  {
    id: 1,
    name: "Golden Luxe Candle",
    image: "/images/deco1.jpg",
    description: "A luxurious golden candle to add elegance to your space.",
    price: 799,
  },
  {
    id: 2,
    name: "Marble Elegance",
    image: "/images/deco2.jpg",
    description: "Aesthetic marble design for a modern and stylish look.",
    price: 999,
  },
  {
    id: 3,
    name: "Crystal Glow",
    image: "/images/deco3.jpg",
    description: "Shimmering crystal-inspired candle for a sophisticated feel.",
    price: 1199,
  },
  {
    id: 4,
    name: "Rustic Charm",
    image: "/images/deco4.jpg",
    description: "Handmade rustic candle for a cozy and warm atmosphere.",
    price: 899,
  },
];

export default function DecorativeCandlePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: "url('/images/decorative-banner.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Elegant Decorative Candles 🕯️</h1>
          <p className="text-lg">Add a touch of luxury to your home with our handcrafted decorative candles.</p>
        </div>
      </div>

      {/* Decorative Candles Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Discover Our Premium Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {decorativeCandles.map((candle) => (
            <div
              key={candle.id}
              className="relative bg-white shadow-xl rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <img src={candle.image} alt={candle.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">{candle.name}</h3>
                <p className="text-gray-600 mt-2">{candle.description}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">₹{candle.price}</p>
                <button
                  onClick={() => router.push(`/product/${candle.id}`)}
                  className="mt-4 bg-black text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-800 transition"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
