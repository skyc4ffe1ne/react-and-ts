import { useEffect, useRef, useState } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 500;
      canvas.height = 500;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      ctx.fillStyle = "green";
      ctx.fillRect(10, 10, 100, 100);

      function startDrawing() {
        setIsDrawing(true);
      }
      function stopDrawing() {
        setIsDrawing(false);
      }

      function drawing(e: MouseEvent) {
        if (!isDrawing) return;
        console.log(e);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
      }

      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mouseup", stopDrawing);
      canvas.addEventListener("mousemove", drawing);

      return () => {
        canvas.removeEventListener("mousedown", startDrawing);
        canvas.removeEventListener("mouseup", stopDrawing);
        canvas.removeEventListener("mousemove", drawing);
      };
    }
  }, [isDrawing]);

  return <canvas ref={canvasRef} className="bg-black"></canvas>;
}
