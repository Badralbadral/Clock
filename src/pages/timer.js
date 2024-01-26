import { useState } from "react";

export default function Timer() {
  let [second, setSecond] = useState(3);
  let [minut, setMinut] = useState(0);
  let [hour, setHour] = useState(1);
  const [interv, setInterv] = useState();
  const [begin, setBegin] = useState();
  const [stoped, setStoped] = useState(false);

  function start() {
    setInterv(
      setInterval(() => {
        setSecond(second--);
        if (second == -1) {
          second = 59;
        }
        if (second == 58) {
          setMinut((minut = minut - 1));
        }
        // second and minut
        if (minut == 0) {
          // setHour((hour = hour - 1));
          minut = 60;
        }
        if (minut == 59 && second == 59) {
          setHour((hour = hour - 1));
        }
        // if (minut < 0) {
        //   sethour((hour = hour - 1));
        //   setMinut((minut = 59));
        // }
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

  // function resume() {
  //   setStoped(!stoped);
  //   setInterv(
  //     setInterval(() => {
  //       setSecond(second--);
  //       if (second < 0) {
  //         setMinut((minut = minut - 1));
  //         second = 59;
  //       }

  //       // if (minut < 0) {
  //       //   sethour((hour = hour - 1));
  //       //   setMinut((minut = 59));
  //       // }
  //     }, 1000)
  //   );
  // }

  return (
    <div className=" h-[424px] mt-2 flex justify-center items-center flex-col text-2xl">
      <p className="text-4xl text-gray-200">
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
