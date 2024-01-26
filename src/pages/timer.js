import { useState } from "react";

export default function Timer() {
  const [second, setSecond] = useState(10);
  const [minut, setMinut] = useState(0);
  const [hour, sethour] = useState(0);

  function timer() {
    setSecond(second - 1);
  }
  let myTImer;

  return (
    <div className=" h-[424px] flex gap-24 justify-center items-center flex-col text-2xl mt-2">
      <p className="text-4xl text-gray-200">
        {hour} : {minut} : {second}
      </p>
      <div className="flex gap-5">
        <button
          onClick={(myTImer = setInterval(timer, 1000))}
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
