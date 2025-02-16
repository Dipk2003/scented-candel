"use client";
import { useRouter } from "next/navigation";

const candleCategories = [
  {
    id: 1,
    name: "Scented Candles",
    image: "/images/scented.jpg",
    description: "Relax and unwind with our aromatic scented candles.",
    link: "/scented-candles",
  },
  {
    id: 2,
    name: "Decorative Candles",
    image: "/images/decorative.jpg",
    description: "Elegant decorative candles to enhance your space.",
    link: "/decorative-candles",
  },
  {
    id: 3,
    name: "Gift Sets",
    image: "/images/giftset.jpg",
    description: "Perfectly curated candle gift sets for special occasions.",
    link: "/gift-sets",
  },
];

export default function CandlePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: "url('/images/candle-banner.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Discover the Magic of Candles 🕯️</h1>
          <p className="text-lg">Explore our premium collection of handcrafted candles, made to elevate your space.</p>
        </div>
      </div>

      {/* Candle Categories Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Explore Our Candle Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {candleCategories.map((category) => (
            <div
              key={category.id}
              className="relative bg-white shadow-xl rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <img src={category.image} alt={category.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">{category.name}</h3>
                <p className="text-gray-600 mt-2">{category.description}</p>
                <button
                  onClick={() => router.push(category.link)}
                  className="mt-4 bg-black text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-800 transition"
                >
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
