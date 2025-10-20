import { X, Circle, Triangle } from "./Icons.tsx";
import { useToast } from "../../contexts/ToastProvider.tsx";
import { useEffect, useState } from "react";

const LOADING_ANIMATION = 100;

function calculate(duration: number): number {
  const steps = duration / LOADING_ANIMATION;
  const increment = LOADING_ANIMATION / steps;
  return increment;
}

export default function Toast({ title, duration, dY, dX }) {
  const { setToast } = useToast();
  const [timer, setTimer] = useState<number>(0);

  const increment = calculate(duration);
  useEffect(() => {
    const timerID = setTimeout(() => {
      setToast(false);
    }, duration + 200);

    const loadingID = setInterval(() => {
      setTimer((prev) => (prev += increment));
    }, LOADING_ANIMATION);

    return () => {
      clearTimeout(timerID);
      clearInterval(loadingID);
    };
  }, []);

  return (
    <div className={`fixed ${dX}-0 ${dY}-0 w-sm bg-gray-100 p-4`}>
      <header className="border-border flex items-center justify-between border-b">
        <h3 className="font-mono text-sm/6 font-medium uppercase">Info </h3>
        <div className="flex">
          <div className="border-border grid size-6 place-content-center border border-b-0">
            <Circle className="size-4 fill-gray-300/80 stroke-transparent" />
          </div>
          <div className="border-border grid size-6 place-content-center border border-b-0">
            <Triangle className="size-4 fill-gray-300/80 stroke-transparent" />
          </div>

          <button
            className="border-border grid size-6 cursor-pointer place-content-center border border-b-0"
            onClick={() => setToast(false)}
          >
            <X className="size-4" />
          </button>
        </div>
      </header>
      <h2 className="text-foreground pt-2 pb-8 text-4xl tracking-tighter text-balance">
        {title}
      </h2>
      <div
        className="bg-foreground text-foreground h-4 transition-[width] ease-in"
        style={{
          width: `calc(100% - ${timer}%)`,
        }}
      />
    </div>
  );
}
