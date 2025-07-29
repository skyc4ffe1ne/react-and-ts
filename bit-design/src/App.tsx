import "./App.css";
import Header from "./components/Header";
import Board from "./components/Board";
import Tooltip from "./components/Tooltip";
import { BoardProvider } from "./contexts/BoardProvider";

function App() {
  return (
    <BoardProvider>
      <main className="bg-background flex min-h-screen w-full flex-col items-center justify-center">
        <Header />
        <Board />
        <Tooltip />
      </main>
    </BoardProvider>
  );
}

export default App;
