const About = () => {
    return (
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
          Welcome to our store! We specialize in crafting high-quality, handmade scented candles that bring warmth and relaxation to your home.  
          Our goal is to create candles with the perfect blend of fragrance and style, making them a wonderful addition to your space or the perfect gift for a loved one.  
        </p>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="text-lg text-gray-600 mt-4 list-disc list-inside mx-auto max-w-md">
            <li>100% Natural & Handmade</li>
            <li>Premium Quality Fragrances</li>
            <li>Eco-Friendly & Long-Lasting</li>
            <li>Fast & Secure Shipping</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default About;
  