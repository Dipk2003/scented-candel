
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Lavender Candle", price: 499, image: "/images/p1.jpg" },
  { id: 2, name: "Vanilla Candle", price: 399, image: "/images/p2.jpg" },
  { id: 3, name: "Rose Candle", price: 450, image: "/images/p3.jpg" },
  { id: 4, name: "Jasmine Candle", price: 550, image: "/images/p4.jpg" },
];

export default function ProductList() {
  console.log("✅ ProductList Rendering...");
  console.log("🛒 Products Array:", products);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Shop Our Best-Selling Candles
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => {
          console.log(`🔥 Rendering Product ${index + 1}:`, product); // Debug each product
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
