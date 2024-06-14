import StartButton from "./local-components/StartButton";
import AnswerField from "./local-components/AnswerField";
import DisplayNumbers from "./local-components/DisplayNumbers";
import GameDescription from "./local-components/GameDescription";

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
