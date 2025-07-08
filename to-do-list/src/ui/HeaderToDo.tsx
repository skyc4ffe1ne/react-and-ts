import type { HeaderToDoProps } from "../lib/types.ts";

export default function HeaderToDo({
  handleTask,
  handleAddTask,
}: HeaderToDoProps) {
  return (
    <div className="">
      <h1 className="pb-4 text-6xl font-semibold tracking-tighter text-balance text-black">
        TO-DO-List
      </h1>
      <input
        type="text"
        className="mr-2 rounded-sm border border-black px-3 py-1 focus:shadow-md focus:outline-black"
        placeholder="type your task here..."
        onChange={(e) => handleTask(e)}
      />
      <button
        className="cursor-pointer rounded-sm bg-black px-3 py-1 text-white"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  );
}
