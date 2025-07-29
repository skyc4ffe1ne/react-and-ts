import { createContext, useState, use, useEffect, useRef } from "react";

type sizeBoard = 8 | 16 | 32;
type statusBoard = "draw" | "erase" | "paint";
type colorBox = "black" | "lime" | "azure";

interface BoardContextProps {
  sizeBoard: sizeBoard;
  setSizeBoard: (e) => void;
  colorBox: colorBox;
  setColorBox: (e) => void;
  handleReset: () => void;
  statusBoard: statusBoard;
  setStatusBoard: (status: statusBoard) => void;
  boardRef: null | HTMLDivElement;
}

export const BoardContext = createContext<BoardContextProps | undefined>(
  undefined,
);

export function BoardProvider({ children }: { children: React.ReactNode }) {
  const [statusBoard, setStatusBoard] = useState<"draw" | "erase" | "paint">(
    "draw",
  );
  const [sizeBoard, setSizeBoard] = useState<8 | 16 | 32>(8);
  const [colorBox, setColorBox] = useState<string>("black");

  const boardRef = useRef<null | HTMLDivElement>(null);

  function handleReset() {
    if (!boardRef?.current) return;
    let allBox = boardRef.current.querySelectorAll("div");
    allBox.forEach((box) => {
      box.removeAttribute("data-fill");
    });
  }

  useEffect(() => {
    if (!boardRef?.current) return;
    const board = boardRef.current;
    let flag = false;
    function handleMouseDown(e) {
      e.preventDefault();
      flag = true;
      statusBoard === "draw"
        ? e.target.setAttribute("data-fill", colorBox)
        : e.target.removeAttribute("data-fill", colorBox);
    }
    function handleMouseUpAndLeave() {
      flag = false;
    }
    function handleMouseMove(e) {
      if (!flag) return;
      statusBoard === "draw"
        ? e.target.setAttribute("data-fill", colorBox)
        : e.target.removeAttribute("data-fill", colorBox);
    }

    board.addEventListener("mousedown", handleMouseDown);
    board.addEventListener("mouseup", handleMouseUpAndLeave);
    board.addEventListener("mouseleave", handleMouseUpAndLeave);
    board.addEventListener("mousemove", handleMouseMove);

    return () => {
      board.removeEventListener("mousedown", handleMouseDown);
      board.removeEventListener("mouseup", handleMouseUpAndLeave);
      board.removeEventListener("mouseleave", handleMouseUpAndLeave);
      board.removeEventListener("mousemove", handleMouseMove);
    };
  }, [statusBoard, colorBox]);

  const value: BoardContextProps = {
    sizeBoard,
    setSizeBoard,
    colorBox,
    setColorBox,
    handleReset,
    setStatusBoard,
    statusBoard,
    boardRef,
  };

  return <BoardContext value={value}>{children}</BoardContext>;
}

// Making sure that our context is not undefined.
export function useBoard() {
  const context = use(BoardContext);
  if (context === undefined) {
    throw new Error("useBoard must be used within BoardProvider");
  }

  return context;
}
