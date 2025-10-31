import React, { useEffect, useRef, useState } from "react";
import { useToast } from "../contexts/ToastProvider";
import type { PromptTaskProps, Task } from "../lib/types";
import Backdrop from "./ui/Backdrop";

interface InputTaskProps {
  id: "task" | "duration" | "reward" | "type";
  labelForm: string;
  type: string;
  placeholder?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  isError: boolean;
}
let initialInputTask: InputTaskProps[] = [
  {
    id: "task",
    labelForm: "Task",
    type: "text",
    placeholder: "Task name...",
    isError: false,
  },

  {
    id: "duration",
    labelForm: "Duration",
    type: "range",
    min: 1,
    max: 12,
    isError: false,
  },
  {
    id: "reward",
    labelForm: "Reward",
    type: "range",
    min: 1,
    max: 24,
    isError: false,
  },
  {
    id: "type",
    labelForm: "Type",
    type: "select",
    isError: false,
  },
];

const initialTaskValue: Task = {
  task: "",
  duration: "1",
  reward: "5",
  type: "creativity",
  isChecked: false,
};

export default function PromptTask({
  setPromptTask,
  setAllTask,
  promptTask,
}: PromptTaskProps) {
  const promptTaskRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (
      promptTaskRef.current === null ||
      promptTaskRef === null ||
      promptTask === false
    )
      return;
    function handleContainer(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        !promptTaskRef?.current?.contains(target) &&
        !target.closest("#btnPromptTask")
      ) {
        setPromptTask(false);
      }
    }
    window.addEventListener("click", handleContainer);
    return () => {
      window.removeEventListener("click", handleContainer);
    };
  }, []);

  const [inputTask, setInputTask] =
    useState<InputTaskProps[]>(initialInputTask);
  const [newTask, setNewTask] = useState<Task>(initialTaskValue);
  const { setToast } = useToast();
  function handleNewTask(
    id: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    let { value } = e.target;
    let newValue: string | number = value;
    if (e.target.type === "number") {
      newValue = Number(value);
    }
    setNewTask((nt) => (nt = { ...nt, [id]: newValue }));
  }

  function handleAllTask() {
    let flag = false;

    let arr_0 = inputTask.map((el) => {
      const { id } = el;
      if (newTask[id] === "") {
        el = { ...el, isError: true };
        flag = true;
      } else {
        el = { ...el, isError: false };
      }

      return el;
    });

    setInputTask(arr_0);

    if (flag) return;
    setAllTask((at: Task[]) => [...at, newTask]);
    setPromptTask(false);
    setNewTask(initialTaskValue);
    setToast(true);
    setInputTask(initialInputTask);
  }

  return (
    <>
      <Backdrop />
      <div
        className="bg-background backdrop:bg-background fixed top-1/2 left-1/2 z-2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-md border border-black p-8"
        ref={promptTaskRef}
      >
        {inputTask.map(
          ({ id, labelForm, type, placeholder, min, max, isError }, idx) => (
            <div key={idx}>
              <>
                <label htmlFor="task" className="mb-2 flex flex-col font-mono">
                  {labelForm}
                </label>

                <div
                  className={`${isError ? "bg-red-200" : "bg-background"} h-4 w-full`}
                  style={{
                    backgroundImage: `
                  linear-gradient(90deg, var(--color-muted) 1px, transparent 0),
                  linear-gradient(180deg, var(--color-muted) 1px, transparent 0),
                  repeating-linear-gradient(45deg, ${isError ? "var(--color-red-400)" : "var(--color-gray-300)"} 0 2px, transparent 2px 6px)`,
                  }}
                />
                {type === "select" ? (
                  <select
                    className="bg-background outline-border foucs:ring-2 focus:ring-foreground mt-2 h-10 w-full rounded-md px-3 text-base outline -outline-offset-1 focus:ring"
                    id={id}
                    onChange={(e) => {
                      handleNewTask(id, e);
                    }}
                    defaultValue="creativity"
                  >
                    <option value="creativity">creativity</option>
                    <option value="intelligence">intelligence</option>
                    <option value="discipline">dscipline</option>
                    <option value="strenght">strenght</option>
                    <option value="emotonial">emotional</option>
                    <option value="social">social</option>
                  </select>
                ) : (
                  <>
                    <input
                      className={`bg-background foucs:ring-2 focus:ring-foreground mt-2 h-10 w-fit rounded-md text-base focus:ring ${isError ? "outline-red-400" : "outline-border"} ${type === "range" ? "focus:cursor-grabbing" : "px-3 outline -outline-offset-1"}`}
                      type={type}
                      id={id}
                      onChange={(e) => {
                        handleNewTask(id, e);
                      }}
                      max={max ? max : undefined}
                      min={min ? min : undefined}
                      placeholder={placeholder ? placeholder : undefined}
                    />

                    {type === "range" && (
                      <p className="inline-flex items-end pl-8 font-mono text-xl/6 font-medium">
                        {newTask[id]}
                        <span className="text-sm">
                          {id === "reward" ? "exp" : "hour"}
                        </span>
                      </p>
                    )}
                  </>
                )}
              </>
            </div>
          ),
        )}

        <button
          className="border-border bg-accent text-accent-foreground outline-accent-foreground cursor-pointer rounded-md border py-2 text-base font-semibold outline outline-offset-2"
          onClick={() => {
            handleAllTask();
          }}
        >
          createTask
        </button>
      </div>
    </>
  );
}
