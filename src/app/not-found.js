import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-9xl mb-4">🕯️</div>
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">
          Oops! This page seems to have melted away like a candle
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. But don't worry, our beautiful candles are still here waiting for you!
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mr-4"
          >
            🏠 Go Home
          </Link>
          <Link
            href="/shop"
            className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            🛍️ Shop Candles
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <Link href="/categories" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-2xl mb-1">📂</div>
            <p className="text-sm font-semibold text-gray-700">Categories</p>
          </Link>
          <Link href="/sale" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-2xl mb-1">🔥</div>
            <p className="text-sm font-semibold text-gray-700">Sale</p>
          </Link>
          <Link href="/contact" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-2xl mb-1">📞</div>
            <p className="text-sm font-semibold text-gray-700">Contact</p>
          </Link>
          <Link href="/faq" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="text-2xl mb-1">❓</div>
            <p className="text-sm font-semibold text-gray-700">FAQ</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
