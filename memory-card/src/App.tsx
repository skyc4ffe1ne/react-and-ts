import "./App.css";
import MemoryCard from "./components/MemoryCard";
import StartScreen from "./components/StartScreen";
import FinalScreen from "./components/FinalScreen";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState<"default" | "play" | "finish">(
    "default",
  );

  return (
    <main className="w-full h-screen pt-20 mx-auto bg-gray-400">
      {status === "default" && <StartScreen handleStatus={setStatus} />}
      {status === "play" && <MemoryCard handleStatus={setStatus} />}
      {status === "finish" && <FinalScreen handleStatus={setStatus} />}
    </main>
  );
}

export default App;
