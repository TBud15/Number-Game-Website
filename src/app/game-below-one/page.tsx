"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "../../../store";
import { resetGame } from "../../../store/slices/guessNumberSumBelowOne";
import StartButton from "../components/GameBelowOne/StartButton";
import AnswerField from "../components/GameBelowOne/AnswerField";
import DisplayNumbers from "../components/GameBelowOne/DisplayNumbers";

const Page: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    //reset game when component unmounts
    return () => {
      dispatch(resetGame());
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-blue-300">
      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Game Mode 2
        </h1>
        <StartButton />
        <DisplayNumbers />
        <AnswerField />
      </div>
    </div>
  );
};

export default Page;
