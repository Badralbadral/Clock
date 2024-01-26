import { useState } from "react";

export default function StopWatch() {
  let [msecond, setMsecond] = useState(0 + `0`);
  let [second, setSecond] = useState(0);
  let [minut, setMinut] = useState(0);
  let [hour, sethour] = useState(0);

  let interval;

  function StopWatch() {
    interval = setInterval(() => {
      setMsecond(msecond++);
      if (msecond > 99) {
        setSecond((second = second + 1));
        msecond = 0;
      } else if (second > 59) {
        setMinut((minut = minut + 1));
        second = 0;
      } else if (minut > 59) {
        sethour((hour = hour + 1));
        second = 0;
      }
    }, 10);
  }
  function stop() {
    clearInterval(interval);
  }
  return (
    <div className=" h-[424px] mt-2 flex justify-center items-center flex-col text-2xl">
      <p className="text-4xl text-gray-200">
        {hour} : {minut} : {second} : {msecond}
      </p>
      <div className="flex gap-5 mt-24">
        <button
          onClick={() => {
            StopWatch();
          }}
          className="bg-gray-700 text-gray-300 rounded-lg px-3 py-[2px]"
        >
          Start
        </button>
        <button
          onClick={() => {
            stop();
          }}
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
