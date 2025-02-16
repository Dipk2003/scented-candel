"use client";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "../store/useCartStore";  
import { FiShoppingCart, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { cart } = useCartStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-bold tracking-wide">Scented Candles</Link>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-2xl" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav className={`lg:flex space-x-6 font-medium relative ${mobileMenuOpen ? "absolute top-16 left-0 w-full bg-gray-900 p-4 z-50" : "hidden lg:flex"}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
            <li><Link href="/" className="hover:text-gray-300 block py-2">Home</Link></li>

            <li 
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <span className="hover:text-gray-300 flex items-center gap-1 py-2">
                Categories <FiChevronDown className="text-sm" />
              </span>

              {showDropdown && (
                <ul className="absolute left-0 top-10 bg-white text-gray-900 shadow-lg rounded-lg mt-2 w-52 z-50 border transition-all duration-200 lg:static lg:w-auto lg:bg-transparent lg:text-white">
                  {["Scented Candles", "Gift Sets", "Decorative Candles"].map((category, index) => (
                    <li key={index}>
                      <Link href={`/categories/${category.toLowerCase().replace(" ", "-")}`} 
                        className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg lg:hover:bg-transparent lg:hover:text-gray-300"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li><Link href="/candles" className="hover:text-gray-300 block py-2">Candles</Link></li>
            <li><Link href="/gift-sets" className="hover:text-gray-300 block py-2">Gift Sets</Link></li>
            <li><Link href="/sale" className="text-red-400 hover:text-red-300 block py-2">Sale</Link></li>
          </ul>
        </nav>

        {/* Cart Icon */}
        <div className="relative">
          <Link href="/cart" className="relative text-2xl hover:text-gray-300">
            <FiShoppingCart />
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

