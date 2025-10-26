// src/components/ProjectsCarousel.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* Replace these imports with your actual project images */
import img1 from "../assets/main_clip3.jpg";
import img2 from "../assets/main_clip4.jpg";
import img3 from "../assets/nightelavation.png";
import img4 from "../assets/EXTERIORSHOT.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Elevation",
    type: "Residential",
    image: img1,
    href: "#p1",
  },
  { id: 2, title: "Luxury Villa", type: "Villa", image: img2, href: "#p2" },
  {
    id: 3,
    title: "Minimalist Studio",
    type: "Concept",
    image: img3,
    href: "#p3",
  },
  {
    id: 4,
    title: "Urban Residence",
    type: "Residential",
    image: img4,
    href: "#p4",
  },
];

const CARD_GAP = 24; // px gap between cards (keep in sync with tailwind gap)
const MIN_CARD = 220;
const VISIBLE_CARDS_DESKTOP = 4;

const ProjectsCarousel = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const x = useMotionValue(0); // motion value for translateX
  const [cardWidth, setCardWidth] = useState(320);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [dragLimits, setDragLimits] = useState({ left: 0, right: 0 });

  // compute layout sizes and drag limits
  useEffect(() => {
    const calc = () => {
      const cw = containerRef.current?.offsetWidth || 0;
      const desiredVisible =
        cw > 1200 ? VISIBLE_CARDS_DESKTOP : cw > 900 ? 3 : cw > 640 ? 2 : 1;
      const gapsTotal = CARD_GAP * (desiredVisible - 1);
      const computedCardWidth = Math.max(
        MIN_CARD,
        Math.floor((cw - gapsTotal) / desiredVisible)
      );
      setCardWidth(computedCardWidth);

      const contentWidth =
        projects.length * computedCardWidth + CARD_GAP * (projects.length - 1);
      const maxDrag = Math.max(0, contentWidth - cw);
      // dragConstraints for framer-motion are left negative, right 0
      setDragLimits({ left: -maxDrag, right: 0 });

      const steps = Math.max(0, projects.length - desiredVisible);
      setMaxIndex(steps);

      // clamp index and animate to clamped index
      const clampedIndex = Math.min(index, steps);
      const targetX = -clampedIndex * (computedCardWidth + CARD_GAP);
      animate(x, targetX, { type: "spring", stiffness: 220, damping: 28 });
      setIndex(clampedIndex);
    };

    calc();
    const onResize = () => calc();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once and on resize

  // helper to snap to index
  const scrollToIndex = (targetIndex) => {
    const clamped = Math.max(0, Math.min(maxIndex, targetIndex));
    const targetX = -clamped * (cardWidth + CARD_GAP);
    animate(x, targetX, { type: "spring", stiffness: 220, damping: 28 });
    setIndex(clamped);
  };

  const prev = () => scrollToIndex(index - 1);
  const next = () => scrollToIndex(index + 1);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, maxIndex, cardWidth]); // dependencies

  // onDragEnd: snap to nearest index
  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const threshold = cardWidth / 4;
    let newIndex = index;

    if (offset < -threshold || velocity < -200)
      newIndex = Math.min(maxIndex, index + 1);
    else if (offset > threshold || velocity > 200)
      newIndex = Math.max(0, index - 1);

    // also compute nearest based on final x value
    const finalX = x.get(); // negative value or 0
    const approxIndex = Math.round(Math.abs(finalX) / (cardWidth + CARD_GAP));
    newIndex = Math.max(0, Math.min(maxIndex, approxIndex));

    scrollToIndex(newIndex);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-black text-silver-300 font-serif"
      aria-label="Projects carousel"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* header */}
        <div className="flex items-center justify-between mb-8 relative z-20">
          <div>
            <h3 className="text-xs uppercase tracking-[0.35em] text-silver-400/80 font-light">
              Our projects
            </h3>
            <h2 className="text-2xl md:text-3xl text-silver-100 font-semibold mt-3">
              Selected Works
            </h2>
          </div>

          <div className="flex items-center gap-3 z-30">
            <button
              aria-label="Previous"
              onClick={prev}
              className="relative z-30 bg-black/50 border border-silver-400/20 p-2 rounded-md hover:bg-black/70 transition"
            >
              <ChevronLeft className="text-silver-300" />
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="relative z-30 bg-black/50 border border-silver-400/20 p-2 rounded-md hover:bg-black/70 transition"
            >
              <ChevronRight className="text-silver-300" />
            </button>
          </div>
        </div>

        {/* carousel frame */}
        <div ref={containerRef} className="relative overflow-hidden">
          {/* motion track */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            onDragEnd={handleDragEnd}
            dragConstraints={{ left: dragLimits.left, right: dragLimits.right }}
            dragElastic={0.08}
            dragMomentum={false}
            className="flex items-stretch gap-6 will-change-transform touch-pan-y"
            // touchAction: 'pan-y' ensures horizontal drags are handled by JS and not translated into vertical scrolling
            style={{
              ...Object.assign({}, trackRef && { x }),
              touchAction: "pan-y",
            }}
          >
            {projects.map((p) => (
              <article
                key={p.id}
                className="bg-black/95 rounded-lg border border-silver-400/10 overflow-hidden flex-shrink-0"
                style={{
                  minWidth: `${cardWidth}px`,
                  maxWidth: `${cardWidth}px`,
                }}
              >
                {/* image area - prevent default dragging */}
                <div className="h-[220px] md:h-[260px] lg:h-[320px] bg-zinc-800">
                  {/* if you have videos, set controls and prevent drag start */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover brightness-75 transition-transform duration-700 hover:scale-105"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>

                {/* meta */}
                <div className="p-4">
                  <div className="w-14 h-[2px] bg-gradient-to-r from-silver-200 to-silver-400 mb-3" />
                  <p className="text-xs uppercase tracking-wider text-silver-400">
                    {p.type}
                  </p>
                  <h4 className="mt-2 text-lg text-silver-100 font-semibold">
                    {p.title}
                  </h4>
                  <a
                    href={p.href}
                    className="inline-block mt-3 text-silver-300 border-b border-silver-400/20 pb-0.5 hover:text-white transition-colors duration-200"
                  >
                    View project →
                  </a>
                </div>
              </article>
            ))}
          </motion.div>

          {/* optional small pager for accessibility (hidden visually on your request) */}
          {/* If you want no pager at all remove this block */}
          <div className="sr-only">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to project ${i + 1}`}
              >
                Go {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
