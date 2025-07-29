import { createContext, useState, use, useEffect, useRef } from "react";
import type { BoardContextProps, colorBox, sizeBoard, statusBoard, } from "../lib/types";


export const BoardContext = createContext<BoardContextProps | undefined>(
  undefined,
);

export function BoardProvider({ children }: { children: React.ReactNode }) {
  const [statusBoard, setStatusBoard] = useState<statusBoard>(
    "draw",
  );
  const [sizeBoard, setSizeBoard] = useState<sizeBoard>(8);
  const [colorBox, setColorBox] = useState<colorBox>("black");

  const boardRef = useRef<null | HTMLDivElement>(null);

  function handleReset() {
    if (!boardRef?.current) return;
    let allBox = boardRef.current.querySelectorAll("div");
    allBox.forEach((box) => {
      box.removeAttribute("data-fill");
    });
  }



  // Reset the board, when user change size
  useEffect(() => {
    handleReset()
  }, [sizeBoard])

  useEffect(() => {
    if (!boardRef?.current) return;
    const board = boardRef.current;

    if (statusBoard === "paint") {
      let allBox = board.querySelectorAll("div");
      function fillBoard() {
        allBox.forEach((box) => {
          box.setAttribute("data-fill", colorBox);
        });
      }

      board.addEventListener("click", fillBoard)
      return () => {
        board.removeEventListener("click", fillBoard)
      }

    } else {
      let flag = false;
      function handleMouseDown(e: MouseEvent) {
        const target = e.target as HTMLElement;
        flag = true;
        statusBoard === "draw"
          ? target.setAttribute("data-fill", colorBox)
          : target.removeAttribute("data-fill");
      }
      function handleMouseUpAndLeave() {
        flag = false;
      }
      function handleMouseMove(e: MouseEvent) {
        const target = e.target as HTMLElement;
        if (!flag) return;
        statusBoard === "draw"
          ? target.setAttribute("data-fill", colorBox)
          : target.removeAttribute("data-fill")
      }

      // Prevent the dragstart event when drawing/erasing
      function handleDragStart(e: DragEvent) {
        e.preventDefault()
      }

      board.addEventListener("mousedown", handleMouseDown);
      board.addEventListener("mouseup", handleMouseUpAndLeave);
      board.addEventListener("mouseleave", handleMouseUpAndLeave);
      board.addEventListener("mousemove", handleMouseMove);
      board.addEventListener("dragstart", handleDragStart);

      return () => {
        board.removeEventListener("mousedown", handleMouseDown);
        board.removeEventListener("mouseup", handleMouseUpAndLeave);
        board.removeEventListener("mouseleave", handleMouseUpAndLeave);
        board.removeEventListener("mousemove", handleMouseMove);
        board.removeEventListener("dragstart", handleDragStart);
      };

    }

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
