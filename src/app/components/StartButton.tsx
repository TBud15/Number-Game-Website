"use client";

import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { startGame } from "../../../store/slices/gameSlice";

const StartButton: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      onClick={() => dispatch(startGame())}
    >
      Start Game
    </button>
  );
};

export default StartButton;
