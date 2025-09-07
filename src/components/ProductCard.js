export default function ProductCard({ product }) {
  if (!product) {
    return <p className="text-red-500 text-center">❌ Error: Product not found!</p>;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 text-center transform hover:scale-[1.03]">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
      <p className="text-gray-600 text-lg font-medium mb-2">₹{product.price}</p>

      {product.features?.length > 0 && (
        <ul className="text-sm text-gray-500 mb-3">
          {product.features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      )}

      <button className="mt-2 px-5 py-2 bg-black text-white text-sm font-medium rounded-lg transition-all duration-300 hover:bg-gray-800">
        Buy Now
      </button>
    </div>
  );
}
