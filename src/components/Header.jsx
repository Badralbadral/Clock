import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-9 mb-8">
      <button
        onClick={() => router.push(`/clock`)}
        className="bg-white px-3 py-1 rounded-lg"
      >
        Clock
      </button>
      <button
        onClick={() => router.push(`/stopWatch`)}
        className="bg-white px-3 py-1 rounded-lg"
      >
        StopWatch
      </button>
      <button
        onClick={() => router.push(`/timer`)}
        className="bg-white px-3 py-1 rounded-lg"
      >
        Timer
      </button>
    </div>
  );
}
