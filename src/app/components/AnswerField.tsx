"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addUserGuess } from "../../../store/slices/gameSlice";

const AnswerField: React.FC = () => {
  const dispatch = useAppDispatch();
  const { correctSum } = useAppSelector((state) => state.game);

  const formik = useFormik({
    initialValues: {
      guess: "",
    },
    validationSchema: Yup.object({
      guess: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      const userGuess = Number(values.guess);
      dispatch(addUserGuess(userGuess));
      alert(
        `Your guess is: ${userGuess}. The correct sum is: ${correctSum}. ${
          userGuess === correctSum ? "You are correct!" : "Try again!"
        }`
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <input
        name="guess"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.guess}
        className="px-3 py-2 border rounded w-full"
      />
      {formik.errors.guess ? (
        <div className="text-red-500">{formik.errors.guess}</div>
      ) : null}
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AnswerField;
