export default function ProductCard({ product }) {
  console.log("📦 ProductCard received product:", product);

  if (!product) {
    return (
      <p className="text-red-500 text-center">
        ❌ Error: Product not found!
      </p>
    );
  }

  return (
    <div className="border p-4 rounded-lg shadow-md text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <button className="mt-2 px-4 py-2 bg-black text-white rounded-md">
        Buy Now
      </button>
    </div>
  );
}
