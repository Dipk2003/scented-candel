"use client";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "../store/useCartStore";  
import { FiShoppingCart, FiChevronDown } from "react-icons/fi";


const Header = () => {
  const { cart } = useCartStore();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold tracking-wide">Scented Candles</Link>

        <nav>
          <ul className="flex space-x-6 font-medium relative">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>

            <li 
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="hover:text-gray-300 flex items-center gap-1">
                Categories <FiChevronDown className="text-sm" />
              </span>

              {showDropdown && (
                <ul className="absolute left-0 top-10 bg-white text-gray-900 shadow-lg rounded-lg mt-2 w-52 z-50 border transition-all duration-200">
                  {["Scented Candles", "Gift Sets", "Decorative Candles"].map((category, index) => (
                    <li key={index}>
                      <Link href={`/categories/${category.toLowerCase().replace(" ", "-")}`} 
                        className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link href="/candles" className="hover:text-gray-300">Candles</Link></li>
            <li><Link href="/gift-sets" className="hover:text-gray-300">Gift Sets</Link></li>
            <li><Link href="/sale" className="text-red-400 hover:text-red-300">Sale</Link></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-6">
          <Link href="/cart" className="relative">
            <FiShoppingCart className="text-2xl hover:text-gray-300" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
