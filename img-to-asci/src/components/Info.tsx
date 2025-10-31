import { useState } from "react";
import { Info } from "./icons";

export default function InfoButton() {
  const [info, setInfo] = useState<boolean>(false);

  return (
    <button
      className="absolute top-0 right-0 z-100 flex size-[var(--size-button)] cursor-help justify-center rounded-md [--size-button:28px]"
      onMouseEnter={() => setInfo(true)}
      onMouseLeave={() => setInfo(false)}
    >
      <Info className="absoulte size-4" />

      {info && (
        <div className="bg-background text-foreground/80 border-border absolute top-0 left-[var(--size-button)] w-sm rounded-md border px-4 py-2 text-left font-sans shadow-lg">
          <p className="text-sm/5 tracking-tight">
            <span className="text-foreground font-semibold"> Row Length </span>
            <br /> The length of each row determines how many characters can be
            used to represent the ASCII art. <br /> Longer rows allow for more
            symbols. <br /> A recommended value 80 - 120
          </p>
        </div>
      )}
    </button>
  );
}
