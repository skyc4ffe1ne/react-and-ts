import { useEffect, useRef } from "react";

type DrawRectArg = {
  x: number;
  y: number;
  w: number;
  h: number;
  c: string;
  ctx: CanvasRenderingContext2D;
};

function drawRect({ x, y, w, h, c, ctx }: DrawRectArg) {
  ctx.fillStyle = c;
  ctx.fillRect(x, y, w, h);
}

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;

    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawRect({ x: 0, y: 0, w: 100, h: 100, c: "red", ctx });
    drawRect({ x: 200, y: 200, w: 100, h: 100, c: "green", ctx });

    let initialX = 0;
    let initialY = 0;

    function startMoving(e: MouseEvent) {
      initialX = e.clientX;
      initialY = e.clientY;
      window.addEventListener("mousemove", moving);
    }

    function moving(e: MouseEvent) {
      render(e.clientX, e.clientY);
    }

    function stopMoving() {
      window.removeEventListener("mousemove", moving);
    }

    let nextX = 0;
    let nextY = 0;

    function render(x: number, y: number) {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ctx.setTransform(1, 0, 0, 1, 0, 0);

      // Memoizing the next pos, becoming the base after
      nextX += x - initialX;
      nextY += y - initialY;

      initialX = x;
      initialY = y;

      ctx.setTransform(1, 0, 0, 1, nextX, nextY);
      drawRect({ x: 0, y: 0, w: 100, h: 100, c: "red", ctx });
      drawRect({ x: 200, y: 200, w: 100, h: 100, c: "green", ctx });
    }

    window.addEventListener("mousedown", startMoving);
    window.addEventListener("mouseup", stopMoving);

    return () => {
      window.removeEventListener("mousedown", startMoving);
      window.removeEventListener("mouseup", stopMoving);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-background-canvas"></canvas>;
}
