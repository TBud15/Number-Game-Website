"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addUserGuess } from "../../../store/slices/guessNumberLevelOne";
import {
  increaseCorrectAnswers,
  increaseIncorrectAnswers,
} from "../../../utils/statisticsLocalStorage";

const AnswerField: React.FC = () => {
  const dispatch = useAppDispatch();
  const isGameActive = useAppSelector((state) => state.game.isGameActive);
  const isAllNumbersDisplayed = useAppSelector(
    (state) => state.game.allDisplayed
  );
  const timerSelected = useAppSelector((state) => state.game.timer);

  const { correctSum, userGuess } = useAppSelector((state) => state.game);

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

      //Increment incorrect answers if the guess is incorrect
      if (userGuess != correctSum) {
        increaseIncorrectAnswers();
      }
    },
  });

  return (
    isGameActive &&
    isAllNumbersDisplayed && ( //conditionally render based on isGameActive and isAllNumbersDisplayed
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 max-w-md mx-auto mt-8"
      >
        <input
          name="guess"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.guess}
          className="px-3 py-2 border rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enter your guess"
        />
        {formik.errors.guess && (
          <div className="text-red-500 text-sm">{formik.errors.guess}</div>
        )}
        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-800 transition duration-200"
        >
          Submit
        </button>
        {userGuess !== null && (
          <div className="text-center mt-4">
            {userGuess === correctSum ? (
              <div className="text-green-600 font-bold text-lg">
                Correct! The sum is {correctSum}.
              </div>
            ) : (
              <div className="text-red-600 font-bold text-lg">
                Incorrect, the correct sum is {correctSum}.
              </div>
            )}
          </div>
        )}
      </form>
    )
  ); //render nothing if conditions are not met
};

export default AnswerField;
