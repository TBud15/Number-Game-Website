import StartButton from "../components/StartButton";
import AnswerField from "../components/AnswerField";
import DisplayNumbers from "../components/DisplayNumbers";
import Statistics from "../components/Statistics";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-10">Number Game</h1>
      <StartButton />
      <Statistics />
      <DisplayNumbers />
      <AnswerField />
    </div>
  );
};

export default Page;
