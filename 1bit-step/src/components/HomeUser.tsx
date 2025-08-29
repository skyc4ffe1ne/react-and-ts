import { useState } from "react";
import HeaderUser from "./homeuser/HeaderUser";
import TaskList from "./TaskList";
import TaskMobile from "./TaskMobile";

export default function HomeUser() {
  const [promptTask, setPromptTask] = useState<boolean>(false);
  return (
    <main className="relative mt-10 px-4 md:mt-20 md:px-8">
      <div className="">
        <HeaderUser />
        <TaskList setPromptTask={setPromptTask} />
        <TaskMobile />

        {promptTask && (
          <div className="border-border absolute top-1/2 left-1/2 h-80 w-1/2 border">
            <h3> Hello </h3>
          </div>
        )}
      </div>
    </main>
  );
}
