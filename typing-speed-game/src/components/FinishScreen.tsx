import type { FinishScreenProps } from "../lib/types";

export default function FinishScreen({
  timer,
  userTypng,
  text,
  dispatch,
}: FinishScreenProps) {
  const onlyChar = text.split("");
  let correctChar = 0;
  for (let i = 0; i < userTypng.length; i++) {
    userTypng[i] === onlyChar[i] ? correctChar++ : correctChar;
  }
  const precision = (correctChar / userTypng.length) * 100;
  const minuteOrSeconds = timer >= 60 ? timer : 60 / timer;

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-gray-600 text-2xl">
        WPM:
        <span className="text-lime-400 text-3xl pl-2">
          {((userTypng.length / 5) * minuteOrSeconds).toFixed(2)}
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
