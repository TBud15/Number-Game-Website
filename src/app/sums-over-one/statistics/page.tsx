import Statistics from "../local-components/Statistics";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-center mb-10">
        Statistics of game
      </h1>
      <Link href="/sums-over-one">
        <p className="inline-block bg-green-700 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">
          Go back to game
        </p>
      </Link>
      <Statistics />
    </div>
  );
};

export default Page;
