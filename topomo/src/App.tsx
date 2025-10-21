import "./App.css";
import { useEffect, useState } from "react";
import HeaderTodo from "./components/HeaderTodo.tsx";
import ListTask from "./components/ListTask.tsx";
import type { Task } from "./lib/types.ts";

function getAllTask(): Task[] {
  let initialTasks = localStorage.getItem("tasks");
  if (initialTasks !== null) {
    let getInitial = JSON.parse(initialTasks);
    return getInitial;
  }
  return [];
}
function App() {
  const [input, setInput] = useState<string>("");
  const [allTask, setAllTask] = useState<Task[]>(getAllTask());

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setInput(value);
  }

  function handleTask() {
    if (!input) return;
    let now = new Date();
    setAllTask((at) => [
      ...at,
      {
        createdAt: now,
        name: input,
        checked: false,
        expiration: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000), // Calculate the date one week from now
      },
    ]);
  }

  useEffect(() => {
    const all = JSON.stringify(allTask);
    localStorage.setItem("tasks", all);
  }, [allTask]);

  function handleChecked(id: number) {
    let newAll = allTask.map((el, idx) => {
      if (idx == id) {
        el = { ...el, checked: !el.checked };
      }
      return el;
    });

    setAllTask(newAll);
  }

  function handleRemoveTask(id: number) {
    let newAll = allTask.filter((el, idx) => idx !== id);
    setAllTask(newAll);
  }

  return (
    <main className="px-4 lg:px-12">
      <HeaderTodo
        handleInput={handleInput}
        handleTask={handleTask}
        inputValue={input}
      />
      <ListTask
        allTask={allTask}
        handleChecked={handleChecked}
        handleRemoveTask={handleRemoveTask}
      />
    </main>
  );
}

export default App;
