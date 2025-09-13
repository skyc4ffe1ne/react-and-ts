import React from "react";
const createTask = [
  {
    id: "task",
    labelForm: "Task",
    type: "text",
  },

  {
    id: "time",
    labelForm: "Time",
    type: "number",
  },
  {
    id: "reward",
    labelForm: "Reward",
    type: "number",
  },
  {
    id: "type",
    labelForm: "Type",
    type: "text",
    //TODO: Use options values.
  },
];

export default function PromptTask() {
  return (
    <div className="bg-background backdrop:bg-background absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-md border border-black p-8">
      {createTask.map(({ id, labelForm, type }, idx) => (
        <React.Fragment key={idx}>
          <label
            htmlFor="task"
            className="flex flex-col border-t border-l border-black font-mono"
          >
            {labelForm}
          </label>
          <input
            className="bg-background outline-border foucs:ring-2 focus:ring-foreground mt-2 h-10 w-fit rounded-md border border-t-0 border-r border-b border-l-0 border-black px-3 text-base outline -outline-offset-1 focus:ring"
            type={type}
            id={id}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
