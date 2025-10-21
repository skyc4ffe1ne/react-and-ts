import { useState } from "react";
import HeaderUser from "./homeuser/HeaderUser";
import TaskList from "./TaskList";
import TaskMobile from "./TaskMobile";
import PromptTask from "./PromptTask";
import type { Task } from "../lib/types";

// Need an userState object global
// initialUserStats
const initialTask: Task[] = [
  {
    task: "Read a book",
    duration: 2,
    reward: 10,
    type: "intelligence",
  },
];
export default function HomeUser() {
  const [promptTask, setPromptTask] = useState<boolean>(false);
  const [allTask, setAllTask] = useState<Task[]>(initialTask);

  return (
    <main className="relative mt-10 px-4 sm:px-10 md:px-20">
      <div className="">
        <HeaderUser />

        <TaskList setPromptTask={setPromptTask} allTask={allTask} />

        <TaskMobile />
        {promptTask && (
          <PromptTask setPromptTask={setPromptTask} setAllTask={setAllTask} />
        )}
      </div>
    </main>
  );
}
