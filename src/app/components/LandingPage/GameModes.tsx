"use client";

import React from "react";
import { motion } from "framer-motion";

const GameModes = () => {
  return (
    <div
      id="game-modes"
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Game Modes
      </motion.h2>
      <motion.div
        className="w-full max-w-4xl mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-3xl font-semibold mb-4">
          Mode 1: Positive Numbers
        </h3>
        <p className="text-lg mb-4">
          In this mode, you'll be given numbers from 1 to 9, or you can choose
          the range of numbers. Your task is to quickly calculate the sum of
          these numbers in your mind and input the answer.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>You can choose the range of numbers (e.g., 1-5, 1-9).</li>
          <li>Calculate the sum of the numbers as quickly as possible.</li>
          <li>Input your answer in the provided field.</li>
        </ul>
      </motion.div>
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-3xl font-semibold mb-4">
          Mode 2: Positive and Negative Numbers
        </h3>
        <p className="text-lg mb-4">
          This mode is similar to the first one but includes negative numbers.
          You'll be given numbers from -1 to 5, or you can choose the range of
          numbers.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>You can choose the range of numbers (e.g., -1 to 5).</li>
          <li>Calculate the sum of the numbers as quickly as possible.</li>
          <li>Input your answer in the provided field.</li>
        </ul>
      </motion.div>
      <motion.a
        href="#start"
        className="bg-blue-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none mt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Start Playing
      </motion.a>
    </div>
  );
};

export default GameModes;
