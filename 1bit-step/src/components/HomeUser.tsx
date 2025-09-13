import { useState } from "react";
import HeaderUser from "./homeuser/HeaderUser";
import TaskList from "./TaskList";
import TaskMobile from "./TaskMobile";
import PromptTask from "./PromptTask";

export default function HomeUser() {
  const [promptTask, setPromptTask] = useState<boolean>(false);
  return (
    <main className="relative mt-10 px-4 md:mt-20 md:px-8">
      <div className="">
        <HeaderUser />
        <TaskList setPromptTask={setPromptTask} /> <TaskMobile />
        {promptTask && <PromptTask />}
      </div>
    </main>
  );
}
