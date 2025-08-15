import { useEffect, useRef, useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { calculateLines, getChar } from "./utils/utility.ts";

function App() {
  const [picture, setPicture] = useState<null | HTMLImageElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const preRef = useRef<null | HTMLPreElement>(null);
  let finalArr: Array<string> = [];

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.font = "48px mono";
    ctx.fillStyle = "black";
    let test = "Drop your image here";
    console.log(test.length);
    console.log(20 * 48 / 2);
    ctx.fillText(
      "dasjkdnasjkdnsajkdnsak",
      canvas.width / 2,
      canvas.height / 2,
    );

    if (picture && preRef.current) {
      canvas.width = picture.width * 0.2;
      canvas.height = picture.height * 0.2;

      ctx.drawImage(picture, 0, 0, canvas.width, canvas.height);

      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const preR = 0.2126;
      const preG = 0.7152;
      const preB = 0.0722;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        let lightness = preR * r + preG * g + preB * b;
        finalArr.push(getChar(lightness));
      }

      const maxRow = Math.floor(canvas.width);
      preRef.current.innerHTML = calculateLines(maxRow, finalArr);
    }
  }, [picture]);

  function handleImage() {
    if (!inputRef.current) return;
    const blobImg = inputRef.current.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(blobImg);
    img.onload = () => {
      setPicture(img);
    };
  }

  return (
    <main className="bg-background text-foreground mx-auto min-h-screen">
      <Navbar />
      <div className="flex justify-center">
        <Sidebar />

        <div className="relative grid h-[calc(100vh-80px)] w-full place-content-center">
          <div className="absolute inset-0 z-10 h-full w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px_1px,transparent_1px)] bg-[size:20px_20px]" />

          <Canvas setPicture={setPicture} canvasRef={canvasRef} />
        </div>
        {picture && (
          <div className="bg-foreground h-full w-full border border-black">
            <pre
              ref={preRef}
              className="text-background font-mono text-[8px] leading-none whitespace-pre"
            ></pre>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
