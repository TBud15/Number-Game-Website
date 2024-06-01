import StartButton from "../components/GameBelowOne/StartButton";
import AnswerField from "../components/GameBelowOne/AnswerField";
import DisplayNumbers from "../components/GameBelowOne/DisplayNumbers";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-10">
        Number Game Sum Below One
      </h1>
      <StartButton />
      <DisplayNumbers />
      <AnswerField />
    </div>
  );
};

export default Page;
