export default function OrderConfirmation() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold text-green-600">🎉 Order Confirmed!</h1>
          <p className="text-gray-700 mt-4">Thank you for your purchase. Your order has been placed successfully.</p>
          <a href="/product" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold">
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }
  