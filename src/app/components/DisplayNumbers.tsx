"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { motion } from "framer-motion";
import { Formik, Field, Form } from "formik";
import { setTimer } from "../../../store/slices/guessNumberLevelOne";

const DisplayNumbers: React.FC = () => {
  const dispatch = useAppDispatch();
  const numbers = useAppSelector((state) => state.game.numbers);
  const timerDuration = useAppSelector((state) => state.game.timer);
  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [allDisplayed, setAllDisplayed] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    setCurrentNumberIndex(0);
    setVisible(false);
    setAllDisplayed(false);
    setGameStarted(false);
  }, [numbers]);

  useEffect(() => {
    if (numbers.length > 0) {
      setGameStarted(true);
    }
  }, [numbers]);

  useEffect(() => {
    if (numbers.length > 0 && currentNumberIndex < numbers.length) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        const hideTimer = setTimeout(() => {
          setCurrentNumberIndex((prevIndex) => prevIndex + 1);
        }, 0);

        return () => clearTimeout(hideTimer);
      }, timerDuration);

      return () => clearTimeout(timer);
    } else if (gameStarted && currentNumberIndex >= numbers.length) {
      setAllDisplayed(true);
    }
  }, [currentNumberIndex, numbers, timerDuration, gameStarted]);

  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs">
        <h1 className="text-lg font-semibold mb-4">
          Set timer (in milliseconds)
        </h1>
        <Formik
          initialValues={{
            timer: timerDuration,
          }}
          onSubmit={(values) => {
            dispatch(setTimer(Number(values.timer)));
          }}
        >
          {({ setFieldValue }) => (
            <Form className="flex flex-col space-y-4">
              <label
                htmlFor="timer"
                className="text-sm font-medium text-gray-700"
              >
                Timer
              </label>
              <Field
                as="select"
                id="timer"
                name="timer"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                onChange={(e: any) => {
                  setFieldValue("timer", e.target.value);
                  dispatch(setTimer(Number(e.target.value)));
                }}
              >
                <option value="100">100 milliseconds</option>
                <option value="300">300 milliseconds</option>
                <option value="500">500 milliseconds</option>
                <option value="800">800 milliseconds</option>
                <option value="1000">1 second</option>
                <option value="2000">2 seconds (default)</option>
                <option value="3000">3 seconds</option>
              </Field>
            </Form>
          )}
        </Formik>
      </div>
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
      {gameStarted && allDisplayed && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">
            Please enter your answer below:
          </h2>
        </div>
      )}
    </div>
  );
};

export default DisplayNumbers;
