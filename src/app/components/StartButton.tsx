"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  resetGame,
  startGame,
} from "../../../store/slices/guessNumberLevelOne";

const StartButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const isGameStarted = useAppSelector((state) => state.game.gameButtonClicked);

  return (
    <div className="flex justify-center my-4">
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
    </div>
  );
};

export default StartButton;
