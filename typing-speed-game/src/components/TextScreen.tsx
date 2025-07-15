import type { TextScreenProps } from "../lib/types";
export default function TextScreen({
  timer,
  containerRef,
  handleKey,
  text,
  currIdx,
  userTypng,
}: TextScreenProps) {
  return (
    <div className="pt-16">
      <h2 className="text-4xl text-center text-lime-500 font-semibold">
        {timer}
      </h2>
      <div
        className="text-6xl/20 text-gray-500 outline-none text-center text-balance"
        tabIndex={0}
        ref={containerRef}
        onKeyDown={(e) => {
          handleKey(e);
          e.preventDefault();
        }}
      >
        {text.split("").map((char, idx) => (
          <span
            key={idx}
            className={`${currIdx + 1 === idx ? "underline" : ""}  ${idx < userTypng.length ? (char === userTypng[idx] ? "text-green-400" : "text-red-400") : "text-gray-400"}`}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
