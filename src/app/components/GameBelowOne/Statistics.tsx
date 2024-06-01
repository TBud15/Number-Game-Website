"use client";

import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../../../store/hooks";
import {
  getTotalGamesPlayed,
  getCorrectAnswers,
  getIncorrectAnswers,
} from "../../../../utils/statisticsLocalStorage";

const Statistics: React.FC = () => {
  const lastVisited = useAppSelector((state) => state.gameBelowOne.lastVisit);
  const [clientSideLastVisit, setClientSideLastVisit] = useState<string>(""); //last visit

  const [clientSideTotalGamesPlayed, setClientSideTotalGamesPlayed] =
    useState<any>(""); //total games played

  const [correctAnswers, setCorrectAnswers] = useState<any>(""); //Correct answers
  const [incorrectAnswers, setIncorrectAnswers] = useState<any>(""); //Incorrect answers
  const [winRate, setWinRate] = useState<any>(""); //winrate

  const [lastPlayedTimer, setLastPlayedTimer] = useState<any>("");

  //local winrate calculation
  function calculateWinRate(totalWins: any, totalLosses: any) {
    if (totalWins + totalLosses === 0) {
      return 0; //to avoid division by zero
    }

    let winRate = (totalWins / (totalWins + totalLosses)) * 100;
    return winRate.toFixed(2); //returns win rate rounded to 2 decimal places
  }

  useEffect(() => {
    //Last visited
    if (lastVisited) {
      setClientSideLastVisit(new Date(lastVisited).toLocaleString());
    }

    //Total Sum Games Played
    if (typeof window !== "undefined") {
      const totalGames = getTotalGamesPlayed();
      setClientSideTotalGamesPlayed(totalGames);
    }

    if (typeof window !== "undefined") {
      const totalCorrectGames = getCorrectAnswers();
      const totalIncorrectGames = getIncorrectAnswers();

      setCorrectAnswers(totalCorrectGames);
      setIncorrectAnswers(totalIncorrectGames);

      //WinRate
      const calculatedWinRate = calculateWinRate(
        totalCorrectGames,
        totalIncorrectGames
      );
      setWinRate(calculatedWinRate);
    }
  }, []);

  return (
    <div className="p-8 bg-white shadow-md rounded-lg max-w-md mx-auto">
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
    </div>
  );
};

export default Statistics;
