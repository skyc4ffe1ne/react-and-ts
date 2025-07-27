import { useEffect, useRef, useState } from "react";

export default function Canvas({ canvasScale: scale }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [lastPos, setLastPos] = useState<{ x: number; y: number } | null>(null);

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "green";
      ctx.fillRect(10, 10, 100, 100);

      function startDrawing(e: MouseEvent) {
        setIsDrawing(true);
        setLastPos({ x: e.clientX, y: e.clientY });
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
      }
      function stopDrawing() {
        setIsDrawing(false);
        ctx.closePath();
      }

      function drawing(e: MouseEvent) {
        if (!isDrawing) return;
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
      }

      canvas.addEventListener("mousedown", startDrawing);
      canvas.addEventListener("mouseup", stopDrawing);
      canvas.addEventListener("mouseout", stopDrawing);
      canvas.addEventListener("mousemove", drawing);

      return () => {
        canvas.removeEventListener("mousedown", startDrawing);
        canvas.removeEventListener("mouseup", stopDrawing);
        canvas.removeEventListener("mousemove", drawing);
        canvas.removeEventListener("mouseout", drawing);
      };
    }
  }, [isDrawing, scale]);

  return <canvas ref={canvasRef} className="bg-background-canvas"></canvas>;
}
