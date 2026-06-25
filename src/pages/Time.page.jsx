import { Timer } from "../components/time/Timer";
import { StopWatch } from "../components/time/StopWatch";

export const TimePage = () => {
 
  return (
    <div className="grid grid-cols-2 gap-6 my-10">
      <Timer />
      <StopWatch />
    </div>
  );
};
