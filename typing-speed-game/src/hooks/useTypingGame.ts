import { useEffect, useReducer, useRef, useState } from "react";
import type { State, Action } from "../lib/types.ts";

const defaultText = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, cupiditate!",
  "The only true wisdom is in knowing you know nothing",
  "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
  "Knowing yourself is the beginning of all wisdom.",
  "Let him who would move the world first move himself.",
  "The greatest wisdom is in being wise enough to know that you are not wise.",
  "Everything has beauty, but not everyone sees it",
  "We do not learn from experience we learn from reflecting on experience.",
  "He who knows, does not speak. He who speaks, does not know.",
  "The wise man does not lay up his own funds, but answers the wants of those around him.",
];

const initialState: State = {
  text: defaultText[Math.floor(Math.random() * defaultText.length)],
  status: "default",
  currIdx: -1,
  userTypng: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "RESTART":
      return {
        ...initialState,
        text: defaultText[Math.floor(Math.random() * defaultText.length)],
      };
    case "TYPING":
      return {
        ...state,
        userTypng: [...state.userTypng, action.payload],
        currIdx: state.currIdx + 1,
        status: "typing",
      };
    case "REMOVE":
      return {
        ...state,
        currIdx: state.currIdx < 0 ? state.currIdx : state.currIdx - 1,
        userTypng: state.userTypng.toSpliced(state.currIdx, 1),
      };
    case "FINISH":
      return {
        ...state,
        status: "finish",
      };
    default:
      throw new Error("Action Unknow!");
  }
}

export function useTypingGame(time: number) {
  const [state, dispatch]: [State, React.Dispatch<Action>] = useReducer(
    reducer,
    initialState,
  );
  const [timer, setTimer] = useState(time);
  const intervalRef = useRef<number | null>(null);

  // Set initial value of time
  useEffect(() => {
    setTimer((t) => (t = time));
  }, [time]);

  useEffect(() => {
    if (state.status === "typing") {
      intervalRef.current = setInterval(() => {
        setTimer((t) => (t = t - 1));
      }, 1000);
    }
  }, [state.status]);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(intervalRef.current);
      setTimer(time); // Get the previous time if the user don't set a new one.
      dispatch({ type: "FINISH" });
    }
  }, [timer]);

  function handleKey(e: any) {
    const { key: pressedKey } = e;
    if (pressedKey === "Backspace") {
      dispatch({ type: "REMOVE" });
    } else if (pressedKey[0].match(/[A-Z]/) && pressedKey.length > 1) {
      // Get CapsLock, Shift, BackSpace...
      return;
    } else {
      dispatch({ type: "TYPING", payload: pressedKey });
    }
  }

  return { state, handleKey, timer, dispatch };
}
