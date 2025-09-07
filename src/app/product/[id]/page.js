"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ShareIcon } from "@heroicons/react/24/outline";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCartStore();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", params.id)
          .single();

        if (error || !data) {
          // Fallback to mock data if database is empty
          setProduct({
            id: params.id,
            name: "Premium Vanilla Candle",
            title: "Premium Vanilla Candle",
            price: 699,
            image: "/images/candle1.jpg",
            images: ["/images/candle1.jpg", "/images/candle2.jpg", "/images/candle3.jpg"],
            description: "Handcrafted vanilla scented candle made with 100% natural soy wax. Perfect for creating a warm and inviting atmosphere in any room.",
            features: [
              "100% Natural Soy Wax",
              "45-50 hour burn time",
              "Hand-poured with love",
              "Premium vanilla fragrance",
              "Cotton wick for clean burning",
              "Eco-friendly packaging"
            ],
            rating: 4.8,
            reviewCount: 126,
            inStock: true,
            category: "Scented Candles",
            weight: "220g",
            dimensions: "3.5\" x 4.2\"",
          });
        } else {
          setProduct(data);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  // Mock reviews data
  useEffect(() => {
    setReviews([
      {
        id: 1,
        name: "Priya Sharma",
        rating: 5,
        comment: "Amazing quality candle! The vanilla scent is so soothing and long-lasting.",
        date: "2024-01-20",
      },
      {
        id: 2,
        name: "Rahul Kumar",
        rating: 4,
        comment: "Great product, burns evenly and smells wonderful. Will definitely order again!",
        date: "2024-01-18",
      },
      {
        id: 3,
        name: "Anita Patel",
        rating: 5,
        comment: "Perfect for my meditation sessions. The fragrance is calming and pure.",
        date: "2024-01-15",
      },
    ]);
  }, []);

  const handleAddToCart = () => {
    const cartProduct = {
      id: product.id,
      title: product.name || product.title,
      price: product.price,
      image: product.image || product.images?.[0],
      quantity: quantity,
    };
    
    for (let i = 0; i < quantity; i++) {
      addToCart(cartProduct);
    }
    
    alert(`Added ${quantity} item(s) to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/cart");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => router.push("/shop")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const productImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <span>Home</span> <span className="mx-2">/</span>
          <span>Shop</span> <span className="mx-2">/</span>
          <span className="text-gray-800 font-semibold">{product.name || product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-4">
              <Image
                src={productImages[selectedImage]}
                alt={product.name || product.title}
                width={600}
                height={600}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="flex space-x-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border-2 rounded-lg overflow-hidden ${
                      selectedImage === index ? "border-blue-500" : "border-gray-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Product view ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-800">{product.name || product.title}</h1>
              <div className="flex space-x-2">
                <button
                  onClick={() => setWishlist(!wishlist)}
                  className={`p-2 rounded-full ${wishlist ? "text-red-500 bg-red-50" : "text-gray-400 bg-gray-50"}`}
                >
                  <HeartIcon className="w-6 h-6" />
                </button>
                <button className="p-2 rounded-full text-gray-400 bg-gray-50">
                  <ShareIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating || 4.8) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviewCount || 126} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-800">₹{product.price}</span>
              <span className={`ml-4 px-3 py-1 rounded-full text-sm font-semibold ${
                product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Product Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Features:</h3>
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Specifications */}
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Specifications:</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Weight:</span>
                  <span className="ml-2 text-gray-600">{product.weight || "220g"}</span>
                </div>
                <div>
                  <span className="font-semibold">Dimensions:</span>
                  <span className="ml-2 text-gray-600">{product.dimensions || "3.5\" x 4.2\""}</span>
                </div>
                <div>
                  <span className="font-semibold">Category:</span>
                  <span className="ml-2 text-gray-600">{product.category || "Scented Candles"}</span>
                </div>
                <div>
                  <span className="font-semibold">Burn Time:</span>
                  <span className="ml-2 text-gray-600">45-50 hours</span>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Quantity:</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-gray-800 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🛒 Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🚀 Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-600">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 ml-14">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Write a Review
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image
                  src={`/images/candle${item}.jpg`}
                  alt={`Related product ${item}`}
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Related Candle {item}</h3>
                  <p className="text-gray-600 mb-2">₹{499 + item * 100}</p>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
