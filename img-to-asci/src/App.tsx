import { useEffect, useRef, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { getAscii, adjustCanvas } from "./utils/utility.ts";
import { ThemeProvider } from "./context/ContextTheme.tsx";
import Toast from "./components/Toast.tsx";

function App() {
  const [picture, setPicture] = useState<null | HTMLImageElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const preRef = useRef<null | HTMLPreElement>(null);
  const [zoom, setZoom] = useState<number>(100);
  const [color, setColor] = useState<boolean>(false);
  const [fc, setFC] = useState<boolean>(false);
  // The accuracy is === to the maxRow,
  // moreRow we have more symbols for rapresent the image.
  const [accuracy, setAccuracy] = useState<number>(120);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (error === false) return;

    const timerID = setTimeout(() => {
      setError(false);
    }, 2000);

    return () => {
      clearTimeout(timerID);
    };
  }, [error]);

  async function writeClipboardAsciiArt() {
    if (!preRef.current) return;
    try {
      await navigator.clipboard.writeText(preRef.current.textContent!);
      setFC(true);
    } catch (error) {
      console.error(error);
      setError(true);
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

    const maxRow = accuracy;
    if (picture && preRef.current) {
      // Make sure that
      // if the widht is < thant the maxWidth | maxRow(120)
      // it will return 1.
      // else it will just return the scale that we need.
      let scale = Math.min(1, maxRow / picture.width);
      canvas.width = picture.width * scale;
      // 0.55 is a constant for make the height
      // of the text look more like a pixel.
      canvas.height = picture.height * scale * 0.55;
      ctx.drawImage(picture, 0, 0, canvas.width, canvas.height);
      let asciiCharArr = getAscii(ctx, canvas, color, maxRow);
      preRef.current.innerHTML = asciiCharArr.join("");
      adjustCanvas(canvas, picture.width, picture.height);
      ctx.drawImage(picture, 0, 0, canvas.width, canvas.height);
    }
  }, [picture]);

  return (
    <ThemeProvider>
      <main className="bg-background text-foreground mx-auto min-h-screen">
        <Navbar
          inputRef={inputRef}
          handleImage={handleImage}
          handleCopy={writeClipboardAsciiArt}
          picture={picture}
          setFC={setFC}
          fc={fc}
        />
        <div className="grid grid-cols-[300px_minmax(0,1fr)]">
          <Sidebar
            canvasRef={canvasRef}
            setZoom={setZoom}
            zoom={zoom}
            picture={picture}
            setColor={setColor}
            accuracy={accuracy}
            setAccuracy={setAccuracy}
          />
          <div className="bg-background grid h-[calc(100vh-80px)] w-full place-items-center overflow-hidden pt-4">
            {picture && (
              <pre
                ref={preRef}
                className="text-foreground max-h-screen origin-center font-mono text-[5px] leading-none whitespace-pre"
                style={{ transform: `scale(${zoom + "%"})` }}
              ></pre>
            )}
          </div>
        </div>

        {error && <Toast type="error" />}
      </main>
    </ThemeProvider>
  );
}

export default App;
