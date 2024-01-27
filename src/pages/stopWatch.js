import { useState } from "react";

export default function StopWatch() {
  let [msecond, setMsecond] = useState(0);
  let [second, setSecond] = useState(0);
  let [minut, setMinut] = useState(0);
  let [hour, setHour] = useState(0);
  const [interv, setInterv] = useState();
  const [begin, setBegin] = useState();
  const [stoped, setStoped] = useState(false);

  function start() {
    setInterv(
      setInterval(() => {
        setMsecond(msecond++);
        if (msecond > 99) {
          setSecond((second = second + 1));
          setMsecond((msecond = 0));
        }
        if (second > 59) {
          setMinut((minut = minut + 1));
          setSecond((second = 0));
        }
        if (minut > 59) {
          setHour((hour = hour + 1));
          setMinut((minut = 0));
        }
      }, 10)
    );
    setBegin(true);
  }

  function stop() {
    clearInterval(interv);
    setStoped(true);
  }

  function reset() {
    setMsecond(0);
    setSecond(0);
    setMinut(0);
    setHour(0);
    clearInterval(interv);
    setBegin(false);
  }

  function resume() {
    setStoped(!stoped);
    setInterv(
      setInterval(() => {
        setMsecond(msecond++);
        if (msecond > 99) {
          setSecond((second = second + 1));
          setMsecond((msecond = 0));
        }
        if (second > 59) {
          setMinut((minut = minut + 1));
          setSecond((second = 0));
        }
        if (minut > 59) {
          setHour((hour = hour + 1));
          setMinut((minut = 0));
        }
      }, 10)
    );
  }
  return (
    <div className="h-[424px] mt-2 flex justify-center items-center flex-col text-2xl">
      <p className="text-4xl text-gray-200">
        {hour >= 10 ? hour : `0` + hour} : {minut >= 10 ? minut : `0` + minut} :{" "}
        {second >= 10 ? second : `0` + second} :{" "}
        {msecond >= 10 ? msecond : `0` + msecond}
      </p>
      <div className="flex gap-5 mt-24">
        {!begin ? (
          <button
            onClick={() => {
              start();
            }}
            className="bg-gray-700 text-cyan-300 rounded-[50px] px-5 py-[26px]"
          >
            Start
          </button>
        ) : !stoped ? (
          <div className="flex gap-8">
            <button
              onClick={() => {
                stop();
              }}
              className="bg-gray-700 text-red-400 rounded-[50px] px-5 py-[26px] active:bg-red-500 duration-100"
            >
              Stop
            </button>
            <button
              onClick={() => {
                reset();
              }}
              className="bg-gray-700 text-gray-200 rounded-[50px] px-5 py-[26px] active:bg-gray-100 duration-100"
            >
              Reset
            </button>
          </div>
        ) : (
          <div className="flex gap-8">
            <button
              onClick={() => {
                resume();
              }}
              className="bg-gray-700 text-cyan-300 rounded-[50px] px-5 py-[26px] "
            >
              Resume
            </button>
            <button
              onClick={() => {
                reset();
              }}
              className="bg-gray-700 text-gray-200 rounded-[50px] px-5 py-[26px] active:bg-gray-100 duration-100"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
