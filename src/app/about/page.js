const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-gray-100 to-gray-300 py-20">
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">About Us ✨</h1>

        {/* Brand Story */}
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Welcome to <span className="font-semibold">Scented Bliss</span>! 🌿  
          We craft **handmade scented candles** infused with love and natural fragrances.  
          Our goal is to create **eco-friendly, long-lasting** candles that bring warmth, relaxation, and style to your home. 🕯️✨  
        </p>

        {/* Why Choose Us */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold">Why Choose Us? 💡</h2>
          <ul className="text-lg text-gray-600 mt-4 space-y-3">
            <li>✅ 100% Natural & Handmade</li>
            <li>✅ Premium Quality Fragrances</li>
            <li>✅ Eco-Friendly & Long-Lasting</li>
            <li>✅ Fast & Secure Shipping</li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Meet Our Team 👩‍🎨👨‍💻</h2>
          <div className="flex justify-center gap-6 mt-6">
            <div className="flex flex-col items-center">
              <img src="/images/team1.jpg" alt="Founder" className="w-24 h-24 rounded-full shadow-lg" />
              <p className="mt-2 text-gray-800 font-semibold">Dipanshu Pandey</p>
              <p className="text-sm text-gray-600">Founder & Creator</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/team2.jpg" alt="Co-Founder" className="w-24 h-24 rounded-full shadow-lg" />
              <p className="mt-2 text-gray-800 font-semibold">Your Sister</p>
              <p className="text-sm text-gray-600">Co-Founder & Designer</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold">Join Our Candle Community! 🌟</h2>
          <p className="text-gray-700 mt-2">
            Follow us on Instagram & WhatsApp for the latest collections and offers! 🎁  
          </p>
          <div className="mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Follow Us 🚀
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
