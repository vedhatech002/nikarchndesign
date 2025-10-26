// src/components/BrandStory.jsx
import React from "react";
import { motion } from "framer-motion";
import brandStoryImg from "../assets/EXTERIORSHOT.jpg"; // replace with your image

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
          className="space-y-7"
        >
          <h2 className="text-xs uppercase tracking-[0.3em] text-silver-500/70">
            Our Brand Story
          </h2>

          <h3 className="text-5xl md:text-6xl font-semibold leading-tight text-white">
            Design that Speaks of Elegance and Precision.
          </h3>

          <p className="text-lg text-silver-400 max-w-xl leading-relaxed">
            Our philosophy blends art and architecture — each space is a crafted
            narrative of form, light, and texture. We bring ideas to life
            through thoughtful design and refined material expression.
          </p>

          <a
            href="#about"
            className="group inline-block mt-6 text-silver-300 tracking-wide border-b border-silver-400/40 hover:border-silver-300 transition-all duration-300"
          >
            <span className="group-hover:text-white">Learn More</span>
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-silver-400/20 shadow-[0_0_25px_rgba(192,192,192,0.1)] group">
            <img
              src={brandStoryImg}
              alt="Brand Story"
              className="w-full h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Metallic Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-silver-400/70 to-transparent"></div>
    </section>
  );
};

export default BrandStory;
