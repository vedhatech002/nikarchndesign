// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import about_section1 from "../assets/about_section1.png";
import about_last from "../assets/about_last.png";
import about_hero from "../assets/about_hero.jpg";
import about_section2 from "../assets/about_section2.jpg";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black text-silver-300 font-serif">
      {/* --- Hero Section --- */}
      <div className="relative h-[90vh] overflow-hidden">
        <motion.img
          src={about_hero}
          alt="About Hero"
          className="absolute inset-0 w-full h-[90vh] object-cover brightness-[0.65]"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold text-silver-100"
          >
            Who We Are
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-silver-400 text-lg mt-5 max-w-2xl"
          >
            We’re creators of meaningful architecture — blending artistry,
            innovation, and purpose to shape spaces that tell stories.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-2 mt-10 
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
        </div>
      </div>

      {/* --- Alternating Content Sections --- */}
      <div className="max-w-6xl mx-auto py-28 px-6 lg:px-16 space-y-32">
        {/* 1st Row */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <img
            src={about_section1}
            className="rounded-xl object-cover shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            alt="Purpose-driven design"
          />
          <div>
            <h3 className="text-2xl text-silver-100 font-semibold mb-4">
              Purpose-Driven Design
            </h3>
            <p className="text-silver-400 leading-relaxed">
              At NAD, we believe in creating a lasting and positive impact
              through thoughtful, purpose-driven design. Architecture, to us, is
              more than construction — it’s about shaping human experience and
              contributing meaningfully to the environment and community.
            </p>
          </div>
        </motion.div>

        {/* 2nd Row (reversed) */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="order-2 md:order-1">
            <h3 className="text-2xl text-silver-100 font-semibold mb-4">
              Design That Inspires and Endures
            </h3>
            <p className="text-silver-400 leading-relaxed">
              Our spaces embody functionality, refinement, and environmental
              responsibility. Each project is an exploration of materials,
              light, and form — crafted to endure and inspire, transcending
              trends while resonating with the people it serves.
            </p>
          </div>
          <img
            src={about_section2}
            className="order-1 md:order-2 rounded-xl object-cover shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            alt="Inspirational design"
          />
        </motion.div>

        {/* 3rd Row */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <img
            src={about_last}
            alt="Collaborative workspace"
            className="rounded-xl object-cover shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          />
          <div>
            <h3 className="text-2xl text-silver-100 font-semibold mb-4">
              A Collaborative Vision
            </h3>
            <p className="text-silver-400 leading-relaxed">
              With a multidisciplinary team and a deep sense of contextual
              sensitivity, NAD approaches each project with innovation and care.
              Collaboration is at the heart of what we do — working closely with
              clients to craft architecture that’s authentic, functional, and
              future-focused.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
