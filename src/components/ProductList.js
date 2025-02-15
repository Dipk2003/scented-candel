"use client";
import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Lavender Candle", price: 499, image: "/images/lavender.jpg" },
  { id: 2, name: "Vanilla Candle", price: 399, image: "/images/vanilla.jpg" },
  { id: 3, name: "Rose Candle", price: 450, image: "/images/rose.jpg" },
  { id: 4, name: "Jasmine Candle", price: 550, image: "/images/jasmine.jpg" },
];

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Shop Our Best-Selling Candles</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
