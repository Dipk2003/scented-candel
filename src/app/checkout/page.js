"use client"
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="mb-6 border-b pb-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between py-2">
                  <span>{item.name}</span>
                  <span className="font-semibold">₹{item.price}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
              <textarea
                name="address"
                placeholder="Shipping Address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Place Order
              </button>
            </form>
          </>
        )}
        <button
          onClick={() => router.push("/shop")}
          className="mt-6 w-full text-blue-500 font-semibold hover:underline text-center"
        >
          &larr; Back to Shop
        </button>
      </div>
    </div>
  );
}
