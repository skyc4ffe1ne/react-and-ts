import React, { useState } from "react";
import { useToast } from "../contexts/ToastProvider";
let createTask = [
  {
    id: "task",
    labelForm: "Task",
    type: "text",
    placeholder: "Task name...",
    isError: false,
  },

  {
    id: "time",
    labelForm: "Time",
    type: "number",
    placeholder: "Duration",
    isError: false,
  },
  {
    id: "reward",
    labelForm: "Reward",
    type: "number",
    placeholder: "Reward experience...",
    isError: false,
  },
  {
    id: "type",
    labelForm: "Type",
    type: "select",
    placeholder: "Task name...",
    isError: false,
  },
];

export default function PromptTask({ setPromptTask, setAllTask }) {
  const [newTask, setNewTask] = useState<Task>({
    type: "creativity",
  });

  const { setToast } = useToast();

  function handleNewTask(id, e) {
    const { value } = e.target;
    setNewTask((nt) => (nt = { ...nt, [id]: value }));
  }

  function handleAllTask() {
    console.log("New task:", newTask);
    let flag = false;
    // Check if there is an empty obj (user didn't compile any input)
    let convertArr = Object.entries(newTask);
    // If the values in the new object, are less than our inputs; return
    if (convertArr.length < createTask.length) return;

    // Check if one of the field are empty
    for (const [key, value] of convertArr) {
      if (!value) {
        createTask = createTask.map((el) =>
          el.id === key ? { ...el, isError: true } : el,
        );
        flag = true;
        return;
      }
    }

    console.log("CreateTask:", createTask);
    if (flag) return;

    setAllTask((at) => [...at, newTask]);
    setPromptTask(false);
    setNewTask({});
    setToast(true);
  }

  return (
    <div className="bg-background backdrop:bg-background absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-md border border-black p-8">
      {createTask.map(({ id, labelForm, type, placeholder, isError }, idx) => (
        <React.Fragment key={idx}>
          <>
            {isError && <p> Something went wrong here </p>}
            <label htmlFor="task" className="flex flex-col font-mono">
              {labelForm}
            </label>

            <div
              className="bg-background h-4 w-full"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, var(--color-muted) 1px, transparent 0),
                  linear-gradient(180deg, var(--color-muted) 1px, transparent 0),
                  repeating-linear-gradient(45deg, var(--color-gray-200) 0 2px, transparent 2px 6px)`,
              }}
            />
            {type === "select" ? (
              <select
                className="bg-background outline-border foucs:ring-2 focus:ring-foreground h-10 w-full rounded-md px-3 text-base outline -outline-offset-1 focus:ring"
                id={id}
                onChange={(e) => {
                  handleNewTask(id, e);
                }}
                defaultValue="creativity"
              >
                <option value="creativity">creativity</option>
                <option value="intelligence">intelligence</option>
                <option value="discipline">discipline</option>
                <option value="strenght">strenght</option>
                <option value="emotonial">emotional</option>
                <option value="social">social</option>
              </select>
            ) : (
              <input
                className="bg-background outline-border foucs:ring-2 focus:ring-foreground h-10 w-fit rounded-md px-3 text-base outline -outline-offset-1 focus:ring"
                type={type}
                id={id}
                onChange={(e) => {
                  handleNewTask(id, e);
                }}
                value={newTask[id] ?? ""}
                placeholder={placeholder}
              />
            )}
          </>
        </React.Fragment>
      ))}

      <button
        className="border-border bg-accent text-accent-foreground outline-accent-foreground cursor-pointer rounded-md border py-2 text-base font-semibold outline outline-offset-2"
        onClick={() => {
          handleAllTask();
        }}
      >
        createTask
      </button>
    </div>
  );
}
