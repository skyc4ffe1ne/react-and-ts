import Canvas from "./Canvas";
import type { SidebarProps } from "../lib/types.ts";
import InfoButton from "./Info.tsx";

export default function Sidebar({
  canvasRef,
  setZoom,
  zoom,
  picture,
  setColor,
  accuracy,
  setAccuracy,
}: SidebarProps) {
  return (
    <div className="border-border h-[calc(100vh-80px)] w-[300px] border-r px-4 font-mono shadow-xs">
      <div className="pt-8">
        <h3 className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase">
          Original Image
        </h3>

        <Canvas canvasRef={canvasRef} />
      </div>

      <div className="mt-8 flex flex-col">
        <label
          htmlFor="zoom"
          className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase"
        >
          Zoom:<span className="text-foreground text-base"> {zoom} </span>
        </label>
        <input
          type="range"
          id="zoom"
          min="50"
          max="200"
          step={10}
          disabled={picture ? false : true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setZoom(Number(e.target.value))
          }
          value={zoom}
        />
      </div>

      <div className="relative mt-8 flex flex-col">
        <label
          htmlFor="accuracy"
          className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase"
        >
          <InfoButton />
          Accuracy:
          <span className="text-foreground text-base"> {accuracy} </span>
        </label>
        <input
          type="range"
          id="accuracy"
          min="120"
          max="500"
          step={10}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAccuracy(Number(e.target.value))
          }
          value={accuracy}
          className="cursor-grab active:cursor-grabbing"
        />
      </div>

      <div className="flex items-center gap-2 mt-8">
        <label
          htmlFor="color"
          className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase"
        >
          Color:
        </label>
        <input
          type="checkbox"
          id="color"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setColor(e.target.checked)
          }
        />
      </div>
    </div>
  );
}
