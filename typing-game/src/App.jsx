import StartScreen from "./components/StartScreen";
import TextScreen from "./components/TextScreen";
import FinishScrenn from "./components/FinihScreen";
import { useEffect, useRef } from "react";
import { useTypingGame } from "./hooks/useTypingGame";
import "./App.css";

function App() {
  const { state, handleKey, timer } = useTypingGame(10);
  const containerRef = useRef(null);
  const introContRef = useRef(null);

  useEffect(() => {
    introContRef.current?.focus();
  }, []);

  // Focus the text for typing
  useEffect(() => {
    containerRef.current?.focus();
  }, [state.status]);

  return (
    <div className="w-full pt-20 px-8">
      {state.status === "default" && (
        <StartScreen
          handleKey={handleKey}
          introContRef={introContRef}
          text={state.text}
        />
      )}
      {state.status === "typing" && (
        <TextScreen
          timer={timer}
          containerRef={containerRef}
          handleKey={handleKey}
          text={state.text}
          currIdx={state.currIdx}
          userTypng={state.userTypng}
        />
      )}
      {state.status === "finish" && (
        <FinishScrenn
          timer={10}
          userTypng={state.userTypng}
          text={state.text}
          currIdx={state.currIdx}
        />
      )}
    </div>
  );
}

export default App;
