import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
// import mainClip1 from "../assets/main_clip1.gif";
// import mainClip2 from "../assets/main_clip2.gif";
import mainclip1 from "../assets/nightelavation.png";
import mainclip2 from "../assets/main_clip3.jpg";
import mainclip3 from "../assets/main_clip4.jpg";

const slides = [
  {
    id: 1,
    media: mainclip1,
    type: "gif",
    title: "Modern Elevation",
    subtitle: "Contemporary Architecture",
    description:
      "Stunning modern residential elevation with clean lines and sophisticated material palette showcasing architectural excellence.",
  },
  {
    id: 2,
    media: mainclip2,
    type: "gif",
    title: "Luxury Villa Design",
    subtitle: "Premium Residential",
    description:
      "Elegant villa elevation featuring premium materials, expansive glazing, and thoughtful integration with landscape design.",
  },
  {
    id: 4,
    media: mainclip3,
    type: "gif",
    title: "Minimalist Design",
    subtitle: "Architectural Purity",
    description:
      "Clean, minimalist elevation showcasing the beauty of simplicity with perfect proportions and material harmony.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPlaying || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Media */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={slide.media}
                alt={slide.title}
                className="w-full h-full object-cover filter brightness-60"
              />
              {/* Animated overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Architectural grid overlay */}
              {/* <div className="absolute inset-0 opacity-5">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `linear-gradient(rgba(192,192,192,0.4) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(192,192,192,0.4) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div
              className="transform transition-all duration-1000 delay-300"
              key={currentSlide}
            >
              {/* Metallic accent line */}
              {/* <div
                className="w-24 h-1 bg-gradient-to-r from-silver-400 via-white to-silver-600 mb-8 animate-fadeInUp shadow-lg"
                style={{
                  filter: "drop-shadow(0 0 4px rgba(192, 192, 192, 0.5))",
                }}
              /> */}

              <h2 className="text-silver-300 text-xl md:text-2xl font-light mb-6 tracking-widest uppercase animate-fadeInUp metallic-text">
                {/* {slides[currentSlide].subtitle} */}
              </h2>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fadeInUp animation-delay-200">
                <span className="metallic-text drop-shadow-2xl">
                  {/* {slides[currentSlide].title} */}
                </span>
              </h1>

              <p className="text-silver-200 text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed animate-fadeInUp animation-delay-400 font-light">
                {/* {slides[currentSlide].description} */}
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp animation-delay-600">
                <button className="group relative bg-gradient-to-r from-silver-600 via-silver-500 to-silver-600 hover:from-silver-500 hover:via-silver-400 hover:to-silver-500 text-black px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl metallic-gradient">
                  <span className="relative z-10">View Portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </button>

                <button className="group border-2 border-silver-400 text-silver-300 hover:bg-silver-400 hover:text-black px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-silver-400 to-silver-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div
        className="absolute inset-0 flex items-center justify-between px-6 opacity-0 hover:opacity-100 transition-opacity duration-300"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          onClick={prevSlide}
          className="group bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-silver-400/40 text-silver-300 p-5 rounded-full transition-all duration-300 transform hover:scale-110 hover:border-silver-400"
        >
          <ChevronLeft
            size={28}
            className="group-hover:text-white transition-colors duration-300"
          />
        </button>
        <button
          onClick={nextSlide}
          className="group bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-silver-400/40 text-silver-300 p-5 rounded-full transition-all duration-300 transform hover:scale-110 hover:border-silver-400"
        >
          <ChevronRight
            size={28}
            className="group-hover:text-white transition-colors duration-300"
          />
        </button>
      </div>

      {/* Play/Pause Button */}
      {/* <div className="absolute top-28 right-6 sm:right-10">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="group bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-silver-400/40 text-silver-300 p-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:border-silver-400"
        >
          {isPlaying ? (
            <Pause
              size={24}
              className="group-hover:text-white transition-colors duration-300"
            />
          ) : (
            <Play
              size={24}
              className="group-hover:text-white transition-colors duration-300"
            />
          )}
        </button>
      </div> */}

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-silver-400 via-white to-silver-600 w-16 shadow-lg"
                  : "bg-silver-400/50 hover:bg-silver-400/70 w-10"
              }`}
              style={
                index === currentSlide
                  ? { filter: "drop-shadow(0 0 4px rgba(192, 192, 192, 0.6))" }
                  : {}
              }
            />
          ))}
        </div>
      </div> */}

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 right-10 animate-bounce">
        <div className="w-7 h-12 border-2 border-silver-400/50 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-silver-400/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-10 w-px h-40 bg-gradient-to-b from-transparent via-silver-400/60 to-transparent" />
      <div className="absolute bottom-1/3 right-10 w-px h-40 bg-gradient-to-b from-transparent via-silver-400/60 to-transparent" />

      {/* Corner accents */}
      {/* <div className="absolute top-32 left-10 w-8 h-8 border-l-2 border-t-2 border-silver-400/40"></div>
      <div className="absolute top-32 right-10 w-8 h-8 border-r-2 border-t-2 border-silver-400/40"></div>
      <div className="absolute bottom-32 left-10 w-8 h-8 border-l-2 border-b-2 border-silver-400/40"></div>
      <div className="absolute bottom-32 right-10 w-8 h-8 border-r-2 border-b-2 border-silver-400/40"></div> */}
    </section>
  );
};

export default HeroCarousel;
