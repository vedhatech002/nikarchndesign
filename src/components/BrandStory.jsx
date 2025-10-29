// src/components/BrandStory.jsx
import React from "react";
import { motion } from "framer-motion";
import brandStoryImg from "../assets/EXTERIORSHOT.jpg"; // replace with your image if needed

const BrandStory = () => {
  return (
    <section
      id="brand-story"
      className="relative bg-black text-silver-300 py-28 overflow-hidden font-serif"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 items-center gap-20">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-silver-500/70">
            Our Brand Story
          </h2>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-silver-100">
            Design that Speaks of Elegance and Precision.
          </h3>

          <p className="text-lg text-silver-400 max-w-xl leading-relaxed">
            Our philosophy blends art and architecture — each space is a crafted
            narrative of form, light, and texture. We bring ideas to life
            through thoughtful design and refined material expression.
          </p>

          {/* Buttons row */}
          {/* --- CTA Buttons --- */}
          <div className="flex flex-wrap items-center gap-5 mt-8">
            {/* BOOK NOW (Primary CTA) */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 px-8 py-2
               bg-white text-black font-serif font-semibold uppercase tracking-wide text-sm
               rounded-md overflow-hidden transition-all duration-500 ease-in-out"
            >
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

              {/* Metallic Gray Hover Layer */}
              <span
                className="absolute inset-0 rounded-md 
                 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                 opacity-0 group-hover:opacity-100
                 border border-transparent group-hover:border-white
                 transition-all duration-500 ease-in-out"
              />
            </motion.a>

            {/* LEARN MORE (Secondary CTA, same hover, no arrow) */}
            <motion.a
              href="/about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-8 py-2
               border border-silver-400/30 text-silver-300 font-serif font-semibold uppercase tracking-wide text-sm
               rounded-md overflow-hidden transition-all duration-500 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Learn More
              </span>

              {/* Metallic Gray Hover Layer (same as Book Now) */}
              <span
                className="absolute inset-0 rounded-md 
                 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900
                 opacity-0 group-hover:opacity-100
                 border border-transparent group-hover:border-white
                 transition-all duration-500 ease-in-out"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-silver-400/20 shadow-[0_0_25px_rgba(192,192,192,0.06)] group">
            <img
              src={brandStoryImg}
              alt="Brand Story"
              className="w-full h-[420px] md:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Metallic Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-silver-400/70 to-transparent" />
    </section>
  );
};

export default BrandStory;
