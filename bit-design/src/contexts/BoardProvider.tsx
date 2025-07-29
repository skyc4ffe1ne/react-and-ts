import { createContext, useState, use } from "react";

interface BoardContextProps {
  sizeBoard: 8 | 16 | 32;
  setSizeBoard: () => void;
  colorBox: string;
  setColorBox: () => void;
  handleReset: () => void;
  eraseBox: boolean;
  setEraseBox: () => void;
}

export const BoardContext = createContext<BoardContextProps | undefined>(
  undefined,
);

export function BoardProvider({ children }: { children: React.ReactNode }) {
  const [sizeBoard, setSizeBoard] = useState<number>(8);
  const [colorBox, setColorBox] = useState<string>("black");
  const [eraseBox, setEraseBox] = useState<boolean>(false);

  function handleReset() {
    if (!boardRef?.current) return;
    let allBox = boardRef.current.querySelectorAll("div");
    allBox.forEach((box) => {
      box.removeAttribute("data-fill");
    });
  }

  const value: BoardContextProps = {
    sizeBoard,
    setSizeBoard,
    colorBox,
    setColorBox,
    handleReset,
    eraseBox,
    setEraseBox,
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
