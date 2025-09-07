"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Candle Care: Make Your Candles Last Longer",
    excerpt: "Learn the best practices for maintaining your scented candles to ensure they burn evenly and last their full duration.",
    image: "/images/p1.jpg",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Care Tips",
    content: `Proper candle care is essential for getting the most out of your investment. Here are our top tips:

1. **Trim the Wick**: Always trim your wick to 1/4 inch before lighting. This prevents smoking and ensures even burning.

2. **First Burn Matters**: Let your candle burn for 2-3 hours on the first use to create an even wax pool across the surface.

3. **Avoid Drafts**: Keep candles away from fans, air conditioning, and open windows to prevent uneven burning.

4. **Storage**: Store candles in a cool, dry place away from direct sunlight to preserve their scent and color.

5. **Safety First**: Never leave a burning candle unattended and keep away from children and pets.`,
  },
  {
    id: 2,
    title: "Aromatherapy Benefits: How Scented Candles Can Improve Your Wellbeing",
    excerpt: "Discover the therapeutic benefits of different candle scents and how they can enhance your mood and mental health.",
    image: "/images/p2.jpg",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Wellness",
    content: `Scented candles offer more than just pleasant fragrances - they can significantly impact your wellbeing:

**Lavender**: Known for its calming properties, perfect for bedtime routines and stress relief.

**Vanilla**: Creates a warm, comforting atmosphere that can reduce anxiety and promote relaxation.

**Eucalyptus**: Helps clear the mind and improve focus, great for work spaces.

**Rose**: Promotes feelings of love and self-care, perfect for romantic settings.

**Sandalwood**: Aids in meditation and spiritual practices, promoting inner peace.`,
  },
  {
    id: 3,
    title: "Eco-Friendly Candles: Why Soy Wax is Better for You and the Environment",
    excerpt: "Learn about the environmental benefits of soy wax candles and why they're a healthier choice for your home.",
    image: "/images/p3.jpg",
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Sustainability",
    content: `Soy wax candles are becoming increasingly popular, and for good reason:

**Renewable Resource**: Soy wax comes from soybean oil, making it a renewable and sustainable option.

**Cleaner Burning**: Produces less soot and toxins compared to paraffin wax candles.

**Longer Lasting**: Soy candles burn 30-50% longer than traditional paraffin candles.

**Better Scent Throw**: Natural soy wax holds and releases fragrance more effectively.

**Biodegradable**: Completely natural and biodegradable, making cleanup easier.`,
  },
  {
    id: 4,
    title: "Creating the Perfect Ambiance: Candle Placement Tips for Every Room",
    excerpt: "Master the art of candle placement to create the perfect atmosphere in different areas of your home.",
    image: "/images/p4.jpg",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Home Decor",
    content: `Strategic candle placement can transform any space:

**Living Room**: Group candles of varying heights on coffee tables or mantlepieces for visual interest.

**Bedroom**: Place calming scents like lavender on nightstands for a relaxing atmosphere.

**Bathroom**: Use fresh scents like eucalyptus or mint around the bathtub for a spa-like experience.

**Dining Room**: Create romantic dinner settings with unscented or lightly scented candles as centerpieces.

**Kitchen**: Choose food-friendly scents like vanilla or cinnamon that complement cooking aromas.`,
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Care Tips", "Wellness", "Sustainability", "Home Decor"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-6 text-blue-600 hover:text-blue-800 font-semibold flex items-center"
          >
            ← Back to Blog
          </button>
          
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src={selectedPost.image}
              alt={selectedPost.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-8">
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                  {selectedPost.category}
                </span>
                <span>{selectedPost.date}</span>
                <span>{selectedPost.readTime}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-6">{selectedPost.title}</h1>
              
              <div className="prose prose-lg text-gray-600 whitespace-pre-line">
                {selectedPost.content}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">📝 Candle Care & Lifestyle Blog</h1>
          <p className="text-lg text-gray-600">
            Tips, tricks, and insights for candle lovers
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-2 rounded-xl shadow-md">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-blue-600 font-semibold hover:text-blue-800">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">📬 Subscribe to Our Blog</h2>
          <p className="text-lg mb-6">
            Get the latest candle care tips, wellness advice, and exclusive offers delivered to your inbox!
          </p>
          <div className="max-w-md mx-auto flex space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Related Links */}
        <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
          <Link href="/shop" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">🛍️</div>
            <h3 className="font-semibold text-gray-800">Shop Candles</h3>
          </Link>
          <Link href="/categories" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">📂</div>
            <h3 className="font-semibold text-gray-800">Categories</h3>
          </Link>
          <Link href="/sale" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">🔥</div>
            <h3 className="font-semibold text-gray-800">Sale</h3>
          </Link>
          <Link href="/contact" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-semibold text-gray-800">Contact</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
