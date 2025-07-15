import StartScreen from "./components/StartScreen";
import TextScreen from "./components/TextScreen";
import FinishScrenn from "./components/FinishScreen";
import { useEffect, useRef, useState } from "react";
import { useTypingGame } from "./hooks/useTypingGame";
import "./App.css";

function App() {
  const [chooseTime, setChooseTime] = useState<number>(30);
  const { state, handleKey, timer, dispatch } = useTypingGame(chooseTime);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const introContRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    introContRef.current?.focus();
  }, []);

  // Focus the text for typing
  useEffect(() => {
    containerRef.current?.focus();
  }, [state.status]);

  return (
    <>
      <header className="text-3xl tracking-tight font-semibold pt-8 px-4">
        speedtype
      </header>
      <div className="w-full pt-10 px-8">
        {state.status === "default" && (
          <StartScreen
            chooseTime={chooseTime}
            setChooseTime={setChooseTime}
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
            dispatch={dispatch}
            timer={chooseTime}
            userTypng={state.userTypng}
            text={state.text}
          />
        )}
      </div>
    </>
  );
}

export default App;
