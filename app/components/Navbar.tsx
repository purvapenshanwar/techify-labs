"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
            TE
          </div>
          <span className="font-semibold text-lg">Techify</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-6 text-gray-700">
          <a href="#" className="text-indigo-600 font-medium">Home</a>
          <a href="#">Solutions</a>
          <a href="#">Knowledge Hub</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-900 text-white px-5 py-2 rounded-xl shadow-md font-medium"
        >
          Get Consultation Free →
        </motion.button>

      </div>
    </div>
  );
}