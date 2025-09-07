"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    id: 1,
    question: "What types of candles do you offer?",
    answer: "We offer a wide variety of candles including scented candles, decorative candles, soy wax candles, and gift sets. All our candles are handcrafted with premium ingredients and natural fragrances."
  },
  {
    id: 2,
    question: "How long do your candles burn?",
    answer: "Our candles have different burn times depending on the size: Small candles (30-35 hours), Medium candles (45-50 hours), Large candles (60-70 hours). We use high-quality wicks for even burning."
  },
  {
    id: 3,
    question: "Are your candles eco-friendly?",
    answer: "Yes! We use 100% natural soy wax, cotton wicks, and sustainable packaging. Our candles are vegan, cruelty-free, and made with environmentally conscious practices."
  },
  {
    id: 4,
    question: "What is your shipping policy?",
    answer: "We offer free shipping on orders above ₹999. Standard shipping takes 3-5 business days within India. We carefully package all candles to prevent damage during transit."
  },
  {
    id: 5,
    question: "Can I return or exchange candles?",
    answer: "Due to hygiene reasons, we only accept returns for damaged or defective products. You must contact us within 48 hours of delivery with proof of damage for a replacement or refund."
  },
  {
    id: 6,
    question: "Do you offer custom scents or personalized candles?",
    answer: "Yes! We offer custom scent blending and personalized labels for special occasions. Contact us with your requirements, and we'll create something unique for you."
  },
  {
    id: 7,
    question: "How should I care for my candles?",
    answer: "Trim the wick to 1/4 inch before each use, burn for no more than 4 hours at a time, keep away from drafts, and store in a cool, dry place. This ensures optimal performance and safety."
  },
  {
    id: 8,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and digital wallets through our secure Razorpay payment gateway. All transactions are encrypted and secure."
  },
  {
    id: 9,
    question: "Do you offer bulk orders or wholesale pricing?",
    answer: "Yes! We offer special pricing for bulk orders (50+ candles) and wholesale opportunities for retailers. Contact us for custom quotes and business partnerships."
  },
  {
    id: 10,
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive a tracking number via email. You can also use our Track Order page with your Order ID and email address to check real-time status."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">❓ Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our scented candles and services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openItems.has(faq.id) ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.has(faq.id) && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions? 🤔</h2>
          <p className="text-lg mb-6">
            Our customer support team is here to help you with any queries about our products or services.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              📧 Contact Us
            </a>
            <a
              href="tel:+919999999999"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              📞 Call Support
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
          <a
            href="/shop"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">🛍️</div>
            <h3 className="font-semibold text-gray-800">Shop Candles</h3>
            <p className="text-sm text-gray-600 mt-1">Browse our collection</p>
          </a>
          <a
            href="/track-order"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">📦</div>
            <h3 className="font-semibold text-gray-800">Track Order</h3>
            <p className="text-sm text-gray-600 mt-1">Check order status</p>
          </a>
          <a
            href="/return-replacement"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-2">↩️</div>
            <h3 className="font-semibold text-gray-800">Returns</h3>
            <p className="text-sm text-gray-600 mt-1">Return policy</p>
          </a>
        </div>
      </div>
    </div>
  );
}
