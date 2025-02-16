"use client";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCartStore();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-lg text-gray-500">Your cart is empty.</p>
          <Link href="/shop">
            <span className="inline-block mt-4 text-blue-600 font-semibold text-lg hover:underline">
              Continue Shopping →
            </span>
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-6">
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <Image src={item.image} alt={item.name} width={70} height={70} className="rounded-lg shadow" />
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-500 text-sm">₹{item.price}</p>
                  </div>
                </div>
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
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow-md"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Total Section */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-xl font-semibold">Total:</p>
            <p className="text-xl font-bold">₹{totalPrice}</p>
          </div>

          {/* Cart Actions */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
            <button
              onClick={clearCart}
              className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition shadow-md w-full sm:w-auto"
            >
              Clear Cart
            </button>
            <Link href="/checkout">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md w-full sm:w-auto">
                Proceed to Checkout →
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
