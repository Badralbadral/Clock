import { useState } from "react";

export default function StopWatch() {
  const [secondA, setSecondA] = useState(0);
  const [secondB, setSecondB] = useState(0);
  const [minutA, setMinutA] = useState(0);
  const [minutB, setMinutB] = useState(0);
  const [hourA, setHourA] = useState(0);
  const [hourB, sethourB] = useState(0);

  function StopWatch() {
    setInterval(setSecondA(secondA + 1), 1000);
  }
  return (
    <div className=" h-[424px] mt-2 flex justify-center items-center flex-col text-2xl">
      <p className="text-4xl text-gray-200">
        {hourB}
        {hourA} : {minutB}
        {minutA} : {secondB}
        {secondA}
      </p>
      <div className="flex gap-5 mt-24">
        <button
          onClick={() => StopWatch()}
          className="bg-gray-700 text-gray-300 rounded-lg px-3 py-[2px]"
        >
          Start
        </button>
        <button
          onClick={clearInterval(StopWatch)}
          className="bg-gray-700 text-gray-300 rounded-lg px-3 py-[2px]"
        >
          Stop
        </button>
        <button className="bg-gray-700 text-gray-300 rounded-lg px-3 py-[2px]">
          Reset
        </button>
      </div>
    </div>
  );
}
