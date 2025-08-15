import Button from "./ui/Button";
import { Pen, Eraser, Brush, Box, Trash, Sun, Moon, Cloud } from "./ui/icons";
import { useBoard } from "../contexts/BoardProvider";
import type { colorBox, sizeBoard } from "../lib/types";
import { useTheme } from "../contexts/ThemeProvider";

export default function Tooltip() {
  const {
    sizeBoard,
    setSizeBoard,
    colorBox,
    setColorBox,
    handleReset,
    setStatusBoard,
    statusBoard,
  } = useBoard();

  const { theme, setTheme } = useTheme();

  return (
    <div className="border-border relative flex items-center border p-2">
      <div className="flex gap-2">
        <Button variant="ghost" onClick={() => setStatusBoard("draw")}>
          <Pen
            className={`${statusBoard === "draw" ? "stroke-blue-400" : "stroke-gray-400"} size-6 fill-transparent`}
          />
        </Button>
        <Button variant="ghost" onClick={() => setStatusBoard("erase")}>
          <Eraser
            className={`${statusBoard === "erase" ? "stroke-blue-400" : "stroke-gray-400"} size-6 fill-transparent`}
          />
        </Button>
        <Button variant="ghost" onClick={() => setStatusBoard("paint")}>
          <Brush
            className={`${statusBoard === "paint" ? "stroke-blue-400" : "stroke-gray-400"} size-6 fill-transparent`}
          />
        </Button>
        <select
          value={colorBox}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const target = e.target.value as colorBox;
            setColorBox(target);
          }}
          className="bg-background text-foreground"
        >
          <option value="black">{theme === "dark" ? "white" : "black"}</option>
          <option value="lime">lime</option>
          <option value="azure">azure</option>
        </select>
      </div>

      <div className="bg-border mr-2 ml-2 h-6 w-0.5" />

      <div className="flex items-center gap-1">
        <Box className="stroke-primary size-6 fill-transparent" />
        <select
          value={sizeBoard}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = parseInt(e.target.value) as sizeBoard;
            setSizeBoard(value);
          }}
          className="bg-background text-foreground"
        >
          <option value="8"> 8</option>
          <option value="16">16</option>
          <option value="32">32</option>
        </select>
      </div>

      <div className="bg-border mr-2 ml-2 h-6 w-0.5" />

      <Button variant="destructive" onClick={handleReset}>
        <Trash className="stroke-destructive size-6 fill-transparent" />
      </Button>

      <div className="bg-border mr-2 ml-2 h-6 w-0.5" />

      <div className="">
        {theme === "dark" && (
          <Button variant="ghost" onClick={() => setTheme("light")}>
            <Moon className="size-5" />
          </Button>
        )}

        {theme === "light" && (
          <Button variant="ghost" onClick={() => setTheme("dark")}>
            <Sun className="size-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
