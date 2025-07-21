import "./App.css";
import HeaderToolTip from "./components/HeaderToolTip";
import Canvas from "./components/Canvas";

function App() {
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
