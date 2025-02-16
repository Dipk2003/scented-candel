"use client";
import { useRouter } from "next/navigation";

const giftSets = [
  {
    id: 1,
    name: "Romantic Glow Set",
    image: "/images/gift1.jpg",
    description: "A beautiful set with Rose and Vanilla candles for a romantic ambiance.",
    price: 1299,
  },
  {
    id: 2,
    name: "Calm & Cozy Set",
    image: "/images/gift2.jpg",
    description: "Lavender and Chamomile candles for relaxation and stress relief.",
    price: 1499,
  },
  {
    id: 3,
    name: "Luxury Spa Set",
    image: "/images/gift3.jpg",
    description: "Premium scents like Sandalwood and Ocean Breeze for a spa-like experience.",
    price: 1799,
  },
  {
    id: 4,
    name: "Festive Delight Set",
    image: "/images/gift4.jpg",
    description: "A blend of holiday-inspired fragrances like Cinnamon and Orange Blossom.",
    price: 1999,
  },
];

export default function GiftSetPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: "url('/images/gift-banner.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Premium Gift Sets 🎁</h1>
          <p className="text-lg">The perfect gift for every occasion, crafted with love and elegance.</p>
        </div>
      </div>

      {/* Gift Sets Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Explore Our Gift Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {giftSets.map((set) => (
            <div
              key={set.id}
              className="relative bg-white shadow-xl rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <img src={set.image} alt={set.name} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">{set.name}</h3>
                <p className="text-gray-600 mt-2">{set.description}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">₹{set.price}</p>
                <button
                  onClick={() => router.push(`/product/${set.id}`)}
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
