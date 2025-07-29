export type sizeBoard = 8 | 16 | 32;
export type statusBoard = "draw" | "erase" | "paint";
export type colorBox = "black" | "lime" | "azure";

export interface BoardContextProps {
  sizeBoard: sizeBoard;
  setSizeBoard: (size: sizeBoard) => void;
  colorBox: colorBox;
  setColorBox: (color: colorBox) => void;
  handleReset: () => void;
  statusBoard: statusBoard;
  setStatusBoard: (status: statusBoard) => void;
  boardRef: null | React.Ref<HTMLDivElement>;
}
