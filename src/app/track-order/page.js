"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function TrackOrderPage() {
  const [orderData, setOrderData] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    if (!orderId || !email) {
      setError("Please enter both Order ID and Email address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data, error: fetchError } = await supabase
        .from("orders")
        .select("*")
        .eq("id", orderId)
        .eq("email", email)
        .single();

      if (fetchError || !data) {
        setError("Order not found. Please check your Order ID and Email address.");
        setOrderData(null);
      } else {
        setOrderData(data);
      }
    } catch (err) {
      setError("An error occurred while tracking your order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "pending": return "⏳";
      case "paid": return "✅";
      case "processing": return "🔄";
      case "shipped": return "🚚";
      case "delivered": return "📦";
      case "cancelled": return "❌";
      default: return "❓";
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending": return "text-yellow-600 bg-yellow-100";
      case "paid": return "text-green-600 bg-green-100";
      case "processing": return "text-blue-600 bg-blue-100";
      case "shipped": return "text-purple-600 bg-purple-100";
      case "delivered": return "text-green-700 bg-green-200";
      case "cancelled": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">📦 Track Your Order</h1>
          <p className="text-lg text-gray-600">
            Enter your order details to check the status of your candle delivery
          </p>
        </div>

        {/* Track Order Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <form onSubmit={handleTrackOrder} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order ID
                </label>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter your order ID"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-center bg-red-50 p-3 rounded-lg">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            >
              {loading ? "🔍 Tracking..." : "🔍 Track Order"}
            </button>
          </form>
        </div>

        {/* Order Status Display */}
        {orderData && (
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="border-b pb-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Details</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <p><span className="font-semibold">Order ID:</span> {orderData.id}</p>
                <p><span className="font-semibold">Date:</span> {new Date(orderData.created_at).toLocaleDateString()}</p>
                <p><span className="font-semibold">Total:</span> ₹{orderData.total}</p>
                <p><span className="font-semibold">Email:</span> {orderData.email}</p>
              </div>
            </div>

            {/* Order Status */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Status</h3>
              <div className={`inline-flex items-center px-4 py-2 rounded-full font-semibold ${getStatusColor(orderData.status)}`}>
                <span className="mr-2 text-lg">{getStatusIcon(orderData.status)}</span>
                {orderData.status || "Unknown"}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Shipping Address</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">{orderData.name}</p>
                <p className="text-gray-600">{orderData.address}</p>
              </div>
            </div>

            {/* Order Timeline */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Order Placed</p>
                    <p className="text-sm text-gray-600">{new Date(orderData.created_at).toLocaleString()}</p>
                  </div>
                </div>
                
                {orderData.status === "Paid" && (
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-semibold">Payment Confirmed</p>
                      <p className="text-sm text-gray-600">Payment received successfully</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${orderData.status === "Processing" || orderData.status === "Shipped" || orderData.status === "Delivered" ? "bg-green-500" : "bg-gray-300"}`}></div>
                  <div>
                    <p className="font-semibold">Processing</p>
                    <p className="text-sm text-gray-600">Your order is being prepared</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${orderData.status === "Shipped" || orderData.status === "Delivered" ? "bg-green-500" : "bg-gray-300"}`}></div>
                  <div>
                    <p className="font-semibold">Shipped</p>
                    <p className="text-sm text-gray-600">Your order is on the way</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${orderData.status === "Delivered" ? "bg-green-500" : "bg-gray-300"}`}></div>
                  <div>
                    <p className="font-semibold">Delivered</p>
                    <p className="text-sm text-gray-600">Order delivered to your address</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about your order, feel free to contact our support team.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Contact Support 📞
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
