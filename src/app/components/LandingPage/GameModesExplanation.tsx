"use client";

import { motion } from "framer-motion";

const GameModesExplanation = () => {
  return (
    <div>
      <motion.div
        className="p-4 text-center bg-white bg-opacity-75 rounded-lg shadow-lg max-w-4xl mx-auto mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-4">How to Play</h2>
        <p className="text-lg mb-4">
          In <strong>Sums Over One</strong>, you can:
        </p>
        <ul className="list-disc list-inside text-left mx-auto max-w-lg">
          <li>Set a timer to control how fast numbers are displayed.</li>
          <li>
            Change the array length to adjust how many numbers are displayed.
          </li>
          <li>
            Set the number range, for example, random numbers from 1 to 9 or
            from 1 to 99.
          </li>
        </ul>
        <p className="text-lg mt-6 mb-4">
          In <strong>Sums Below One</strong>, the settings are the same, but the
          numbers include negative values:
        </p>
        <ul className="list-disc list-inside text-left mx-auto max-w-lg">
          <li>Set a timer to control how fast numbers are displayed.</li>
          <li>
            Change the array length to adjust how many numbers are displayed.
          </li>
          <li>
            Set the number range, for example, random numbers from -9 to 9 or
            from -99 to 99.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default GameModesExplanation;
