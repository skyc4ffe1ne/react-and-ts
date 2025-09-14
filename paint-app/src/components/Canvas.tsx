import { useEffect, useRef, useState } from "react";

export default function Canvas({ canvasScale: scale }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // const [isDrawing, setIsDrawing] = useState<boolean>(false);
  //  const [lastPos, setLastPos] = useState<{ x: number; y: number } | null>(null);

  // Initialize Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  function drawRect(
    x: number,
    y: number,
    w: number,
    h: number,
    c: string,
    ctx: CanvasRenderingContext2D,
  ) {
    ctx.fillStyle = c;
    ctx.fillRect(x, y, w, h);
  }

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      let previousX = 0;
      let previousY = 0;

      // Initial pos of the canvas
      const viewport = {
        x: 0,
        y: 0,
        scale: 1,
      };

      drawRect(0, 0, 100, 100, "red", ctx);
      drawRect(200, 200, 100, 100, "blue", ctx);

      function render() {
        ctx?.setTransform(1, 0, 0, 1, 0, 0);
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        ctx?.setTransform(
          viewport.scale,
          0,
          0,
          viewport.scale,
          viewport.x,
          viewport.y,
        );

        drawRect(0, 0, 100, 100, "red", ctx);
        drawRect(200, 200, 100, 100, "blue", ctx);
      }

      function moving(e: MouseEvent) {
        viewport.x += e.clientX - previousX;
        viewport.y += e.clientY - previousY;

        previousX = e.clientX;
        previousY = e.clientY;

        render();
      }

      function startMoving(e: MouseEvent) {
        console.log("e:", e);
        console.log("MouseDown, start");

        previousX = e.clientX;
        previousY = e.clientY;
        canvas.addEventListener("mousemove", moving);
      }

      function stopMoving(e: MouseEvent) {
        console.log("e: ", e);
        console.log("MouseUp, stop");
        canvas.removeEventListener("mousemove", moving);
      }

      canvas.addEventListener("mousedown", startMoving);
      canvas.addEventListener("mouseup", stopMoving);

      return () => {
        canvas.removeEventListener("mousedown", startMoving);
        canvas.removeEventListener("mouseup", stopMoving);
      };
    }
  }, []);

  // -- CODE FOR DRAWING WHEN PEN IS ACTIVE --
  //  useEffect(() => {
  //    if (canvasRef.current) {
  //      const canvas = canvasRef.current;
  //      const ctx = canvas.getContext("2d");
  //
  //      drawRect(0, 0, 100, 100, "red", ctx);
  //      drawRect(200, 200, 100, 100, "blue", ctx);
  //
  //      function startDrawing(e: MouseEvent) {
  //        setIsDrawing(true);
  //        setLastPos({ x: e.clientX, y: e.clientY });
  //        ctx.beginPath();
  //        ctx.moveTo(e.clientX, e.clientY);
  //      }
  //      function stopDrawing() {
  //        setIsDrawing(false);
  //        ctx.closePath();
  //      }
  //
  //      function drawing(e: MouseEvent) {
  //        if (!isDrawing) return;
  //        ctx.lineWidth = 2;
  //        ctx.strokeStyle = "black";
  //        ctx.lineTo(e.clientX, e.clientY);
  //        ctx.stroke();
  //      }
  //
  //      canvas.addEventListener("mousedown", startDrawing);
  //      canvas.addEventListener("mouseup", stopDrawing);
  //      canvas.addEventListener("mouseout", stopDrawing);
  //      canvas.addEventListener("mousemove", drawing);
  //
  //      return () => {
  //        canvas.removeEventListener("mousedown", startDrawing);
  //        canvas.removeEventListener("mouseup", stopDrawing);
  //        canvas.removeEventListener("mousemove", drawing);
  //        canvas.removeEventListener("mouseout", drawing);
  //      };
  //    }
  //  }, [isDrawing, scale]);

  return <canvas ref={canvasRef} className="bg-background-canvas"></canvas>;
}
