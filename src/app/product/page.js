import HeroSection from "../../components/HeroSection";
import ProductCard from "../../components/ProductCard";


const products = [
  { id: 1, image: "/images/p1.jpg", title: "Vanilla Candle", price: 499 },
  { id: 2, image: "/images/p2.jpg", title: "Lavender Bliss", price: 599 },
]
export default function Shop() {

  return (
    <div className="px-6">
      <HeroSection />
      <h1 className="text-3xl font-bold text-center my-6">Shop Our Best-Selling Candles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
