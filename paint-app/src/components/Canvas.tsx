import { useEffect, useRef } from "react";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
    }
  }, []);

  return <canvas ref={canvasRef} className="bg-background-canvas"></canvas>;
}

/*
 *  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  // const [lastPos, setLastPos] = useState<{ x: number; y: number } | null>(null);

      function startDrawing(e: MouseEvent) {
        setIsDrawing(true);
        //        setLastPos({ x, y });
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
        ctx.strokeStyle = "white";
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
  */
