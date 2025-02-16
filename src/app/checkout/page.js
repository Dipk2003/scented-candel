"use client";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function CheckoutPage() {
  const { cart, clearCart } = useCartStore();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) {
      setError("All fields are required!");
      return;
    }
    clearCart();
    router.push("/order-confirmation");
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">🛍️ Checkout</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <>
            {/* Order Summary */}
            <div className="mb-6 border-b pb-4">
              <h2 className="text-xl font-semibold mb-4">📝 Order Summary</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-lg" />
                      <div>
                        <p className="text-lg font-semibold">{item.name}</p>
                        <p className="text-gray-500 text-sm">₹{item.price} x {item.quantity}</p>
                      </div>
                    </div>
                    <span className="text-lg font-bold">₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-bold text-xl mt-4">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                onChange={handleChange}
              />
              <textarea
                name="address"
                placeholder="Shipping Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                rows="3"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow-md"
              >
                ✅ Place Order
              </button>
            </form>
          </>
        )}

        {/* Back to Shop */}
        <button
          onClick={() => router.push("/product")}
          className="mt-6 w-full text-blue-500 font-semibold hover:underline text-center"
        >
          &larr; Back to Shop
        </button>
      </div>
    </div>
  );
}
