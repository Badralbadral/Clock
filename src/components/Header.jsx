import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex text-xl justify-center gap-9  pb-3">
      <button
        onClick={() => router.push(`/clock`)}
        className="focus:text-cyan-500 text-gray-400 px-3 py-1 rounded-lg"
      >
        Clock
      </button>
      <button
        onClick={() => router.push(`/stopWatch`)}
        className="focus:text-cyan-500 text-gray-400 px-3 py-1 rounded-lg"
      >
        StopWatch
      </button>
      <button
        onClick={() => router.push(`/timer`)}
        className="focus:text-cyan-500 text-gray-400 px-3 py-1 rounded-lg"
      >
        Timer
      </button>
    </div>
  );
}
