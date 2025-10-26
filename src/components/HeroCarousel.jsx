// src/components/HeroCarousel.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mainclip1 from "../assets/nightelavation.png";
import mainclip2 from "../assets/main_clip3.jpg";
import mainclip3 from "../assets/main_clip4.jpg";

const slides = [
  {
    id: 1,
    media: mainclip1,
    title: "Modern Elevation",
    subtitle: "Contemporary Architecture",
    description:
      "Stunning modern elevation showcasing clean geometry, premium materials, and balanced composition.",
  },
  {
    id: 2,
    media: mainclip2,
    title: "Luxury Villa Design",
    subtitle: "Premium Residential",
    description:
      "Elegant villa elevation with refined material transitions, spatial harmony, and architectural grace.",
  },
  {
    id: 3,
    media: mainclip3,
    title: "Minimalist Design",
    subtitle: "Architectural Purity",
    description:
      "Minimalist elevation emphasizing form, light, and texture — the essence of architectural clarity.",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // ⏱️ Slower slide delay (15s)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black text-silver-300 font-serif">
      {/* --- Slides --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={slides[current].media}
            alt={slides[current].title}
            className="h-full w-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* --- Text + Button --- */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Hero Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="h-[2px] w-24 bg-gradient-to-r from-silver-200 to-silver-400 mb-6" />

              <h3 className="text-silver-400 uppercase tracking-[0.25em] text-sm md:text-base mb-3">
                {slides[current].subtitle}
              </h3>

              <h1 className="text-5xl md:text-7xl text-silver-100 font-bold mb-6 leading-tight">
                {slides[current].title}
              </h1>

              <p className="text-silver-300 text-lg max-w-2xl leading-relaxed mb-12">
                {slides[current].description}
              </p>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-3 px-8 py-3 
                           border border-transparent bg-white text-black font-serif font-semibold
                           uppercase tracking-wide text-sm rounded-md overflow-hidden
                           transition-all duration-500 ease-in-out"
              >
                {/* Label */}
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Book Now
                </span>

                {/* Arrow */}
                <motion.span
                  className="relative z-10 flex items-center transition-transform duration-500"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 transition-colors duration-500 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m0 0l-6-6m6 6l-6 6"
                    />
                  </svg>
                </motion.span>

                {/* Metallic Hover Shade */}
                <span
                  className="absolute inset-0 rounded-md 
                             bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                             opacity-0 group-hover:opacity-100
                             border border-transparent group-hover:border-white
                             transition-all duration-500 ease-in-out"
                />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- Accent Lines --- */}
      <div className="absolute top-1/3 left-10 w-px h-36 bg-gradient-to-b from-transparent via-silver-400/60 to-transparent" />
      <div className="absolute bottom-1/3 right-10 w-px h-40 bg-gradient-to-b from-transparent via-silver-400/60 to-transparent" />
    </section>
  );
};

export default HeroCarousel;
