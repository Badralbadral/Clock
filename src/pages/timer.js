import { useState } from "react";

export default function Timer() {
  const [secondA, setSecondA] = useState(10);
  const [secondB, setSecondB] = useState();
  const [minutA, setMinutA] = useState(0);
  const [minutB, setMinutB] = useState(0);
  const [hourA, setHourA] = useState(0);
  const [hourB, sethourB] = useState(0);

  function dou() {
    function timer() {
      return setSecondA(secondA - 1);
    }
    setInterval(timer, 1000);
  }
  return (
    <div className=" h-[424px] flex gap-24 justify-center items-center flex-col text-2xl mt-2">
      <p className="text-4xl text-gray-200">
        {hourB}
        {hourA} : {minutB}
        {minutA} : {secondB}
        {secondA}
      </p>
      <div className="flex gap-5">
        <button
          onClick={dou}
          className="bg-gray-700 text-gray-300 rounded-lg px-3 py-[2px]"
        >
          Start
        </button>
        <button className="bg-gray-700 text-gray-300 rounded-lg px-3 py-[2px]">
          Stop
        </button>
        <button className="bg-gray-700 text-gray-300 rounded-lg px-3 py-[2px]">
          Pause
        </button>
      </div>
    </div>
  );
}
