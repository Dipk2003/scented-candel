import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Lavender Candle", price: 499, image: "/images/p1.jpg" },
  { id: 2, name: "Vanilla Candle", price: 399, image: "/images/p2.jpg" },
  { id: 3, name: "Rose Candle", price: 450, image: "/images/p3.jpg" },
  { id: 4, name: "Jasmine Candle", price: 550, image: "/images/p4.jpg" },
];

export default function ProductList() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Shop Our Best-Selling Candles
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
