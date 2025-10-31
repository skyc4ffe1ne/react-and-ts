import type { SpinnerProps } from "../../lib/types.ts";

function SpinnerIcon() {
  return (
    <svg
      width="48"
      height="96"
      viewBox="0 0 48 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Final">
        <rect id="bit_1-hidden" width="24" height="24" fill="black" />
        <rect id="bit_0" y="24" width="24" height="24" fill="black" />
        <rect id="bit_5" x="24" y="72" width="24" height="24" fill="black" />
        <rect id="bit_2" x="24" width="24" height="24" fill="black" />
        <rect id="bit_3" x="24" y="24" width="24" height="24" fill="black" />
        <rect id="bit_4" x="24" y="48" width="24" height="24" fill="black" />
      </g>
    </svg>
  );
}

export default function Spinner({ setSpinner }: SpinnerProps) {
  return (
    <div className="h-dvh w-full" id="spinner_container">
      <div className="relative inset-0 top-1/2 left-1/2 flex w-2/4 -translate-x-1/2 -translate-y-1/2 place-content-center items-end justify-center gap-2">
        <SpinnerIcon />
        <h3
          className="text-secondary-foreground font-mono text-4xl/4 opacity-100"
          id="bit_text"
          onAnimationEnd={() => setSpinner(false)}
        >
          bit-step
        </h3>
      </div>
    </div>
  );
}
