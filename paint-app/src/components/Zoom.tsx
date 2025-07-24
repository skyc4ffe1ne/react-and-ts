import Button from "./ui/Button";
import { IconMinus, IconPlus } from "./ui/Icons";
export default function Zoom({ setCanvasScale }) {
  return (
    <div className="absolute bottom-2 left-12 bg-white z-10 flex gap-1 rounded-xl p-1 justify-center items-center">
      <Button
        variant="icon"
        onClick={() =>
          setCanvasScale((prev) => (prev > 0.1 ? prev - 0.1 : prev))
        }
      >
        <IconMinus className="size-4" />
      </Button>
      <div className="w-0.5 h-6 bg-background-divider" />
      <Button
        variant="icon"
        onClick={() => setCanvasScale((prev) => (prev < 2 ? prev + 0.1 : prev))}
      >
        <IconPlus className="size-4" />
      </Button>
    </div>
  );
}
