"use client";

import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../../../store/hooks";
import {
  getTotalGamesPlayed,
  getCorrectAnswers,
  getIncorrectAnswers,
  ResetLocalStorageStatistics,
} from "../../../../utils/statisticsLocalStorage";

const Statistics: React.FC = () => {
  const lastVisited = useAppSelector((state) => state.gameBelowOne.lastVisit);

  const [clientSideLastVisit, setClientSideLastVisit] = useState<string>("");
  const [clientSideTotalGamesPlayed, setClientSideTotalGamesPlayed] =
    useState<any>("");
  const [correctAnswers, setCorrectAnswers] = useState<any>("");
  const [incorrectAnswers, setIncorrectAnswers] = useState<any>("");
  const [winRate, setWinRate] = useState<any>("");

  function calculateWinRate(totalWins: any, totalLosses: any) {
    if (totalWins + totalLosses === 0) {
      return 0;
    }
    let winRate = (totalWins / (totalWins + totalLosses)) * 100;
    return winRate.toFixed(2);
  }

  const resetStatistics = () => {
    ResetLocalStorageStatistics();
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setClientSideTotalGamesPlayed(0);
  };

  useEffect(() => {
    if (lastVisited) {
      setClientSideLastVisit(new Date(lastVisited).toLocaleString());
    }
    if (typeof window !== "undefined") {
      const totalGames = getTotalGamesPlayed();
      setClientSideTotalGamesPlayed(totalGames);
      const totalCorrectGames = getCorrectAnswers();
      const totalIncorrectGames = getIncorrectAnswers();
      setCorrectAnswers(totalCorrectGames);
      setIncorrectAnswers(totalIncorrectGames);
      const calculatedWinRate = calculateWinRate(
        totalCorrectGames,
        totalIncorrectGames
      );
      setWinRate(calculatedWinRate);
    }
  }, [lastVisited]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="p-8 bg-white shadow-md rounded-lg max-w-md mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">
          Your Game Statistics
        </h2>
        <div className="space-y-4 text-blue-500">
          <div className="flex justify-between">
            <span>Total Sum Games Played:</span>
            <span>{clientSideTotalGamesPlayed}</span>
          </div>
          <div className="flex justify-between">
            <span>Correct answers:</span>
            <span>{correctAnswers}</span>
          </div>
          <div className="flex justify-between">
            <span>Incorrect Answers:</span>
            <span>{incorrectAnswers}</span>
          </div>
          <div className="flex justify-between">
            <span>Win Rate:</span>
            {winRate && <span>{winRate} %</span>}
          </div>
          <div className="flex justify-between">
            <span>Last visited:</span>
            <span>{clientSideLastVisit ? clientSideLastVisit : ""}</span>
          </div>
        </div>
        <div className="mt-auto">
          {" "}
          {/* This will push the button to the bottom */}
          <button
            className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-400 transition duration-300 ease-in-out mt-5"
            onClick={resetStatistics}
          >
            Reset all statistics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
