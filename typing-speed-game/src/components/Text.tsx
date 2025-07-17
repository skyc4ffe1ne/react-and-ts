export default function Char({ char, isCurrent, isTyped, isCorrect }) {
  return (
    <span
      className={`${isCurrent ? "underline" : ""}  ${isTyped ? (isCorrect ? "text-green-400" : "text-red-400") : "text-gray-400"}`}
    >
      {char}
    </span>
  );
}
