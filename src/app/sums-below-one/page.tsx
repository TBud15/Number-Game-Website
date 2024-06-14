import StartButton from "./local-components/StartButton";
import AnswerField from "./local-components/AnswerField";
import DisplayNumbers from "./local-components/DisplayNumbers";
import GameDescription from "./local-components/GameDescription";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sums Below One - Quick Mental Math Challenge",
  description:
    "Test your skills with Sums Below One, a speed math game designed to help you quickly calculate sums of positive and negative numbers in your head. Start playing now to improve your mental arithmetic!",
};

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-blue-300">
      <div className="container mx-auto p-4 ">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Sums Below One
        </h1>
        <StartButton />
        <DisplayNumbers />
        <AnswerField />
        <GameDescription />
      </div>
    </div>
  );
};

export default Page;
