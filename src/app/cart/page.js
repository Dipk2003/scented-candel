"use client";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity, initializeCart } = useCartStore();
  const [showConfirm, setShowConfirm] = useState(null);

  // Initialize cart from local storage on component mount
  useEffect(() => {
    initializeCart();
  }, []);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto py-10 px-6 sm:px-10 lg:px-16">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center mt-12">
          <Image src="/images/empty-cart.png" alt="Empty Cart" width={200} height={200} className="mx-auto mb-5" />
          <p className="text-lg text-gray-500">Your cart is empty. Start shopping now!</p>
          <Link href="/shop">
            <span className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg text-lg font-semibold transition hover:bg-blue-700 shadow-md">
              🛍️ Continue Shopping
            </span>
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-6 border">
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-5 rounded-lg shadow-md border"
              >
                {/* Product Info with Link */}
                <div className="flex items-center space-x-5">
                  <Link href={`/shop/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.title || "Product Image"}
                      width={80}
                      height={80}
                      className="rounded-lg shadow-md object-cover cursor-pointer hover:opacity-80 transition"
                    />
                  </Link>
                  <div>
                    <Link href={`/shop/${item.id}`}>
                      <p className="text-lg font-semibold hover:text-blue-600 cursor-pointer">{item.title}</p>
                    </Link>
                    <p className="text-gray-600 text-md font-medium">₹{item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="bg-gray-300 text-black px-3 py-1 rounded-full hover:bg-gray-400 transition shadow-sm"
                  >
                    ➖
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-300 text-black px-3 py-1 rounded-full hover:bg-gray-400 transition shadow-sm"
                  >
                    ➕
                  </button>
                </div>

                {/* Remove with Confirmation */}
                <button
                  onClick={() => setShowConfirm(item.id)}
                  className="mt-4 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow-md"
                >
                  ❌ Remove
                </button>

                {showConfirm === item.id && (
                  <div className="absolute bg-white p-4 border rounded-lg shadow-lg mt-3">
                    <p className="text-sm text-gray-800 mb-2">Are you sure you want to remove this item?</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          removeFromCart(item.id);
                          setShowConfirm(null);
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => setShowConfirm(null)}
                        className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cart Total */}
          <div className="flex justify-between items-center mt-6 border-t pt-5">
            <p className="text-xl font-semibold">Total:</p>
            <p className="text-xl font-bold text-gray-800">₹{totalPrice}</p>
          </div>

          {/* Cart Actions */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
            <button
              onClick={clearCart}
              className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition shadow-md w-full sm:w-auto"
            >
              🗑️ Clear Cart
            </button>
            <Link href="/checkout">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition shadow-md w-full sm:w-auto">
                ✅ Proceed to Checkout →
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
