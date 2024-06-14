"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "../../../../store/hooks";

const GameDescription: React.FC = () => {
  const isGameActive = useAppSelector(
    (state) => state.gameOverOne.isGameActive
  );

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {!isGameActive && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-lg mt-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Game Mode 2 Features:
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Set a timer to control how fast numbers are displayed.</li>
            <li>
              Change the array length to adjust how many numbers are displayed.
            </li>
            <li>
              Set the number range, for example, random numbers from -9 to 9 or
              from -99 to 99.
            </li>
            <li>
              Quickly calculate the sums of numbers displayed on the screen. The
              numbers will appear and disappear at a set speed, challenging your
              quick calculation skills.
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameDescription;
