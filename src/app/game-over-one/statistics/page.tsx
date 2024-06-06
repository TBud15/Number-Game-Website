import Statistics from "@/app/components/GameAboveOne/Statistics";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-center mb-10">
        Statistics of game
      </h1>
      <Link href="/game-over-one">
        <p>Go back to game</p>
      </Link>
      <Statistics />
    </div>
  );
};

export default Page;
