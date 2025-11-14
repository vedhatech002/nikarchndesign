// src/pages/ProjectDetail.jsx
import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SAMPLE_PROJECTS from "./sampleProjects";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = SAMPLE_PROJECTS.find((p) => String(p.id) === String(id));
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const heroRef = useRef(null);

  // parallax
  const { scrollY } = useViewportScroll();

  const [navOffset, setNavOffset] = useState(0);
  useEffect(() => {
    const calc = () => {
      const nav = document.getElementById("site-nav");
      const fallback = 72; // px — adjust if your nav is taller
      const newOffset = nav ? nav.getBoundingClientRect().height : fallback;
      setNavOffset(newOffset);
    };

    calc();
    window.addEventListener("resize", calc);
    // also recalc after fonts/images load (helps with layout shifts)
    window.addEventListener("load", calc);

    return () => {
      window.removeEventListener("resize", calc);
      window.removeEventListener("load", calc);
    };
  }, []);

  // gallery slider ref + snap controls
  const galleryRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // enable smooth anchor scrolling for the page while mounted
      document.documentElement.style.scrollBehavior = "smooth";
    }
    return () => {
      if (typeof window !== "undefined") {
        document.documentElement.style.scrollBehavior = "";
      }
    };
  }, []);

  useEffect(() => {
    // keyboard nav for lightbox
    const onKey = (e) => {
      if (lightboxIdx === null) return;
      if (e.key === "ArrowLeft") setLightboxIdx((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setLightboxIdx((i) => Math.min(project.gallery.length - 1, i + 1));
      if (e.key === "Escape") setLightboxIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, project]);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center p-6">
          <p className="mb-6">Project not found.</p>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-black px-4 py-2 rounded"
          >
            Back home
          </button>
        </div>
      </main>
    );
  }

  const openLightbox = (i) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);

  const galleryNext = () => {
    const el = galleryRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    if (card) {
      const gap = parseFloat(getComputedStyle(el).gap) || 16;
      const step = card.offsetWidth + gap;
      el.scrollBy({ left: step, behavior: "smooth" });
      return;
    }
    // fallback
    el.scrollBy({ left: el.clientWidth * 0.8, behavior: "smooth" });
  };

  const galleryPrev = () => {
    const el = galleryRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    if (card) {
      const gap = parseFloat(getComputedStyle(el).gap) || 16;
      const step = card.offsetWidth + gap;
      el.scrollBy({ left: -step, behavior: "smooth" });
      return;
    }
    // fallback
    el.scrollBy({ left: -el.clientWidth * 0.8, behavior: "smooth" });
  };

  // lightbox navigation inside overlay
  const lightboxNext = () =>
    setLightboxIdx((i) => (i + 1) % project.gallery.length);
  const lightboxPrev = () =>
    setLightboxIdx(
      (i) => (i - 1 + project.gallery.length) % project.gallery.length
    );

  return (
    <main className="font-serif text-silver-300 bg-black">
      <section
        aria-label="project-hero"
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", paddingTop: "var(--nav-h, 72px)" }}
      >
        {/* parallax hero image like contact page */}
        <motion.img
          src={project.hero}
          alt={project.title}
          initial={{ scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ willChange: "transform" }}
        />

        {/* overlay gradient - same visual as contact */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent" />

        {/* content box using same visual style as contact */}
        <div className="relative z-10 max-w-6xl mx-auto h-[70vh] flex items-end pb-8 md:pb-12 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-black/55 backdrop-blur-sm p-4  sm:p-6 md:p-10 rounded-md w-full md:w-3/4"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-silver-200 text-base md:text-lg max-w-3xl">
              {project.leadin}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-block bg-white text-black px-4 sm:px-6 sm:py-2.5 py-2 rounded-md font-semibold uppercase tracking-wide"
              >
                Book Now
              </a>

              <button
                onClick={() =>
                  document.getElementById("overview-section")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="inline-block border border-silver-600 text-silver-200 px-4 py-2.5 rounded-md"
              >
                Project Overview
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* OVERVIEW */}
      <section
        id="overview-section"
        className="max-w-6xl mx-auto px-6 md:px-12 py-16 lg:py-20 h-[100vh]"
      >
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <motion.div
            className="lg:col-span-7 flex flex-col h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Project Overview
              </h2>
              <p className="text-silver-200 leading-relaxed text-md">
                {project.description}
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="text-gray-400">Location</div>
                  <div className="text-white font-medium mt-1">
                    {project.location}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Site Area</div>
                  <div className="text-white font-medium mt-1">
                    {project.siteArea}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Time Line</div>
                  <div className="text-white font-medium mt-1">
                    {project.programArea}
                  </div>
                </div>
                <div>
                  <div className="text-gray-400">Status</div>
                  <div className="text-white font-medium mt-1">
                    {project.status}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[1rem]">
              <p className="text-silver-300 text-md">
                {project.detailParagraph}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex items-start"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="w-full h-full">
              <img
                src={project.featureImg || project.gallery?.[0]}
                alt={`${project.title} - feature`}
                className="w-full h-full max-h-[460px] object-cover rounded-md shadow-lg"
                style={{ minHeight: 260 }}
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* DESCRIPTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 lg:py-20 border-t border-neutral-800 h-[80vh]">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <img
              src={project.featureImg2 || project.gallery?.[1]}
              alt={`${project.title} - detail`}
              className="w-full h-56 md:h-64 object-cover rounded-md shadow-lg"
            />
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Project Description
            </h3>
            <p className="text-silver-200 leading-relaxed text-md">
              {project.moreDescription}
            </p>
          </motion.div>
        </div>
      </section>
      {/* GALLERY - interactive slider that uses carousel-style arrows */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 lg:py-20 h-[100vh]">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-white">Gallery</h4>
          <div className="flex gap-3">
            <button
              onClick={galleryPrev}
              aria-label="Previous"
              className="bg-black/60 text-white px-3 py-2 rounded border border-neutral-700"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={galleryNext}
              aria-label="Next"
              className="bg-black/60 text-white px-3 py-2 rounded border border-neutral-700"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={galleryRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6"
        >
          {(project.gallery || []).map((src, i) => (
            <div
              key={i}
              data-card
              className="snap-start flex-shrink-0 w-[min(86vw,380px)] md:w-[32%] lg:w-[30%]"
            >
              <button
                onClick={() => openLightbox(i)}
                className="block overflow-hidden rounded-md shadow-lg w-full"
              >
                <img
                  loading="lazy"
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 hover:scale-105"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                />
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* LIGHTBOX with prev/next and keyboard nav */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6">
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>

          <button
            className="absolute left-6 text-white text-4xl"
            onClick={lightboxPrev}
            aria-label="Prev"
          >
            <ChevronLeft />
          </button>
          <img
            src={project.gallery[lightboxIdx]}
            alt={`lightbox ${lightboxIdx + 1}`}
            className="max-h-[85vh] max-w-[90%] object-contain rounded-md"
          />
          <button
            className="absolute right-6 text-white text-4xl"
            onClick={lightboxNext}
            aria-label="Next"
          >
            <ChevronRight />
          </button>
        </div>
      )}
      {/* FOOTER CTA */}
      <footer className="py-12 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h4 className="text-2xl text-white font-semibold mb-4">
            Interested in collaborating?
          </h4>
          <p className="text-silver-300 mb-6">
            Tell us about your project and we’ll arrange a consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-black font-semibold px-10 py-3 rounded-md"
          >
            Book Now
          </a>
        </div>
      </footer>
    </main>
  );
};

export default ProjectDetail;
