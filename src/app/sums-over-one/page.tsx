import StartButton from "./local-components/StartButton";
import AnswerField from "./local-components/AnswerField";
import DisplayNumbers from "./local-components/DisplayNumbers";
import GameDescription from "./local-components/GameDescription";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sums Over One - Quick Mental Math Challenge",
  description:
    "Enhance your mental arithmetic skills with Sums Over One, a quick math challenge that prompts you to calculate sums of positive numbers quickly and accurately. Perfect for sharpening your mental calculation abilities!",
};

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 to-blue-300">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-10">Sums Over One</h1>
        <StartButton />
        <DisplayNumbers />
        <AnswerField />
        <GameDescription />
      </div>
    </div>
  );
};

export default Page;
