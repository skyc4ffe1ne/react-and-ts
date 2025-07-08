import { useState } from "react";
import "./App.css";
import HeaderToDo from "./ui/HeaderToDo";
import BodyToDo from "./ui/BodyToDo";
import type { Task } from "./lib/types";

export default function App() {
  const [task, setTask] = useState<string>("");
  const [allTask, setAllTask] = useState<Task[]>([]);

  function handleTask(e: React.ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleAddTask() {
    setAllTask((at) => (at = [...at, { id: Date.now(), text: task }]));
  }

  function handleDeleteTask(id: number) {
    setAllTask((at) => (at = at.filter((el) => el.id !== id)));
  }

  return (
    <main className="flex h-screen w-full flex-col items-center bg-white pt-20">
      <HeaderToDo handleAddTask={handleAddTask} handleTask={handleTask} />
      <BodyToDo allTask={allTask} handleDeleteTask={handleDeleteTask} />
    </main>
  );
}
