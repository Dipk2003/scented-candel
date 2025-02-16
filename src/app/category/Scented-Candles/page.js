"use client";
import { useRouter } from "next/navigation";

const candles = [
  {
    id: 1,
    name: "Vanilla Bliss",
    image: "/images/candle1.jpg",
    description: "A soothing vanilla scent for a relaxing ambiance.",
    price: 499,
  },
  {
    id: 2,
    name: "Lavender Dream",
    image: "/images/candle2.jpg",
    description: "Lavender-infused for stress relief and calm vibes.",
    price: 599,
  },
  {
    id: 3,
    name: "Rose Petal Glow",
    image: "/images/candle3.jpg",
    description: "A floral delight with the fragrance of fresh roses.",
    price: 699,
  },
  {
    id: 4,
    name: "Ocean Breeze",
    image: "/images/candle4.jpg",
    description: "A refreshing scent that brings the ocean to your home.",
    price: 799,
  },
];

export default function ScentedCandlesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: "url('/images/scented-banner.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Luxury Scented Candles 🕯️</h1>
          <p className="text-lg">Handcrafted candles to transform your space with delightful aromas.</p>
        </div>
      </div>

      {/* Candles Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Explore Our Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {candles.map((candle) => (
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
