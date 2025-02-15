"use client"; 
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    image: "/images/candle1.jpg",
    title: "Vanilla Scented Candle",
    subtitle: "Soothing Aroma for a Relaxing Ambience",
  },
  {
    image: "/images/candle2.jpg",
    title: "Lavender Bliss",
    subtitle: "Unwind with the Fresh Scent of Lavender",
  },
  {
    image: "/images/candle3.jpg",
    title: "Rose Petal Glow",
    subtitle: "Experience the Elegance of Floral Fragrances",
  },
  {
    image: "/images/candle4.jpg",
    title: "Ocean Breeze",
    subtitle: "Breathe in the Refreshing Coastal Vibes",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        navigation
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
                transition: "background-image 1s ease-in-out",
              }}
            >
              <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="text-lg mt-2">{slide.subtitle}</p>
                <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
