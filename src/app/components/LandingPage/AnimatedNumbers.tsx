"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedNumbers = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-6xl font-bold mb-8 text-center text-white pt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Mental Math
      </motion.h1>
      <motion.p
        className="text-2xl text-gray-200 mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Enhance your mental math skills with our simple exercise. Improve your
        speed and accuracy with daily practice.
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.5,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <motion.div
            key={number}
            className="text-4xl font-bold text-white bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
          >
            {number}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedNumbers;
