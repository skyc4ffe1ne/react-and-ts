import type { ListTaskProps } from "../lib/types";
import { Bin, Clock } from "./ui/icons";

export default function ListTask({
  allTask,
  handleChecked,
  handleRemoveTask,
}: ListTaskProps) {
  console.log("Alltask:", allTask);
  return (
    <ul className="marker:text-foreground/30 mt-8 pl-0">
      {allTask.map(({ createdAt, name, checked, expiration }, idx) => (
        <li key={idx} className="mt-4 flex items-center gap-0.5 text-sm/6">
          <div className="flex w-full max-w-3xl items-center justify-between">
            <div
              className="flex w-full cursor-pointer gap-2"
              onClick={() => handleChecked(idx)}
            >
              <button>
                {!checked ? (
                  <>
                    <span className="text-foreground/30">[</span>
                    <span className="text-foreground/30 opacity-0">x</span>
                    <span className="text-foreground/30">]</span>
                  </>
                ) : (
                  <>
                    <span className="text-foreground/30">[</span>
                    <span className="text-accent-foreground">x</span>
                    <span className="text-foreground/30">]</span>
                  </>
                )}
              </button>
              <span className={`{} pl-2 font-mono text-base`}>{name}</span>
            </div>

            <div className="flex w-full justify-end gap-4">
              <button
                onClick={() => handleRemoveTask(idx)}
                className="cursor-pointer bg-red-200"
              >
                <Bin className="size-6 fill-red-600" />
              </button>

              <div className="flex items-center gap-2">
                <p className="whitespace-nowrap">
                  {expiration.getDate() - createdAt.getDate()}day left{" "}
                </p>
                <Clock className="size-6" />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
