"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [quickLinks, setQuickLinks] = useState([]);
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    // Simulating fetching quick links from a database or API
    setQuickLinks([
      { label: "Track Your Order", url: "/track-order" },
      { label: "About Us", url: "/about" },
      { label: "Contact", url: "/contact" },
      { label: "Blog Posts", url: "/blog" },
      { label: "FAQ", url: "/faq" },
    ]);

    setPolicies([
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Shipping & Delivery", url: "/shipping-delivery" },
      { label: "Terms & Conditions", url: "/terms" },
      { label: "Return & Replacement", url: "/return-replacement" },
    ]);
  }, []);

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16 bg-[url('/background-pattern.png')] bg-cover">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* 🌟 Brand Description Section */}
        <div>
          <h2 className="text-lg font-bold">Scented Candle</h2>
          <p className="text-sm mt-2">
            Your brand's introduction goes here. Highlight your scented candles, premium fragrances,
            and how they enhance ambiance and relaxation.
          </p>

          {/* 🌍 Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-gray-400 transition duration-200" />
            <FaInstagram className="cursor-pointer hover:text-gray-400 transition duration-200" />
            <FaYoutube className="cursor-pointer hover:text-gray-400 transition duration-200" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-400 transition duration-200" />
          </div>
        </div>

        {/* 🔗 Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold">QUICK LINKS</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {quickLinks?.map((link, index) => (
              <li key={index}>
                <Link href={link.url} className="hover:text-gray-400 transition duration-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 📜 Policies Section */}
        <div>
          <h3 className="text-lg font-semibold">OUR POLICIES</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {policies?.map((policy, index) => (
              <li key={index}>
                <Link href={policy.url} className="hover:text-gray-400 transition duration-200">
                  {policy.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ✉️ Newsletter Signup Section */}
        <div>
          <h3 className="text-lg font-semibold">SIGN UP & SAVE</h3>
          <p className="text-sm mt-2">Stay informed about upcoming offers!</p>
          <div className="mt-4 relative">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 px-3 py-1 rounded-md">
              &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* ⚡ Footer Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()}, scented-candles. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
