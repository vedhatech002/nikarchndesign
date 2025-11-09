// src/components/Navigation.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "#services" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "/contact" },
];

const backdropVariant = {
  hidden: { opacity: 0, pointerEvents: "none" },
  visible: { opacity: 1, pointerEvents: "auto" },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 Smooth scroll handler for same-page sections
  const handleNavClick = (item) => {
    const isSection = item.path.startsWith("#");
    const isHome = window.location.pathname === "/";

    if (isSection) {
      if (isHome) {
        // ✅ If already on home, just scroll
        const el = document.querySelector(item.path);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // 🧭 If not on home, navigate first, then scroll after load
        navigate("/", { state: { scrollTo: item.path } });
      }
    } else {
      // Normal page navigation (About, Contact)
      navigate(item.path);
    }

    setIsOpen(false);
  };

  return (
    <motion.nav className="fixed inset-x-0 top-0 z-50 font-serif" id="site-nav">
      <motion.div
        aria-hidden
        variants={backdropVariant}
        initial="hidden"
        animate={isScrolled ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-0 bg-black/95 backdrop-blur-md border-b border-silver-400/10"
        style={{ pointerEvents: "none" }}
      />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="relative text-silver-300 uppercase tracking-widest text-sm font-medium hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item.label}
                  <motion.span
                    layout
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-silver-300 to-silver-500"
                  />
                </motion.button>
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
          {isOpen && (
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden bg-black/95 backdrop-blur-sm border-b border-silver-400/20"
            >
              <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left px-3 py-3 rounded-lg text-silver-200 hover:text-white hover:bg-silver-400/10 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
