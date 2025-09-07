"use client";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Privacy Policy</h1>

      <p className="text-gray-600 mb-4">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">1. Information We Collect</h2>
      <p className="text-gray-600 mb-4">
        - We collect personal information such as name, email, phone number, and shipping address when you place an order. <br />
        - Payment information is processed securely via third-party payment gateways and is not stored on our servers. <br />
        - We use cookies and analytics tools to improve user experience.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">2. How We Use Your Information</h2>
      <p className="text-gray-600 mb-4">
        - To process and deliver your orders efficiently. <br />
        - To send updates, promotions, and order-related notifications. <br />
        - To enhance website security and user experience.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">3. Sharing Your Information</h2>
      <p className="text-gray-600 mb-4">
        - We do not sell or rent your personal data to third parties. <br />
        - Information may be shared with trusted partners like payment gateways and shipping providers for order fulfillment. <br />
        - We may disclose information if required by law.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">4. Cookies & Tracking Technologies</h2>
      <p className="text-gray-600 mb-4">
        - We use cookies to store session information and enhance user experience. <br />
        - You can manage cookie preferences through your browser settings. <br />
        - Analytics tools help us track website performance and improve our services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">5. Data Security</h2>
      <p className="text-gray-600 mb-4">
        - We implement strong security measures to protect your data from unauthorized access. <br />
        - Payment transactions are encrypted and processed securely. <br />
        - While we take necessary precautions, no online system is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">6. Your Rights & Choices</h2>
      <p className="text-gray-600 mb-4">
        - You can request access, correction, or deletion of your personal data. <br />
        - Opt-out of marketing emails anytime using the unsubscribe link. <br />
        - Manage cookie settings through your browser.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">7. Contact Us</h2>
      <p className="text-gray-600 mb-4">
        If you have any questions regarding our Privacy Policy, feel free to{" "}
        <Link href="/contact" className="text-blue-600 hover:underline">
          Contact Us
        </Link>.
      </p>

      <p className="text-gray-500 mt-10 text-center">© {new Date().getFullYear()} Your Store Name. All Rights Reserved.</p>
    </div>
  );
}
