import { Pause, Play, TimerReset } from "lucide-react";
import { useEffect, useState } from "react";

export const StopWatch = () => {
  const [stopWatchvalue, setSTopWatchvalue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSTopWatchvalue((prev) => prev + 10);
      }, [10]);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // STOPWATCH values
  const hours = Math.floor(stopWatchvalue / 3600000);
  const minutes = Math.floor((stopWatchvalue % 3600000) / 60000);
  const seconds = Math.floor((stopWatchvalue % 60000) / 1000);
  const milliseconds = Math.floor((stopWatchvalue % 1000) / 10);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-blue-500 ">STOP WATCH</h2>
      <div className="w-full h-60 border border-blue-500 rounded-xl font-bold text-xl flex justify-center items-center">
        <p>
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}:
          {String(milliseconds).padStart(2, "0")}
        </p>
      </div>
      <div className="flex flex-row gap-5 justify-between items-center">
        <button
          className="flex flex-col py-1  items-center bg-amber-100 w-full cursor-pointer"
          onClick={() => setIsRunning(!isRunning)}
        >
          {!isRunning ? <Play /> : <Pause />}
        </button>
        <button
          className="flex flex-col py-1  items-center bg-amber-100 w-full cursor-pointer"
          onClick={() => {
            setIsRunning(false);
            setSTopWatchvalue(0);
          }}
        >
          <TimerReset />
        </button>
      </div>
    </div>
  );
};
