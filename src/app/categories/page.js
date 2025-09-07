"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Scented Candles",
    slug: "scented-candles",
    image: "/images/p1.jpg",
    description: "Relax with our finest scented candles.",
  },
  {
    id: 2,
    name: "Decorative Candles",
    slug: "decorative-candles",
    image: "/images/p2.jpg",
    description: "Premium candles for a lavish ambiance.",
  },
  {
    id: 3,
    name: "Gift Sets",
    slug: "gift-sets",
    image: "/images/p4.jpg",
    description: "Perfect scented gift sets for loved ones.",
  },
  {
    id: 4,
    name: "Soy Wax Candles",
    slug: "soy-wax-candles",
    image: "/images/p3.jpg",
    description: "Eco-friendly and long-lasting soy candles.",
  },
];

export default function CategoryPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: "url('/images/candle1.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Discover Our Candle Collections ✨</h1>
          <p className="text-lg">Handmade with love, crafted for perfection.</p>
        </div>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">Shop by Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group bg-white shadow-xl rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => router.push(`/category/${category.slug}`)}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4 transition-all duration-300 group-hover:bg-opacity-60">
                <h3 className="text-2xl font-semibold">{category.name}</h3>
                <p className="text-sm mt-2">{category.description}</p>
                <button className="mt-4 bg-white text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition">
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
