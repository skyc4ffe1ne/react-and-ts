import { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import HeaderToolTip from "./components/HeaderToolTip";

function App() {
  const [isErasing, setIsErasing] = useState<boolean>(false);

  return (
    <main className="min-h-screen w-full relative">
      <HeaderToolTip />

      <div className="max-w-7xl">
        <Canvas />
      </div>
    </main>
  );
}

export default App;
