import type { HeaderTodoProps } from "../lib/types.ts";
import { Bin } from "./ui/icons.tsx";

export default function HeaderTodo({
  handleInput,
  handleTask,
  inputValue,
}: HeaderTodoProps) {
  return (
    <div className="mt-10 lg:mt-20">
      <h3 className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase">
        Todo
      </h3>
      <h1 className="text-foreground pt-1 pb-8 text-4xl tracking-tighter text-balance max-lg:font-bold sm:text-5xl lg:text-6xl xl:text-8xl">
        Todo List
      </h1>
      <input
        type="text"
        className="bg-background outline-border foucs:ring-2 focus:ring-foreground h-10 w-full max-w-xs rounded-sm px-3 text-base outline -outline-offset-1 focus:ring"
        id=""
        placeholder="Your task..."
        onChange={(e) => handleInput(e)}
        value={inputValue}
      />

      <button
        className="text-background outline-border foucs:ring-2 focus:ring-foreground ml-4 h-10 cursor-pointer rounded-sm bg-blue-600 px-3 text-sm/6 font-semibold outline -outline-offset-1 hover:bg-blue-600/90 focus:ring active:bg-blue-600/70"
        onClick={() => handleTask()}
      >
        New to-do
      </button>
    </div>
  );
}
