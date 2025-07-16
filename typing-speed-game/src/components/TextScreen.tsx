import { useMemo } from "react";
import type { TextScreenProps } from "../lib/types";
import Char from "./Text";
export default function TextScreen({
  timer,
  containerRef,
  handleKey,
  text,
  currIdx,
  userTypng,
}: TextScreenProps) {
  const textToChar = useMemo(() => text.split(""), [text]);
  return (
    <div className="pt-6">
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
        {text.split("").map((char, idx) => {
          let isCurrent = currIdx + 1 === idx ? "underline" : "";
          let isTyped = false;
          let isCorrect = false;
          if (idx < userTypng.length) {
            isTyped = true;
          }
          if (isTyped) {
            isCorrect = char === userTypng[idx];
          }
          return (
            <Char
              key={idx + char}
              char={char}
              isCurrent={isCurrent}
              isTyped={isTyped}
              isCorrect={isCorrect}
            />
          );
        })}
      </div>
    </div>
  );
}
