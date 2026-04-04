"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-800 text-white py-20 rounded-3xl mx-4 mt-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 px-4 py-2 rounded-full text-sm"
          >
            🚀 360° Digital Marketing Agency
          </motion.span>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mt-6 leading-tight"
          >
            Your Revenue, <br /> Our Expertise
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-gray-300"
          >
            We deliver data-driven marketing strategies that turn visitors into paying customers.
          </motion.p>

          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-6 py-3 rounded-full font-medium"
            >
              Get Free Consultation →
            </motion.button>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>

          {/* Video */}
          {/* <video
            autoPlay
            loop
            muted
            className="rounded-2xl shadow-2xl border border-white/10"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video> */}
        </motion.div>

      </div>
    </div>
  );
}