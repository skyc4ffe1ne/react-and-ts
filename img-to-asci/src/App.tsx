import { useEffect, useRef, useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Header from "./components/Header";

function App() {
  const [picture, setPicture] = useState<null | File>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const canvasRef = useRef<null | HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (picture) {
      canvas.width = picture.width;
      canvas.height = picture.height;
      ctx.drawImage(picture, 0, 0);

      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const preR = 0.2126;
      const preG = 0.7152;
      const preB = 0.0722;
      let finalArr = [];
      const interval = 16;
      for (let i = 0; i < 1024; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        let lightness = preR * r + preG * g + preB * b;

        finalArr = [...finalArr, lightness > 128 ? "." : "@"];
      }

      console.log(data);
    }
  }, [picture]);

  function handleImage() {
    const blobImg = inputRef.current.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(blobImg);
    img.onload = () => {
      setPicture(img);
    };
  }

  return (
    <main className="bg-background text-foreground mx-auto min-h-screen max-w-7xl px-4">
      <div className="flex flex-col items-center justify-center">
        <Header inputRef={inputRef} handleImage={handleImage} />
        <Canvas setPicture={setPicture} canvasRef={canvasRef} />
      </div>
    </main>
  );
}

export default App;
