"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("products").select("*");
      if (error) console.error("Error fetching products:", error);
      else setProducts(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Shop Our Best-Selling Candles
        </h1>
        
        {loading ? (
          <p className="text-center text-gray-600">Loading products...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-center col-span-4 text-gray-500">
                No products available.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
