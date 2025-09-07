"use client";
import { useState, useEffect } from "react";

const RazorpayPayment = ({ amount }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    };
    loadScript();
  }, []);

  const handlePayment = async () => {
    setLoading(true);
    
    try {
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.error);

      const { id: order_id } = data.order;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Public Key
        amount: amount * 100,
        currency: "INR",
        name: "Scented Candles",
        description: "Order Payment",
        order_id,
        handler: function (response) {
          console.log("Payment Successful", response);
          alert("Payment Successful!");
        },
        prefill: {
          name: "Dipanshu Pandey",
          email: "user@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {loading ? "Processing..." : "Pay with Razorpay"}
    </button>
  );
};

export default RazorpayPayment;
