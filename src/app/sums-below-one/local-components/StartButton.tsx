"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  resetGame,
  startGame,
} from "../../../../store/slices/guessNumberSumBelowOne";

const StartButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const isGameStarted = useAppSelector(
    (state) => state.gameBelowOne.gameButtonClicked
  );

  useEffect(() => {
    //reset game when component unmounts
    return () => {
      dispatch(resetGame());
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center my-4">
      {!isGameStarted ? (
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-800 transition duration-200"
          onClick={() => dispatch(startGame())}
        >
          Start Game
        </button>
      ) : (
        <button
          className="px-6 py-3 bg-red-600 text-white rounded-md shadow-md hover:bg-red-800 transition duration-200"
          onClick={() => dispatch(resetGame())}
        >
          Reset Game
        </button>
      )}
      <Link href="sums-below-one/statistics" className="mt-6">
        <p>Go to your statistics</p>
      </Link>
    </div>
  );
};

export default StartButton;
