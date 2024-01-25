export default function Home() {
  const [currentTime, setcurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setcurrentTime(time);
  };
  setInterval(updateTime, 1000);
}
