import { useToast } from "../contexts/ToastProvider";
import Toast from "./ui/Toast";

import type { Status } from "../lib/types.ts";
import { useUser } from "../contexts/UserProvider";

export default function TaskList({ setPromptTask, allTask }) {
  const { setUserStats, userStats } = useUser();
  const { toast } = useToast();

  function handleChecked(
    e: React.ChangeEvent<HTMLInputElement>,
    type: Status,
    reward: number,
  ) {
    if (e.target.checked === false) {
      console.log(Number(userStats[type]) - Number(reward));
    } else {
      console.log(Number(userStats[type]) + Number(reward));
    }
  }

  return (
    <div className="hidden max-w-7xl md:block">
      <div className="mt-10 flex items-center gap-4 pb-10">
        <h2 className="text-4xl"> Daily Task </h2>
        <button
          className="border-border bg-accent text-accent-foreground cursor-pointer rounded-md border px-2 py-1 text-sm/5 font-semibold"
          onClick={() => setPromptTask(true)}
        >
          Add a task
        </button>
      </div>

      <div className="grid grid-cols-[minmax(0,_150px)_minmax(0px,_1fr)_minmax(0px,_150px)_minmax(0px,_150px)] items-center">
        <div className="font-mono text-xs uppercase"> Time </div>
        <div className="font-mono text-xs uppercase"> Task </div>
        <div className="font-mono text-xs uppercase"> Reward </div>
        <div className="font-mono text-xs uppercase"> Type </div>
      </div>
      <ul className="list-disc">
        {allTask.map(({ task, time, reward, type }, idx) => (
          <li
            className="border-foreground mt-4 grid items-center border-b md:grid-cols-[minmax(0,_150px)_minmax(0px,_1fr)_minmax(0px,_150px)_minmax(0px,_150px)]"
            key={idx}
          >
            <span className="font-mono"> {time} hours </span>
            <label
              htmlFor={"taskCheckbox" + idx}
              className="cursor-pointer overflow-hidden text-2xl text-nowrap text-ellipsis select-none"
            >
              {task}
              <input
                type="checkbox"
                className="ml-4 size-4 cursor-pointer justify-self-start border border-red-400"
                id={"taskCheckbox" + idx}
                name={"taskCheckbox" + idx}
                onChange={(e) => handleChecked(e, type, reward)}
              />
            </label>
            <span className="font-mono"> {reward}xp </span>
            <span className="font-mono"> {type} </span>
          </li>
        ))}
      </ul>

      {toast && (
        <Toast title="Task added" duration={3000} dX="right" dY="bottom" />
      )}
    </div>
  );
}
