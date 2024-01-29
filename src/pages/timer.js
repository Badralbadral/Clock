import { useState } from "react";
import { hourArray } from "@/dummyData";
import { minAndSecArray } from "@/dummyData";

export default function Timer() {
  let [second, setSecond] = useState(0);
  let [minut, setMinut] = useState(0);
  let [hour, setHour] = useState(0);
  const [interv, setInterv] = useState();
  const [begin, setBegin] = useState();
  const [stoped, setStoped] = useState(false);

  function start() {
    setInterv(
      setInterval(() => {
        setSecond((second = second - 1));
        if (second == 0) {
          second = 60;
        }
        if (second == 59) {
          setMinut((minut = minut - 1));
        }
        if (minut == 0) {
          minut = 60;
        }
        if (minut == 59 && second == 59) {
          setHour((hour = hour - 1));
        }
        if (minut == 0 && second == 0) {
          setHour((hour = hour - 1));
        }
        if (second == 0 && minut == 0 && hour == 0) {
          clearInterval(interv);
        }
      }, 1000)
    );
    setBegin(true);
  }

  function stop() {
    clearInterval(interv);
    setStoped(true);
  }

  function reset() {
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
        setSecond((second = second - 1));
        if (second == 0) {
          second = 60;
        }
        if (second == 59) {
          setMinut((minut = minut - 1));
        }
        if (minut == 0) {
          minut = 60;
        }
        if (minut == 59 && second == 59) {
          setHour((hour = hour - 1));
        }
      }, 1000)
    );
  }
  function secondHandler(e) {
    setSecond(e.target.value);
  }
  function minutHandler(e) {
    setMinut(e.target.value);
  }
  function hourHandler(e) {
    setHour(e.target.value);
  }
  if (second == 0 && minut == 0 && hour == 0) {
    clearInterval(interv);
  }

  return (
    <div className=" h-[424px] mt-2 flex justify-center items-center flex-col text-2xl">
      <div
        className={`flex justify-center text-gray-200 duration-300 text-4xl ${
          begin ? "hidden" : "block"
        }`}
      >
        <select
          defaultValue={hour}
          onChange={hourHandler}
          className="text-gray-900 rounded-lg mr-[9.6px] focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 appearance-none"
        >
          <option>00</option>
          {hourArray.map((e, index) => {
            return (
              <option key={index} value={e}>
                {e >= 10 ? e : `0` + e}
              </option>
            );
          })}
        </select>
        :
        <select
          defaultValue={minut}
          onChange={minutHandler}
          className="text-gray-900 ml-[9.6px] mr-[9.6px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 appearance-none"
        >
          <option>00</option>
          {minAndSecArray.map((e, index) => {
            return (
              <option key={index} value={e}>
                {e >= 10 ? e : `0` + e}
              </option>
            );
          })}
        </select>
        :
        <select
          defaultValue={second}
          onChange={secondHandler}
          className="text-gray-900 ml-[9.6px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 appearance-none"
        >
          <option>00</option>
          {minAndSecArray.map((e, index) => {
            return (
              <option key={index} value={e}>
                {e >= 10 ? e : `0` + e}
              </option>
            );
          })}
        </select>
      </div>
      <p
        className={`text-4xl text-gray-200  duration-300 ${
          !begin ? "hidden" : "block"
        }`}
      >
        {hour >= 10 ? hour : `0` + hour} : {minut >= 10 ? minut : `0` + minut} :{" "}
        {second >= 10 ? second : `0` + second}
      </p>
      <div className="flex gap-5 mt-24">
        {!begin ? (
          <button
            onClick={() => {
              start();
            }}
            className="bg-gray-700 text-cyan-300 rounded-[50px] px-5 py-[26px] "
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
              Pause
            </button>
            <button
              onClick={() => {
                reset();
              }}
              className="bg-gray-700 text-gray-200 rounded-[50px] px-5 py-[26px] active:bg-gray-100 duration-100"
            >
              Cancel
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
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
