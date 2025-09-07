"use client";
import Link from "next/link";

export default function ReturnPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Return & Replacement Policy</h1>

      <p className="text-gray-600 mb-4">
        We want you to love our products! If you're not satisfied with your purchase, here’s our return and replacement policy.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">1. Eligibility for Returns & Replacements</h2>
      <p className="text-gray-600 mb-4">
        - You can request a return or replacement within <strong>7 days</strong> of receiving your order. <br />
        - Items must be **unused, in their original packaging, and in the same condition** as received. <br />
        - Personalized or used products **cannot be returned** unless defective.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">2. Return Process</h2>
      <p className="text-gray-600 mb-4">
        - Email us at **support@yourstore.com** with your order details and issue. <br />
        - Our team will verify your request and provide return instructions. <br />
        - Once we receive and inspect the product, a **refund or replacement** will be processed.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">3. Refund Policy</h2>
      <p className="text-gray-600 mb-4">
        - Refunds are processed to the **original payment method** within 5-7 business days. <br />
        - If payment was made via **Cash on Delivery (COD)**, store credit or bank transfer will be provided. <br />
        - Shipping charges are **non-refundable** unless the item was defective.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">4. Replacement Policy</h2>
      <p className="text-gray-600 mb-4">
        - If you receive a **damaged or defective product**, we offer a free replacement. <br />
        - You must share **unboxing pictures/videos** as proof of damage. <br />
        - The replacement process takes **5-10 business days** after approval.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">5. Non-Returnable Items</h2>
      <p className="text-gray-600 mb-4">
        - **Used or opened candles** cannot be returned for hygiene reasons. <br />
        - **Customized or personalized** products are non-returnable. <br />
        - Clearance sale items are **final sale** and not eligible for return.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">6. Contact Us</h2>
      <p className="text-gray-600 mb-4">
        If you have any questions about our Return & Replacement Policy, please{" "}
        <Link href="/contact" className="text-blue-600 hover:underline">
          contact us
        </Link>.
      </p>

      <p className="text-gray-500 mt-10 text-center">© {new Date().getFullYear()} Your Store Name. All Rights Reserved.</p>
    </div>
  );
}
