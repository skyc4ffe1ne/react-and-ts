import Button from "./ui/Button";
import { Pen, Eraser, Brush, Box, Trash } from "./ui/icons";
import { useBoard } from "../contexts/BoardProvider";
import type { colorBox, sizeBoard } from "../lib/types";

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

  return (
    <div className="border-border flex items-center border p-2">
      <div className="flex gap-2">
        <Button variant="ghost" onClick={() => setStatusBoard("draw")}>
          <Pen className={`${statusBoard === "draw" ? "stroke-secondary-foreground" : "stroke-gray-400"} size-6 fill-transparent`} />
        </Button>
        <Button variant="ghost" onClick={() => setStatusBoard("erase")}>
          <Eraser className={`${statusBoard === "erase" ? "stroke-secondary-foreground" : "stroke-gray-400"} size-6 fill-transparent`} />
        </Button>
        <Button
          variant="ghost"
          onClick={() => setStatusBoard("paint")}
        >
          <Brush className={`${statusBoard === "paint" ? "stroke-secondary-foreground" : "stroke-gray-400"} size-6 fill-transparent`} />
        </Button>
        <select value={colorBox} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const target = e.target.value as colorBox
          setColorBox(target)
        }}>
          <option value="black">black</option>
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
            setSizeBoard(value)
          }}
        >
          <option value="8"> 8</option>
          <option value="16">16</option>
          <option value="32">32</option>
        </select>
      </div>

      <div className="bg-border mr-2 ml-2 h-6 w-0.5" />

      <Button variant="ghost" onClick={handleReset}>
        <Trash className="stroke-destructive size-6 fill-transparent" />
      </Button>
    </div>
  );
}
