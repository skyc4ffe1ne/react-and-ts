import { useEffect, useReducer, useRef, useState } from "react";
import type { State, Action } from "../lib/types.ts";
import { splitTextIntoLine } from "../utils/textToLines.ts";
import { nextLine } from "../utils/nextLine.ts";

const defaultText =
  "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[5][6] that aims to make building user interfaces based on components more seamless.[5] It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[7][8][9] React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix[a]. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[11][12] A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements.";

const initialText = splitTextIntoLine(defaultText, 30);

const initialState: State = {
  firstLine: initialText.firstLine,
  secondLine: initialText.secondLine,
  thirdLine: initialText.thirdLine,
  text: initialText.firstLine + initialText.secondLine + initialText.thirdLine,
  status: "default",
  currIdx: -1,
  userTypng: [],
  userTypngAll: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "RESTART":
      return initialState;
    case "TYPING":
      if (
        state.currIdx + 1 >
        state.firstLine.length + state.secondLine.length
      ) {
        const newThirdLine = nextLine(state.thirdLine, 30, defaultText);
        return {
          ...state,
          firstLine: state.secondLine,
          secondLine: state.thirdLine,
          thirdLine: newThirdLine,
          text: state.secondLine + state.thirdLine + newThirdLine,
          userTypng: state.userTypng
            .toSpliced(0, state.firstLine.length)
            .concat(action.payload),
          userTypngAll: [...state.userTypngAll, state.userTypng.join("")],
          currIdx: state.currIdx + 1 - state.firstLine.length,
          status: "typing",
        };
      } else {
        return {
          ...state,
          userTypng: [...state.userTypng, action.payload],
          currIdx: state.currIdx + 1,
          status: "typing",
        };
      }

    case "REMOVE":
      return {
        ...state,
        currIdx: state.currIdx < 0 ? state.currIdx : state.currIdx - 1,
        userTypng: state.userTypng.toSpliced(state.currIdx, 1),
        userTypngAll: state.userTypngAll.toSpliced(state.currIdx, 1),
      };
    case "FINISH":
      const finalUserTypigin =
        state.userTypngAll.length === 0
          ? state.userTypng
          : state.userTypngAll[0].split("");
      const onlyUserTyped = defaultText.slice(0, finalUserTypigin.length);
      let correctChar = 0;
      for (let i = 0; i < finalUserTypigin.length; i++) {
        finalUserTypigin[i] === onlyUserTyped[i] ? correctChar++ : correctChar;
      }
      const precision = (correctChar / finalUserTypigin.length) * 100;
      return {
        ...state,
        status: "finish",
        precision: precision,
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
