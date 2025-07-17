import StartScreen from "./components/StartScreen";
import TextScreen from "./components/TextScreen";
import FinishScrenn from "./components/FinishScreen";
import { useEffect, useRef, useState } from "react";
import { useTypingGame } from "./hooks/useTypingGame";
import "./App.css";

function App() {
  const [chooseTime, setChooseTime] = useState<number>(30);
  const [activeCapsLock, setActiveCapsLock] = useState<boolean>(true);
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

  useEffect(() => {
    function handleCapsLock(e: KeyboardEvent) {
      if (e.key === "CapsLock")
        setActiveCapsLock(e.getModifierState("CapsLock"));
    }

    window.addEventListener("keydown", handleCapsLock);

    return () => {
      window.removeEventListener("keydown", handleCapsLock);
    };
  }, []);

  return (
    <>
      <header className="text-3xl tracking-tight font-semibold pt-8 px-4">
        speedtype
      </header>
      <div className="w-full pt-10 px-8">
        <div
          className={`mt-4 py-2 px-4 bg-lime-400 text-black text-xl rounded-xl font-medium w-fit mx-auto mb-4 ${!activeCapsLock && state.status !== "finish" ? "opacity-100" : "opacity-0"}`}
        >
          <span className="pr-2">CapsLock</span>
          <kbd className="font-sans">⇪</kbd>
        </div>

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
            userTypngAll={state.userTypngAll}
            precision={state.precision}
          />
        )}
      </div>
    </>
  );
}

export default App;
