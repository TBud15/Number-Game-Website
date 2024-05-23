"use client";

import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { startGame } from "../../../store/slices/guessNumberLevelOne";

const StartButton: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => dispatch(startGame())}
      >
        Start Game
      </button>
    </div>
  );
};

export default StartButton;
