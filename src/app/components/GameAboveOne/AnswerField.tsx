"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { addUserGuess } from "../../../../store/slices/guessNumberSumOverOne";
import {
  increaseCorrectAnswers,
  increaseIncorrectAnswers,
} from "../../../../utils/statisticsLocalStorage";

const AnswerField: React.FC = () => {
  const dispatch = useAppDispatch();
  const isGameActive = useAppSelector(
    (state) => state.gameOverOne.isGameActive
  );
  const isAllNumbersDisplayed = useAppSelector(
    (state) => state.gameOverOne.allDisplayed
  );

  const { correctSum, userGuess } = useAppSelector(
    (state) => state.gameOverOne
  );

  const formik = useFormik({
    initialValues: {
      guess: "",
    },
    validationSchema: Yup.object({
      guess: Yup.number().required("Required").typeError("Must be a number"),
    }),
    onSubmit: (values) => {
      const userGuess = Number(values.guess);
      dispatch(addUserGuess(userGuess));

      // Increment correct answers if the guess is correct
      if (userGuess === correctSum) {
        increaseCorrectAnswers();
      }

      // Increment incorrect answers if the guess is incorrect
      if (userGuess !== correctSum) {
        increaseIncorrectAnswers();
      }
    },
  });

  return (
    <AnimatePresence>
      {isGameActive && isAllNumbersDisplayed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mt-6 min-h-screen"
        >
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-6 max-w-lg w-full p-8 bg-white rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Enter Your Guess
            </h2>
            <input
              name="guess"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.guess}
              className="px-4 py-3 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your guess"
            />
            {formik.errors.guess && (
              <div className="text-red-500 text-sm">{formik.errors.guess}</div>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
            {userGuess !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mt-4"
              >
                {userGuess === correctSum ? (
                  <div className="text-green-600 font-bold text-lg">
                    Correct! The sum is {correctSum}.
                  </div>
                ) : (
                  <div className="text-red-600 font-bold text-lg">
                    Incorrect, the correct sum is {correctSum}.
                  </div>
                )}
              </motion.div>
            )}
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnswerField;
