"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  resetGame,
  startGame,
} from "../../../store/slices/guessNumberLevelOne";

const StartButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const isGameStarted = useAppSelector((state) => state.game.gameButtonClicked);
  const lastVisited = useAppSelector((state) => state.game.lastVisit);
  const [clientSideLastVisit, setClientSideLastVisit] = useState<string>("");

  useEffect(() => {
    //set client-side last visit to avoid hydration issues
    if (lastVisited) {
      setClientSideLastVisit(new Date(lastVisited).toLocaleString());
    }
  }, [lastVisited]);

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
    </div>
  );
};

export default StartButton;
