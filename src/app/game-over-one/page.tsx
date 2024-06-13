"use client";

import { useEffect } from "react";
import StartButton from "../components/GameAboveOne/StartButton";
import AnswerField from "../components/GameAboveOne/AnswerField";
import DisplayNumbers from "../components/GameAboveOne/DisplayNumbers";
import { useAppDispatch } from "../../../store";
import { resetGame } from "../../../store/slices/guessNumberSumOverOne";

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
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-10">Game Mode 1</h1>
        <StartButton />
        <DisplayNumbers />
        <AnswerField />
      </div>
    </div>
  );
};

export default Page;
