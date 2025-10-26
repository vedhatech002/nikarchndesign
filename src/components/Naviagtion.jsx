// src/components/Navigation.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const backdropVariant = {
  hidden: { opacity: 0, pointerEvents: "none" },
  visible: { opacity: 1, pointerEvents: "auto" },
};

const MobileMenu = ({ onClose }) => (
  <motion.div
    initial={{ y: -16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -12, opacity: 0 }}
    transition={{ duration: 0.28, ease: "easeOut" }}
    className="md:hidden bg-black/95 backdrop-blur-sm border-b border-silver-400/20"
  >
    <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => onClose()}
          className="block px-3 py-3 rounded-lg text-silver-200 hover:text-white hover:bg-silver-400/10 transition-colors duration-200 font-medium"
        >
          {item.label}
        </a>
      ))}
    </div>
  </motion.div>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll(); // initialize
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav className="fixed inset-x-0 top-0 z-50 font-serif">
      {/* Animated translucent background when scrolled */}
      <motion.div
        aria-hidden
        variants={backdropVariant}
        initial="hidden"
        animate={isScrolled ? "visible" : "hidden"}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="absolute inset-0 bg-black/95 backdrop-blur-md border-b border-silver-400/10"
        style={{ pointerEvents: "none" }}
      />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <a href="#home" className="flex items-center">
                <img
                  src={logo}
                  alt="logo"
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative text-silver-300 uppercase tracking-widest text-sm font-medium transition-colors duration-300"
                >
                  <span className="pointer-events-none">{item.label}</span>

                  {/* animated underline — width expands on hover */}
                  <motion.span
                    layout
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.36, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-silver-300 to-silver-500"
                    style={{ transformOrigin: "left center" }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen((s) => !s)}
                aria-label="Toggle menu"
                className="p-2 text-silver-200 bg-transparent rounded-md hover:bg-black/30 transition-colors duration-200"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile animated menu */}
        <AnimatePresence>
          {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
