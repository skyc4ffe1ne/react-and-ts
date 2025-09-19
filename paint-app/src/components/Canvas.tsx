import { useEffect, useRef, useState } from "react";

type DrawShapeArg = {
  x: number;
  y: number;
  w: number;
  h: number;
  c: string;
  t: "rectangle" | "circle" | "triangle";
  ctx?: CanvasRenderingContext2D;
};

function drawShape({ x, y, w, h, c, t, ctx }: DrawShapeArg) {
  if (!ctx) return;
  ctx.fillStyle = c;

  switch (t) {
    case "rectangle":
      ctx.fillRect(x, y, w, h);
      break;
    case "circle":
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case "triangle":
      ctx.beginPath();
      ctx.moveTo(x - 25, y);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y - 25);
      ctx.fill();
      break;
    default:
      break;
  }
}
type CanvasStateProps = {
  x: number;
  y: number;
  zoom: number;
};

const shapes: DrawShapeArg[] = [
  { x: 0, y: 0, w: 100, h: 100, c: "red", t: "rectangle" },
  { x: 200, y: 200, w: 100, h: 100, c: "green", t: "circle" },
  {
    x: 400,
    y: 400,
    w: 100,
    h: 100,
    c: "purple",
    t: "triangle",
  },
];

let aX = 0;
let aY = 0;
let initialX = 0;
let initialY = 0;

export default function Canvas({ canvasScale }: { canvasScale: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [posCanvas, setPosCanvas] = useState<CanvasStateProps>({
    x: 0,
    y: 0,
    zoom: 1,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;

    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // In case the user zoom, and we need to use the current stat eof transfromX & Y
    // -- try to remove this and zoom.
    ctx.setTransform(posCanvas.zoom, 0, 0, posCanvas.zoom, aX, aY);

    for (let i = 0; i < shapes.length; i++) {
      shapes[i].ctx = ctx;
      drawShape(shapes[i]);
    }

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

    function render(x: number, y: number) {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ctx.setTransform(1, 0, 0, 1, 0, 0);

      // Memoizing the next pos, becoming the base after
      aX += x - initialX;
      aY += y - initialY;

      setPosCanvas((pc) => {
        let newState = {
          ...pc,
          x: aX,
          y: aY,
        };
        return newState;
      });

      initialX = x;
      initialY = y;

      ctx.setTransform(posCanvas.zoom, 0, 0, posCanvas.zoom, aX, aY);
      for (let i = 0; i < shapes.length; i++) {
        shapes[i].ctx = ctx;
        drawShape(shapes[i]);
      }
    }

    window.addEventListener("mousedown", startMoving);
    window.addEventListener("mouseup", stopMoving);

    return () => {
      window.removeEventListener("mousedown", startMoving);
      window.removeEventListener("mouseup", stopMoving);
    };
  }, [canvasScale]);

  return <canvas ref={canvasRef} className="bg-background-canvas"></canvas>;
}
