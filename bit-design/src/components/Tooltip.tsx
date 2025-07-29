import Button from "./ui/Button";
import { Pen, Eraser, Brush, Box, Trash } from "./ui/icons";
import { useBoard } from "../contexts/BoardProvider";

export default function Tooltip() {
  const {
    sizeBoard,
    setSizeBoard,
    colorBox,
    setColorBox,
    handleReset,
    setStatusBoard
  } = useBoard();

  return (
    <div className="border-border flex items-center border p-2">
      <div className="flex gap-2">
        <Button variant="ghost" onClick={() => setStatusBoard("draw")}>
          <Pen className="stroke-secondary-foreground size-6 fill-transparent" />
        </Button>
        <Button variant="ghost" onClick={() => setStatusBoard("erase")}>
          <Eraser className="size-6 fill-transparent stroke-gray-400" />
        </Button>
        <Button
          variant="ghost">
          <Brush className="size-6 fill-transparent stroke-gray-400" />
        </Button>
        <select value={colorBox} onChange={(e) => setColorBox(e.target.value)}>
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
          onChange={(e) => setSizeBoard(e.target.value)}
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
