// src/components/MetallicButton.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MetallicButton = ({ label = "Start Project", href = "#contact" }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative inline-flex items-center gap-3 px-10 py-4 
                 bg-white text-black uppercase font-semibold tracking-wider text-sm 
                 rounded-none overflow-hidden transition-all duration-500"
    >
      {/* Text */}
      <span className="relative z-10">{label}</span>

      {/* Arrow */}
      <motion.span
        className="relative z-10 flex items-center"
        initial={{ x: 0 }}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      >
        <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
      </motion.span>

      {/* Metallic Hover Shine */}
      <span className="absolute inset-0 bg-gradient-to-r from-silver-200/0 via-silver-300/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.a>
  );
};

export default MetallicButton;
