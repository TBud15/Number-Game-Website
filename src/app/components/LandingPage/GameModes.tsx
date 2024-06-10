"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const GameModes = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center p-4"
    >
      <motion.div
        className="text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4">Game Modes</h1>
        <p className="text-xl text-white mb-8">
          Choose a game mode to start playing and sharpen your math skills!
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row justify-around items-center w-full max-w-4xl space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Game Mode 1 */}
        <motion.div
          className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg w-full max-w-md text-center"
          whileHover={{ scale: 1.1 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Game Mode 1</h2>
          <p className="text-md mb-4">
            Quickly calculate the sums of numbers displayed on the screen. The
            numbers will appear and disappear at a set speed, challenging your
            quick calculation skills.
          </p>
          <Link href="/game-below-one">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Play Now
            </button>
          </Link>
        </motion.div>

        {/* Game Mode 2 */}
        <motion.div
          className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg w-full max-w-md text-center"
          whileHover={{ scale: 1.1 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Game Mode 2</h2>
          <p className="text-md mb-4">
            Calculate the sums of numbers, including negative values. This mode
            adds an extra layer of complexity, enhancing your calculation
            abilities under pressure.
          </p>
          <Link href="/game-below-one">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Play Now
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GameModes;
