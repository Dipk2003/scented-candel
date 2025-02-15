import ProductCard from "../../components/ProductCard";

export default function Shop() {
  const products = [
    {
      id: 1,
      image: "/images/p1.jpg", // Placeholder image
      name: "Vanilla Scented Candle",
      price: 499,
    },
    {
      id: 2,
      image: "/images/p2.jpg",
      name: "Lavender Bliss",
      price: 599,
    },
    {
      id: 3,
      image: "/images/p3.jpg",
      name: "Rose Petal Glow",
      price: 699,
    },
    {
      id: 4,
      image: "/images/p4.jpg",
      name: "Ocean Breeze",
      price: 799,
    },
  ];

  return (
    <section className="py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Shop Our Best-Selling Candles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
