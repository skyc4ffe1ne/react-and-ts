import Box from "./Box";

import { useRef, useEffect } from "react";
import { useBoard } from "../contexts/BoardProvider";

export default function Board() {
  const { colorBox, sizeBoard, eraseBox } = useBoard();
  const lenghtArr = sizeBoard * 8;

  const defaultStyle = "border-border my-4 grid border size-[512px] ";

  const style = {
    "8": "grid-cols-8 grid-rows-8",
    "16": "grid-cols-16 grid-rows-16",
    "32": "grid-cols-32 grid-rows-32",
  };

  const boardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!boardRef?.current) return;

    const board = boardRef.current;

    let isErasing = false;
    function erase(e) {
      isErasing = true;
      e.target.removeAttribute("data-fill", colorBox);
    }

    function notErasing() {
      isErasing = false;
    }

    function stillErasing(e) {
      if (!isErasing) return;
      e.target.removeAttribute("data-fill");
    }

    board.addEventListener("mousedown", erase);
    board.addEventListener("mouseup", notErasing);
    board.addEventListener("mouseleave", notErasing);
    board.addEventListener("mousemove", stillErasing);

    return () => {
      board.removeEventListener("mousedown", erase);
      board.removeEventListener("mouseup", notErasing);
      board.removeEventListener("mouseleave", notErasing);
      board.removeEventListener("mousemove", stillErasing);
    };
  }, [eraseBox]);

  useEffect(() => {
    if (!boardRef?.current) return;

    const board = boardRef.current;

    let isDrawing = false;
    function draw(e) {
      isDrawing = true;
      e.target.setAttribute("data-fill", colorBox);
    }

    function notDrawing() {
      isDrawing = false;
    }

    function stillDrawing(e) {
      if (!isDrawing) return;
      e.target.setAttribute("data-fill", colorBox);
    }

    board.addEventListener("mousedown", draw);
    board.addEventListener("mouseup", notDrawing);
    board.addEventListener("mousemove", stillDrawing);
    board.addEventListener("mouseleave", notDrawing);

    return () => {
      board.removeEventListener("mousedown", draw);
      board.removeEventListener("mouseup", notDrawing);
      board.removeEventListener("mousemove", stillDrawing);
      board.removeEventListener("mouseleave", notDrawing);
    };
  }, [colorBox]);

  return (
    <div className={defaultStyle + style[sizeBoard]} ref={boardRef}>
      {Array.from({ length: sizeBoard * 8 }, (_, idx) => (
        <Box key={idx} />
      ))}
    </div>
  );
}
