"use client";
import Link from "next/link";

export default function ShippingDeliveryPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        🚚 Shipping & Delivery Information
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl mb-2">📦</div>
            <h3 className="font-semibold text-gray-800">Free Shipping</h3>
            <p className="text-sm text-gray-600 mt-1">On orders above ₹999</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
            <p className="text-sm text-gray-600 mt-1">3-5 business days</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="text-3xl mb-2">🔒</div>
            <h3 className="font-semibold text-gray-800">Secure Packaging</h3>
            <p className="text-sm text-gray-600 mt-1">Damage-free delivery</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">📍 Delivery Areas</h2>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🇮🇳 Within India</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• All major cities: 3-4 business days</li>
                <li>• Tier 2 cities: 4-5 business days</li>
                <li>• Rural areas: 5-7 business days</li>
                <li>• Northeast states: 6-8 business days</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">🌍 International</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Currently not available</li>
                <li>• Coming soon to selected countries</li>
                <li>• Contact us for special requests</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">💰 Shipping Charges</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3 text-left">Order Value</th>
                <th className="border border-gray-300 p-3 text-left">Shipping Charge</th>
                <th className="border border-gray-300 p-3 text-left">Delivery Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3">Above ₹999</td>
                <td className="border border-gray-300 p-3 font-semibold text-green-600">FREE</td>
                <td className="border border-gray-300 p-3">3-5 business days</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-3">₹500 - ₹999</td>
                <td className="border border-gray-300 p-3">₹50</td>
                <td className="border border-gray-300 p-3">3-5 business days</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3">Below ₹500</td>
                <td className="border border-gray-300 p-3">₹99</td>
                <td className="border border-gray-300 p-3">4-6 business days</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">📋 Order Processing</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-semibold text-gray-800">Order Confirmation</h3>
              <p className="text-gray-600 text-sm">You'll receive an email confirmation within 2 hours of placing your order.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-semibold text-gray-800">Processing</h3>
              <p className="text-gray-600 text-sm">Orders are processed within 1-2 business days. Custom orders may take 3-5 days.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-semibold text-gray-800">Packaging</h3>
              <p className="text-gray-600 text-sm">Each candle is carefully wrapped to prevent damage during shipping.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <div>
              <h3 className="font-semibold text-gray-800">Dispatch & Tracking</h3>
              <p className="text-gray-600 text-sm">You'll receive tracking information once your order is dispatched.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">🎁 Special Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-800 mb-2">🎀 Gift Wrapping</h3>
            <p className="text-gray-600 text-sm mb-3">
              Add beautiful gift wrapping to your order for just ₹99. Perfect for special occasions!
            </p>
            <p className="text-green-600 font-semibold">Available at checkout</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border">
            <h3 className="font-semibold text-gray-800 mb-2">📅 Scheduled Delivery</h3>
            <p className="text-gray-600 text-sm mb-3">
              Choose a specific delivery date for special occasions (subject to availability).
            </p>
            <p className="text-blue-600 font-semibold">Contact us for details</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">📞 Delivery Support</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            <strong>Need help with your delivery?</strong> Our customer support team is available:
          </p>
          <ul className="text-gray-600 space-y-1">
            <li>• <strong>Phone:</strong> +91 9999-999-999 (Mon-Sat, 9 AM - 6 PM)</li>
            <li>• <strong>Email:</strong> support@scentedcandles.com</li>
            <li>• <strong>WhatsApp:</strong> +91 9999-999-999</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/track-order"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mr-4"
          >
            📦 Track Your Order
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            📧 Contact Support
          </Link>
        </div>

        <p className="text-gray-500 mt-10 text-center">
          © {new Date().getFullYear()} Scented Candles. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
