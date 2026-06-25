import { useState } from "react";

export const Counter = () => {
  const [cnt, setCnt] = useState(0);
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-20">
      <div className="text-2xl">Cnt: {cnt}</div>
      <div className="flex flex-row gap-5">
        <button
          className="px-4 py-1 rounded-lg bg-red-500 text-white cursor-pointer disabled:bg-red-300 disabled:cursor-not-allowed"
          onClick={() => setCnt((prev) => prev - 1)}
          disabled={cnt === 0}
        >
          Dec Cnt
        </button>
        <button
          className="px-4 py-1 rounded-lg bg-green-500 text-white cursor-pointer"
          onClick={() => setCnt((prev) => prev + 1)}
        >
          Inc Cnt
        </button>
      </div>
    </div>
  );
};
