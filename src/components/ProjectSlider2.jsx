// src/components/ProjectsCarousel.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SAMPLE_PROJECTS from "../pages/sampleProjects";

const CARD_GAP = 24;
const MIN_CARD = 220;
const VISIBLE_CARDS_DESKTOP = 4;

const ProjectsCarousel = () => {
  const containerRef = useRef(null); // visible viewport container
  const trackRef = useRef(null); // motion track (kept for drag)
  const x = useMotionValue(0); // motion x (still used for drag)
  const [cardWidth, setCardWidth] = useState(320);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [dragLimits, setDragLimits] = useState({ left: 0, right: 0 });
  const navigate = useNavigate();

  const projects = SAMPLE_PROJECTS;

  // compute sizes and limits
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
      setDragLimits({ left: -maxDrag, right: 0 });

      const steps = Math.max(0, projects.length - desiredVisible);
      setMaxIndex(steps);

      // clamp index and align motion x
      const clampedIndex = Math.min(index, steps);
      const targetX = -clampedIndex * (computedCardWidth + CARD_GAP);
      animate(x, targetX, { type: "spring", stiffness: 220, damping: 28 });
      setIndex(clampedIndex);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects.length]);

  // when user drags (framer motion), snap logic
  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const threshold = cardWidth / 4;
    let newIndex = index;

    if (offset < -threshold || velocity < -200)
      newIndex = Math.min(maxIndex, index + 1);
    else if (offset > threshold || velocity > 200)
      newIndex = Math.max(0, index - 1);

    // compute nearest from final x value
    const finalX = x.get();
    const approxIndex = Math.round(Math.abs(finalX) / (cardWidth + CARD_GAP));
    newIndex = Math.max(0, Math.min(maxIndex, approxIndex));

    scrollToIndex(newIndex);
  };

  // helper to animate motion x and also try to scroll the container (keeps both in-sync)
  const scrollToIndex = (targetIndex) => {
    const clamped = Math.max(0, Math.min(maxIndex, targetIndex));
    const targetX = -clamped * (cardWidth + CARD_GAP);

    // prefer animating motion value (keeps drag UI consistent)
    animate(x, targetX, { type: "spring", stiffness: 220, damping: 28 });
    setIndex(clamped);

    // also scroll the container so native scroll position matches visuals (helpful for accessibility)
    const container = containerRef.current;
    const firstCard = container?.querySelector("[data-card]");
    if (container && firstCard) {
      const gap = parseFloat(getComputedStyle(container).gap) || CARD_GAP;
      const step = firstCard.offsetWidth + gap;
      container.scrollTo({ left: clamped * step, behavior: "smooth" });
    }
  };

  // robust arrow handlers: try to scroll the visible container; fallback to animate motion value
  const scrollContainerByStep = (direction = 1) => {
    const container = containerRef.current;
    if (!container) return;

    const firstCard = container.querySelector("[data-card]");
    if (firstCard) {
      const gap = parseFloat(getComputedStyle(container).gap) || CARD_GAP;
      const step = firstCard.offsetWidth + gap;
      container.scrollBy({ left: direction * step, behavior: "smooth" });
      return;
    }
    // fallback fallback: use motion animate
    const newIndex = Math.max(0, Math.min(maxIndex, index + -direction));
    scrollToIndex(newIndex);
  };

  const prev = () => {
    scrollContainerByStep(-1);
    // also update index state for button disabled UI (we'll sync on scroll event too)
    setIndex((i) => Math.max(0, i - 1));
  };
  const next = () => {
    scrollContainerByStep(1);
    setIndex((i) => Math.min(maxIndex, i + 1));
  };

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, maxIndex, cardWidth]);

  // keep index synced when user scrolls the container manually (touch, wheel)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let raf = null;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const firstCard = el.querySelector("[data-card]");
        if (!firstCard) return;
        const gap = parseFloat(getComputedStyle(el).gap) || CARD_GAP;
        const step = firstCard.offsetWidth + gap;
        const cur = Math.round(el.scrollLeft / step);
        setIndex(Math.max(0, Math.min(maxIndex, cur)));
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [maxIndex, cardWidth]);

  const openProject = (projectId) => navigate(`/projects/${projectId}`);

  return (
    <section
      id="projects"
      className="py-20 bg-black text-silver-300 font-serif"
      aria-label="Projects carousel"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              onClick={prev}
              aria-label="Previous"
              disabled={index === 0}
              className={`relative z-30 bg-black/50 border p-2 rounded-md ${
                index === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-black/70"
              }`}
            >
              <ChevronLeft className="text-silver-300" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              disabled={index >= maxIndex}
              className={`relative z-30 bg-black/50 border p-2 rounded-md ${
                index >= maxIndex
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-black/70"
              }`}
            >
              <ChevronRight className="text-silver-300" />
            </button>
          </div>
        </div>

        {/* visible scroll container (native) */}
        <div
          ref={containerRef}
          className="relative overflow-x-auto hide-scrollbar gap-6 snap-x snap-mandatory -mx-1 px-6"
        >
          {/* motion track inside - keeps drag interaction but cards live in the scroll container */}
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            onDragEnd={handleDragEnd}
            dragConstraints={{ left: dragLimits.left, right: dragLimits.right }}
            dragElastic={0.08}
            dragMomentum={false}
            className="flex items-stretch gap-6 will-change-transform touch-pan-y"
            style={{ minHeight: 0 }}
          >
            {projects.map((p) => (
              <article
                key={p.id}
                data-card
                className="snap-start bg-black/95 rounded-lg border border-silver-400/10 overflow-hidden flex-shrink-0 cursor-pointer shadow-lg"
                style={{
                  minWidth: `${cardWidth}px`,
                  maxWidth: `${cardWidth}px`,
                }}
                onClick={() => openProject(p.id)}
              >
                <div className="h-[220px] md:h-[260px] lg:h-[320px] bg-zinc-800">
                  <img
                    src={p.hero || p.image}
                    alt={p.title}
                    className="w-full h-full object-cover brightness-75 transition-transform duration-700 hover:scale-105"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    loading="lazy"
                  />
                </div>

                <div className="p-4 bg-black">
                  <div className="w-14 h-[2px] bg-gradient-to-r from-silver-200 to-silver-400 mb-3" />
                  <p className="text-xs uppercase tracking-wider text-silver-400">
                    {p.type}
                  </p>
                  <h4 className="mt-2 text-lg text-silver-100 font-semibold">
                    {p.title}
                  </h4>
                  <div className="mt-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openProject(p.id);
                      }}
                      className="text-silver-300 border-b border-silver-400/20 pb-0.5 hover:text-white transition-colors duration-200"
                    >
                      View project →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
