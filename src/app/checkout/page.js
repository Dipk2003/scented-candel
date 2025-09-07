"use client";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function CheckoutPage() {
  const { cart, clearCart } = useCartStore();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handlePayment = async () => {
    if (!razorpayLoaded) {
      setError("❌ Payment system not loaded. Try again in a few seconds.");
      return;
    }

    if (!form.name || !form.email || !form.address) {
      setError("❌ All fields are required! Please fill in all details.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data, error: orderError } = await supabase
        .from("orders")
        .insert([{ name: form.name, email: form.email, address: form.address, total: totalAmount, status: "Pending" }])
        .select();

      if (orderError) throw new Error("❌ Failed to save order. Please try again later.");
      const order = data[0];

      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount }),
      });

      if (!response.ok) throw new Error(`❌ API request failed: ${response.statusText}`);

      const orderData = await response.json();
      if (!orderData.id) throw new Error("❌ Failed to create Razorpay order. Check API response.");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: totalAmount * 100,
        currency: "INR",
        name: "Scented Candles Shop",
        description: "Purchase of candles",
        order_id: orderData.id,
        handler: async (response) => {
          try {
            await supabase.from("orders").update({ status: "Paid" }).eq("id", order.id);
            clearCart();
            router.push("/order-confirmation");
          } catch (updateError) {
            setError("❌ Payment successful, but order status update failed.");
          }
        },
        prefill: { name: form.name, email: form.email },
        theme: { color: "#3399cc" },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();

      razorpayInstance.on("payment.failed", (response) => {
        setError(`❌ Payment failed: ${response.error.description}`);
        setLoading(false);
      });
    } catch (err) {
      setError(`❌ ${err.message || "Something went wrong, please try again."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6">🛍️ Checkout</h1>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <>
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
            <form className="space-y-4">
              <input type="text" name="name" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm" onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm" onChange={handleChange} />
              <textarea name="address" placeholder="Shipping Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-sm" rows="3" onChange={handleChange}></textarea>
              <button type="button" onClick={handlePayment} className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition shadow-md" disabled={loading}>
                {loading ? "Processing..." : "💳 Pay with Razorpay"}
              </button>
            </form>
          </>
        )}

        <button onClick={() => router.push("/product")} className="mt-6 w-full text-blue-500 font-semibold hover:underline text-center">
          &larr; Back to Shop
        </button>
      </div>
    </div>
  );
}
