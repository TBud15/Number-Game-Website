"use client";

import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import {
  getTotalGamesPlayed,
  getCorrectAnswers,
} from "../../../utils/localStorage";

const Statistics: React.FC = () => {
  const lastVisited = useAppSelector((state) => state.game.lastVisit);
  const [clientSideLastVisit, setClientSideLastVisit] = useState<string>(""); //last visit

  const [clientSideTotalGamesPlayed, setClientSideTotalGamesPlayed] =
    useState<any>(""); //total games played

  const [correctAnswers, setCorrectAnswers] = useState<any>(""); //Correct answers

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

      setCorrectAnswers(totalCorrectGames);
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
          <span>10</span>
        </div>
        <div className="flex justify-between">
          <span>Win Rate:</span>
          <span>60%</span>
        </div>
        <div className="flex justify-between">
          <span>Last played mode:</span>
          <span>1 to 9</span>
        </div>
        <div className="flex justify-between">
          <span>Last played timer:</span>
          <span>1 second</span>
        </div>
        <div className="flex justify-between">
          <span>Last played array length:</span>
          <span>5</span>
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
