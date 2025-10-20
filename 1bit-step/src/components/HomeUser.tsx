import { useState } from "react";
import HeaderUser from "./homeuser/HeaderUser";
import TaskList from "./TaskList";
import TaskMobile from "./TaskMobile";
import PromptTask from "./PromptTask";
import type { Task } from "../lib/types";

// Need an userState object global
// initialUserStats
const initialTask = [
  {
    task: "Read a book",
    time: 2,
    reward: 10,
    type: "inteliggence",
  },
];
export default function HomeUser() {
  const [promptTask, setPromptTask] = useState<boolean>(false);
  const [allTask, setAllTask] = useState<Task[]>(initialTask);

  return (
    <main className="relative mt-10 px-4 md:px-8">
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
