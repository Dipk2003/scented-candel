import "./globals.css";
import HeroSection from "../components/HeroSection"; // ✅ Importing Hero Section

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* ✅ Hero Section at the top */}
      <HeroSection />

      {/* ✅ Featured Content */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-gray-800 tracking-wide mb-4">
          Elevate Your Space with Handcrafted Candles 🕯️✨
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl">
          Discover a collection of soothing, aromatic candles designed to bring warmth and relaxation to your home.
        </p>
        <a
          href="/shop"
          className="px-8 py-4 text-lg font-semibold bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-400 transition duration-300"
        >
          Shop Now
        </a>
      </section>
    </main>
  );
}
