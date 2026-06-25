import { Pause, Play, TimerReset } from "lucide-react";
import { useState, useEffect } from "react";
export const Timer = () => {
  const [timerValue, setTimerValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimerValue((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, [1000]);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    const totalSeconds =
      Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
    setTimerValue(totalSeconds);
    setIsRunning(true);
  };

  const h = Math.floor(timerValue / 3600);
  const m = Math.floor((timerValue % 3600) / 60);
  const s = Math.floor(timerValue % 60);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-blue-500 ">TIMER</h2>
      <div className="w-full h-60 border border-blue-500 rounded-xl font-bold text-xl flex flex-row gap-2 justify-center items-center">
        <input
          type="number"
          placeholder="HH"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-20  border-blue-500 px-2 py-1"
        />
        :
        <input
          type="number"
          placeholder="MM"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="w-20  border-blue-500 px-2 py-1"
        />
        :
        <input
          type="number"
          placeholder="SS"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          className="w-20  border-blue-500 px-2 py-1"
        />
      </div>
      <p>
        {String(h).padStart(2, "0")}: {String(m).padStart(2, "0")}:
        {String(s).padStart(2, "0")}
      </p>
      <div>
        {timerValue === 0 ? (
          <button
            className="flex flex-col py-1  items-center bg-amber-100 w-full cursor-pointer"
            onClick={() => handleStart()}
          >
            Start Timer
          </button>
        ) : (
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
                setTimerValue("0");
              }}
            >
              <TimerReset />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
