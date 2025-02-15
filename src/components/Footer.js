import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16 bg-[url('/background-pattern.png')] bg-cover">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* 🌟 Brand Description Section */}
        <div>
          <h2 className="text-lg font-bold">Your Brand Name</h2>
          <p className="text-sm mt-2">
            Your brand's introduction goes here. Highlight your scented candles, premium fragrances,
            and how they enhance ambiance and relaxation.
          </p>

          {/* 🌍 Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaYoutube className="cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>

        {/* 🔗 Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold">QUICK LINKS</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">Track Your Order</a></li>
            {/* Updated About Us & Contact Links using Next.js Link */}
            <li><Link href="/about" className="hover:text-gray-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
            <li><a href="#" className="hover:text-gray-400">Blog Posts</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
          </ul>
        </div>

        {/* 📜 Policies Section */}
        <div>
          <h3 className="text-lg font-semibold">OUR POLICIES</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-400">Return & Replacement</a></li>
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
        © {new Date().getFullYear()}, Your Brand Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
