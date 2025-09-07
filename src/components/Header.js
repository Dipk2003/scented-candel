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
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide text-white hover:text-gray-300 transition">
          Scented Candles
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-2xl text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav className={`lg:flex items-center ${mobileMenuOpen ? "absolute top-16 left-0 w-full bg-gray-900 p-6" : "hidden lg:flex"}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-lg font-medium">
            <li><Link href="/" className="hover:text-gray-300 py-2 block">Home</Link></li>
            
            {/* Categories Dropdown */}
            <li 
              className="relative flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
             <Link href="/categories">
             <span className="hover:text-gray-300 flex items-center gap-1 py-2">
                Categories <FiChevronDown className="text-sm" />
              </span>
             </Link> 
              {showDropdown && (
                <ul className="absolute left-0 top-10 bg-white text-gray-900 shadow-lg rounded-lg mt-2 w-56 border lg:w-auto lg:bg-gray-800 lg:text-white transition-all duration-200">
                  {[
                    { name: "Scented Candles", link: "/category/Scented-Candles" },
                    { name: "Decorative Candles", link: "/category/Decorative-Candles" },
                    { name: "Gift Sets", link: "/category/Gift-Sets" }
                  ].map((item, index) => (
                    <li key={index}>
                      <Link href={item.link} 
                        className="block px-5 py-3 hover:bg-gray-100 rounded-lg lg:hover:bg-gray-700 lg:hover:text-gray-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            <li><Link href="/candles" className="hover:text-gray-300 py-2 block">Candles</Link></li>
            <li><Link href="/category/Gift-Sets" className="hover:text-gray-300 py-2 block">Gift Sets</Link></li>
            <li><Link href="/sale" className="text-red-400 hover:text-red-300 py-2 block">Sales</Link></li>
          </ul>
        </nav>

        {/* Cart Icon */}
        <div className="relative">
          <Link href="/cart" className="relative text-3xl text-white hover:text-gray-300">
            <FiShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
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
