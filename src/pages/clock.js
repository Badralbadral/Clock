import { useState } from "react";

export default function Home() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setcurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setcurrentTime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <div className=" h-[439px] text-5xl flex justify-center mt-40 text-gray-200">
      {time}
    </div>
  );
}
