"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { motion } from "framer-motion";

const DisplayNumbers: React.FC = () => {
  const numbers = useAppSelector((state) => state.game.numbers);
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reset the currentNumberIndex whenever the numbers array changes
    setCurrentNumberIndex(0);
    setVisible(false);
  }, [numbers]);

  useEffect(() => {
    if (numbers.length > 0 && currentNumberIndex < numbers.length) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        const hideTimer = setTimeout(() => {
          setCurrentNumberIndex((prevIndex) => prevIndex + 1);
        }, 500); // Delay before showing the next number

        return () => clearTimeout(hideTimer);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentNumberIndex, numbers]);

  return (
    <div className="flex flex-col items-center space-y-4 mt-4">
      {visible && currentNumberIndex < numbers.length && (
        <motion.div
          key={currentNumberIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold"
        >
          {numbers[currentNumberIndex]}
        </motion.div>
      )}
    </div>
  );
};

export default DisplayNumbers;
