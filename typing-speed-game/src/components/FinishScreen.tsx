import type { FinishScreenProps } from "../lib/types";

export default function FinishScreen({
  dispatch,
  timer,
  userTypngAll,
  precision,
}: FinishScreenProps) {
  const minuteOrSeconds = timer >= 60 ? timer : 60 / timer;

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-gray-600 text-2xl">
        WPM:
        <span className="text-lime-400 text-3xl pl-2">
          {((userTypngAll.length / 5) * minuteOrSeconds).toFixed(2)}
        </span>
      </p>
      <p className="text-gray-600 text-2xl">
        Precision:
        <span className="text-3xl pl-2 text-lime-400">
          {precision.toFixed(0)}%
        </span>
      </p>

      <button
        onClick={() => dispatch({ type: "RESTART" })}
        className="px-3 py-1 bg-lime-400 text-black text-xl rounded-md mt-2 cursor-pointer"
      >
        Restart
      </button>
    </div>
  );
}
