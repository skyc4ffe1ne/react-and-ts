import { useEffect, useRef, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { getAscii } from "./utils/utility.ts";
import { ThemeProvider } from "./context/ContextTheme.tsx";

function App() {
  const [picture, setPicture] = useState<null | HTMLImageElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const preRef = useRef<null | HTMLPreElement>(null);
  const [zoom, setZoom] = useState<number>(100);
  const [color, setColor] = useState<boolean>(false);

  async function writeClipboardAsciiArt() {
    if (!preRef.current) return;
    try {
      await navigator.clipboard.writeText(preRef.current.textContent!);
    } catch (error) {
      console.error(error);
    }
  }

  function handleImage() {
    if (inputRef.current && inputRef.current.files![0]) {
      const blobImg = inputRef.current.files![0];
      const img = new Image();
      img.src = URL.createObjectURL(blobImg);
      img.onload = () => {
        setPicture(img);
        setZoom(100);
      };
    }
  }

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = 250;
    canvas.height = 250;

    if (picture && preRef.current) {
      canvas.width = picture.width * 0.2;
      canvas.height = picture.height * 0.2;
      ctx.drawImage(picture, 0, 0, canvas.width, canvas.height);
      const maxRow = Math.floor(canvas.width);
      let asciiCharArr = getAscii(ctx, canvas, color, maxRow);
      if (!color) {
        preRef.current.innerHTML = asciiCharArr.join("");
      } else {
        preRef.current.innerHTML = asciiCharArr.join("");
      }
    }
  }, [picture]);

  return (
    <ThemeProvider>
      <main className="bg-background text-foreground mx-auto min-h-screen">
        <Navbar
          inputRef={inputRef}
          handleImage={handleImage}
          handleCopy={writeClipboardAsciiArt}
        />
        <div className="flex justify-center">
          <Sidebar
            canvasRef={canvasRef}
            setZoom={setZoom}
            zoom={zoom}
            picture={picture}
            setColor={setColor}
          />
          <div className="bg-background grid h-[calc(100vh-80px)] w-full place-items-center overflow-hidden pt-4">
            {picture && (
              <pre
                ref={preRef}
                className="text-foreground max-h-screen origin-top-left font-mono text-[8px] leading-none whitespace-pre"
                style={{ transform: `scale(${zoom + "%"})` }}
              ></pre>
            )}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
