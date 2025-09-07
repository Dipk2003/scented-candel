"use client";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Terms & Conditions</h1>

      <p className="text-gray-600 mb-4">
        Welcome to our scented candle store! By using our website and purchasing our products, you agree to the following terms and conditions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">1. General</h2>
      <p className="text-gray-600 mb-4">
        These Terms & Conditions govern your use of our website and services. We may update these terms at any time without notice.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">2. Orders & Payments</h2>
      <p className="text-gray-600 mb-4">
        - All orders must be paid in full before shipment. <br />
        - We accept online payments via secure payment gateways. <br />
        - Once an order is placed, cancellations are not allowed.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">3. Shipping & Delivery</h2>
      <p className="text-gray-600 mb-4">
        - Orders are processed within 2-3 business days. <br />
        - Shipping times vary depending on your location. <br />
        - We are not responsible for delays caused by courier services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">4. Returns & Refunds</h2>
      <p className="text-gray-600 mb-4">
        - Due to the nature of our products, returns are only accepted if the item is damaged on arrival. <br />
        - To request a return, contact us within 48 hours of delivery with proof of damage. <br />
        - Refunds will be processed within 7-10 business days after approval.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">5. Privacy Policy</h2>
      <p className="text-gray-600 mb-4">
        - We respect your privacy and do not share your personal data with third parties. <br />
        - Your payment details are processed securely and are never stored on our servers.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">6. Contact Us</h2>
      <p className="text-gray-600 mb-4">
        If you have any questions, please reach out to our support team at{" "}
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact Us
        </Link>.
      </p>

      <p className="text-gray-500 mt-10 text-center">© {new Date().getFullYear()} scented-candels. All Rights Reserved.</p>
    </div>
  );
}
