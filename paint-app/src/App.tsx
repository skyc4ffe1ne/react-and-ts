import "./App.css";
import HeaderToolTip from "./components/HeaderToolTip";
import Canvas from "./components/Canvas";
import Zoom from "./components/Zoom";
import { useState } from "react";

function App() {
  const [canvasScale, setCanvasScale] = useState<number>(1);
  return (
    <main className="min-h-screen w-full relative">
      <HeaderToolTip />

      <div className="max-w-7xl">
        <Canvas />
      </div>

      <Zoom setCanvasScale={setCanvasScale} />
    </main>
  );
}

export default App;
