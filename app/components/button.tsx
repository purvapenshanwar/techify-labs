"use client";
import { motion } from "framer-motion";

export default function Button({ text }: { text: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-primary text-white px-6 py-3 rounded-xl font-medium shadow-md"
    >
      {text} →
    </motion.button>
  );
}