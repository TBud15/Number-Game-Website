"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { motion } from "framer-motion";
import { Formik, Field, Form } from "formik";
import {
  setTimer,
  setArrayLength,
  setNumberRange,
  setAllDisplayed as setAllNumbersWereDisplayed,
} from "../../../store/slices/guessNumberLevelOne";

const DisplayNumbers: React.FC = () => {
  const dispatch = useAppDispatch();

  const numbers = useAppSelector((state) => state.game.numbers);
  const timerDuration = useAppSelector((state) => state.game.timer);
  const arrayLengthState = useAppSelector((state) => state.game.arrayLength);
  const numberRangeState = useAppSelector((state) => state.game.numberRange);
  const isGameActive = useAppSelector((state) => state.game.isGameActive);

  const [currentNumberIndex, setCurrentNumberIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [allDisplayed, setAllDisplayed] = useState(false);

  //reset state when numbers change
  useEffect(() => {
    setCurrentNumberIndex(0);
    setVisible(false);
    setAllDisplayed(false);
  }, [numbers]);

  //manage displaying numbers and setting allDisplayed
  useEffect(() => {
    if (numbers.length > 0 && currentNumberIndex < numbers.length) {
      const timer = setTimeout(() => {
        setVisible(true);
        const hideTimer = setTimeout(() => {
          setVisible(false);
          setCurrentNumberIndex((prevIndex) => prevIndex + 1);
        }, timerDuration);

        return () => clearTimeout(hideTimer);
      }, timerDuration);

      return () => clearTimeout(timer);
    } else if (currentNumberIndex >= numbers.length && numbers.length > 0) {
      setAllDisplayed(true); //set allDisplayed to true when all numbers are displayed
    }
  }, [currentNumberIndex, numbers, timerDuration]);

  //dispatch when all numbers are displayed and game is active
  useEffect(() => {
    if (isGameActive) {
      dispatch(setAllNumbersWereDisplayed(allDisplayed));
    }
  }, [allDisplayed, isGameActive, dispatch]);

  return (
    <div className="flex flex-col items-center space-y-4 mt-8">
      {!isGameActive && ( //conditionally render based on isGameActive
        <>
          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs">
            <h1 className="text-lg font-semibold mb-4">
              Set timer (in milliseconds)
            </h1>
            <Formik
              initialValues={{ timer: timerDuration }}
              onSubmit={(values) => {
                dispatch(setTimer(Number(values.timer)));
              }}
            >
              {({ setFieldValue, handleSubmit }) => (
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
                      handleSubmit();
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

          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs">
            <h1 className="text-lg font-semibold mb-4">Set array length</h1>
            <Formik
              initialValues={{ arrayLength: arrayLengthState }}
              onSubmit={(values) => {
                dispatch(setArrayLength(Number(values.arrayLength)));
              }}
            >
              {({ setFieldValue, handleSubmit }) => (
                <Form className="flex flex-col space-y-4">
                  <label
                    htmlFor="arrayLength"
                    className="text-sm font-medium text-gray-700"
                  >
                    Array length
                  </label>
                  <Field
                    as="select"
                    id="arrayLength"
                    name="arrayLength"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={(e: any) => {
                      setFieldValue("arrayLength", e.target.value);
                      handleSubmit();
                    }}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </Field>
                </Form>
              )}
            </Formik>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs">
            <h1 className="text-lg font-semibold mb-4">Set number range</h1>
            <Formik
              initialValues={{ numberRange: numberRangeState }}
              onSubmit={(values) => {
                dispatch(setNumberRange(Number(values.numberRange)));
              }}
            >
              {({ setFieldValue, handleSubmit }) => (
                <Form className="flex flex-col space-y-4">
                  <label
                    htmlFor="numberRange"
                    className="text-sm font-medium text-gray-700"
                  >
                    Number range
                  </label>
                  <Field
                    as="select"
                    id="numberRange"
                    name="numberRange"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    onChange={(e: any) => {
                      setFieldValue("numberRange", e.target.value);
                      handleSubmit();
                    }}
                  >
                    <option value="9">1 to 9</option>
                    <option value="99">1 to 99</option>
                    <option value="999">1 to 999</option>
                    <option value="9999">1 to 9999</option>
                  </Field>
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}

      {visible && currentNumberIndex < numbers.length && (
        <motion.div
          key={currentNumberIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0 }}
          className="text-4xl font-semibold"
        >
          {numbers[currentNumberIndex]}
        </motion.div>
      )}
      {isGameActive && allDisplayed && (
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
