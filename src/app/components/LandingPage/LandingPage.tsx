import React from "react";
import AnimatedNumbers from "./AnimatedNumbers";
import GameModes from "./GameModes";
import GameModesExplanation from "./GameModesExplanation";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 pb-10">
      <AnimatedNumbers />
      <GameModes />
      <GameModesExplanation />
    </div>
  );
};

export default LandingPage;
