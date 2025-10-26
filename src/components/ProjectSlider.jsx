// src/components/ProjectsSlider.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/*
  Replace these with your actual assets
  import project1 from "../assets/project1.jpg";
  import project2 from "../assets/project2.jpg";
  ...
*/
import project1 from "../assets/main_clip3.jpg";
import project2 from "../assets/main_clip4.jpg";
import project3 from "../assets/nightelavation.png";

const projects = [
  {
    id: 1,
    title: "Modern Elevation",
    type: "Residential",
    location: "Chennai, India",
    image: project1,
    href: "#project-1",
    description:
      "A contemporary residence exploring material transitions and daylight strategy.",
  },
  {
    id: 2,
    title: "Luxury Villa",
    type: "Villa",
    location: "Bengaluru, India",
    image: project2,
    href: "#project-2",
    description:
      "Premium villa emphasizing indoor-outdoor living and detailing.",
  },
  {
    id: 3,
    title: "Minimalist Studio",
    type: "Concept",
    location: "Mumbai, India",
    image: project3,
    href: "#project-3",
    description:
      "Minimalist study in proportions and textured surfaces with a restrained palette.",
  },
];

const autoplayDelay = 7000; // ms

const ProjectsSlider = () => {
  const [index, setIndex] = useState(0);
  const wrap = (i) => (i + projects.length) % projects.length;
  const timerRef = useRef(null);

  // autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => wrap(prev + 1));
    }, autoplayDelay);
    return () => clearInterval(timerRef.current);
  }, []);

  // reset autoplay when user interacts
  const resetAutoplay = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => wrap(prev + 1));
    }, autoplayDelay);
  };

  const prev = () => {
    setIndex((i) => wrap(i - 1));
    resetAutoplay();
  };
  const next = () => {
    setIndex((i) => wrap(i + 1));
    resetAutoplay();
  };

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-black text-silver-300 font-serif overflow-hidden"
      aria-label="Selected Projects"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-xs uppercase tracking-[0.35em] text-silver-400/80 font-light">
              Selected Projects
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-silver-100 mt-3">
              Recent Work
            </h3>
          </div>

          {/* controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="bg-black/50 border border-silver-400/30 p-3 rounded-full hover:scale-105 transition-transform duration-200"
            >
              <ChevronLeft className="text-silver-300" />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="bg-black/50 border border-silver-400/30 p-3 rounded-full hover:scale-105 transition-transform duration-200"
            >
              <ChevronRight className="text-silver-300" />
            </button>
          </div>
        </div>

        {/* slider frame */}
        <div className="relative">
          <div className="w-full overflow-hidden rounded-2xl">
            <div className="relative h-[520px] md:h-[620px]">
              {/* AnimatePresence + motion for crossfade with x translation and drag */}
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={projects[index].id}
                  initial={{ opacity: 0, x: 40, scale: 1.02 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.98 }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <motion.img
                    src={projects[index].image}
                    alt={projects[index].title}
                    className="w-full h-full object-cover brightness-75"
                    draggable={false}
                    // allow the user to drag the image horizontally
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                      const threshold = 100;
                      if (info.offset.x < -threshold) next();
                      else if (info.offset.x > threshold) prev();
                    }}
                    onMouseDown={() => clearInterval(timerRef.current)}
                    onMouseUp={resetAutoplay}
                    onTouchStart={() => clearInterval(timerRef.current)}
                    onTouchEnd={resetAutoplay}
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* caption area */}
                  <div className="absolute bottom-10 left-8 md:left-16 max-w-3xl">
                    <div className="w-20 h-[2px] bg-gradient-to-r from-silver-200 to-silver-400 mb-4" />
                    <span className="text-sm uppercase tracking-[0.25em] text-silver-400">
                      {projects[index].type} — {projects[index].location}
                    </span>
                    <h4 className="text-2xl md:text-3xl text-silver-100 font-semibold mt-3">
                      {projects[index].title}
                    </h4>
                    <p className="text-silver-300 mt-3 max-w-xl">
                      {projects[index].description}
                    </p>
                    <a
                      href={projects[index].href}
                      className="inline-block mt-6 text-silver-300 border-b border-silver-400/30 pb-1 hover:text-white transition-colors duration-200"
                    >
                      View Project →
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* small pager (dots + numbers) */}
          <div className="absolute left-8 bottom-6 flex items-center gap-3">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setIndex(i);
                  resetAutoplay();
                }}
                aria-label={`Go to ${p.title}`}
                className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                  i === index ? "text-silver-100" : "text-silver-400/60"
                }`}
              >
                <span className="hidden md:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="md:hidden">{i === index ? "•" : "◦"}</span>
              </button>
            ))}
          </div>

          {/* right-side thumbnails (optional) */}
          <div className="absolute right-8 top-1/3 hidden lg:flex flex-col gap-4">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setIndex(i);
                  resetAutoplay();
                }}
                className={`w-36 h-24 overflow-hidden rounded-md border ${
                  i === index ? "border-silver-300" : "border-silver-400/20"
                } transform transition-all duration-300 hover:scale-105`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover brightness-70"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
