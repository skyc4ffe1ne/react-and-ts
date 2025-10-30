import { useEffect, useState } from "react";
import HeaderUser from "./homeuser/HeaderUser";
import TaskList from "./TaskList";
import TaskMobile from "./TaskMobile";
import PromptTask from "./PromptTask";
import type { Task } from "../lib/types";

function getInitialTask(): Task[] {
  let a = localStorage.getItem("task");
  return a ? JSON.parse(a) : [];
}

export default function HomeUser() {
  const [promptTask, setPromptTask] = useState<boolean>(false);
  const [allTask, setAllTask] = useState<Task[]>(getInitialTask());
  function handleRemoveTask(id: number) {
    setAllTask((prev) => prev.filter((_, idx) => idx !== id));
  }

  useEffect(() => {
    const allTask_json = JSON.stringify(allTask);
    localStorage.setItem("task", allTask_json);
  }, [allTask]);
  return (
    <main className="relative mt-10 px-4 sm:px-10 md:px-20">
      <div className="">
        <HeaderUser />

        <TaskList
          setPromptTask={setPromptTask}
          setAllTask={setAllTask}
          allTask={allTask}
          handleRemoveTask={handleRemoveTask}
        />

        <TaskMobile />
        {promptTask && (
          <PromptTask
            setPromptTask={setPromptTask}
            setAllTask={setAllTask}
            promptTask={promptTask}
          />
        )}
      </div>
    </main>
  );
}
