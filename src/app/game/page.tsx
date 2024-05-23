import StartButton from "../components/StartButton";
import NumberDisplay from "../components/NumberDisplay";
import AnswerField from "../components/AnswerField";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Number Game</h1>
      <StartButton />
      <NumberDisplay />
      <AnswerField />
    </div>
  );
};

export default Page;
