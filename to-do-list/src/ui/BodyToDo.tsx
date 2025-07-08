import type { BodyToDoProps } from "../lib/types";
export default function BodyToDo({ allTask, handleDeleteTask }: BodyToDoProps) {
  return (
    <ul className="mt-10 h-auto w-full">
      {allTask.map(({ id, text }) => (
        <li
          key={id}
          className="mb-4 flex w-full justify-between border-b border-gray-300 px-4 pb-1 text-xl"
          data-id={id}
        >
          {text}
          <button
            className="cursor-pointer rounded-md bg-red-100 px-2 py-0.5 text-base font-medium text-red-500"
            onClick={() => handleDeleteTask(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
