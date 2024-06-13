"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { addUserGuess } from "../../../../store/slices/guessNumberSumBelowOne";
import {
  increaseCorrectAnswers,
  increaseIncorrectAnswers,
} from "../../../../utils/statisticsLocalStorage";

const AnswerField: React.FC = () => {
  const dispatch = useAppDispatch();
  const isGameActive = useAppSelector(
    (state) => state.gameBelowOne.isGameActive
  );
  const isAllNumbersDisplayed = useAppSelector(
    (state) => state.gameBelowOne.allDisplayed
  );

  const { correctSum, userGuess } = useAppSelector(
    (state) => state.gameBelowOne
  );

  const [currentValue, setCurrentValue] = useState("");
  const [showIncorrectMessage, setShowIncorrectMessage] = useState(false);

  const formik = useFormik({
    initialValues: {
      guess: "",
    },
    validationSchema: Yup.object({
      guess: Yup.number().required("Required").typeError("Must be a number"),
    }),
    onSubmit: (values, { resetForm }) => {
      const userGuess = Number(values.guess);
      dispatch(addUserGuess(userGuess));

      // Increment correct answers if the guess is correct
      if (userGuess === correctSum) {
        increaseCorrectAnswers();
      } else {
        // Increment incorrect answers if the guess is incorrect
        increaseIncorrectAnswers();
        setShowIncorrectMessage(true);
        setTimeout(() => {
          setShowIncorrectMessage(false);
        }, 3000); // Show the message for 3 seconds
      }

      // Reset the form and local state
      resetForm();
      setCurrentValue("");
    },
  });

  useEffect(() => {
    setCurrentValue(formik.values.guess);
  }, [formik.values.guess]);

  return (
    <AnimatePresence>
      {isGameActive && isAllNumbersDisplayed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center min-h-screen mt-6"
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
              value={currentValue}
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
                  showIncorrectMessage && (
                    <div className="text-red-600 font-bold text-lg">
                      Incorrect, please try again.
                    </div>
                  )
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
