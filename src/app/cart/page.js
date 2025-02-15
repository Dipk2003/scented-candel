
"use client";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="container mx-auto py-10">
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/categories" className="text-blue-500">Shop now</Link></p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="border-b py-2 flex justify-between">
              <p>{item.name} - ₹{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={clearCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Clear Cart</button>
        </div>
      )}
    </div>
  );
}
