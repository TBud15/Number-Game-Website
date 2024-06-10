import StartButton from "../components/GameAboveOne/StartButton";
import AnswerField from "../components/GameAboveOne/AnswerField";
import DisplayNumbers from "../components/GameAboveOne/DisplayNumbers";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-10">Game Mode 1</h1>
      <StartButton />
      <DisplayNumbers />
      <AnswerField />
    </div>
  );
};

export default Page;
