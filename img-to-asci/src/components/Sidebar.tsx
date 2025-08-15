import Canvas from "./Canvas";
import type { SidebarProps } from "../lib/types.ts";

export default function Sidebar({
  canvasRef,
  setZoom,
  zoom,
  picture,
  setColor,
}: SidebarProps) {
  return (
    <div className="border-border h-[calc(100vh-80px)] w-[300px] border-r px-4 font-mono shadow-xs">
      <div className="pt-8">
        <h3> Original Image </h3>
        <Canvas canvasRef={canvasRef} />
      </div>

      <div className="flex flex-col pt-8">
        <label htmlFor="zoom">
          Zoom:<span className="font-semibold"> {zoom} </span>
        </label>
        <input
          type="range"
          id="zoom"
          min="20"
          max="200"
          disabled={picture ? false : true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setZoom(Number(e.target.value))
          }
        />
      </div>

      <div className="flex items-center gap-2 pt-8">
        <label htmlFor="color">Color:</label>
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
