"use client";

import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { motion } from "framer-motion";

const NumberDisplay: React.FC = () => {
  const numbers = useAppSelector((state) => state.game.numbers);

  return (
    <div className="space-y-4">
      {numbers.map((number, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl"
        >
          {number}
        </motion.div>
      ))}
    </div>
  );
};

export default NumberDisplay;
