import { useEffect, useRef } from "react";

export function usePixelArt() {
  const boardRef = useRef<HTMLDivElement | null>(null);
  function createEffect(dependencies: string, status: "draw" | "erase") {
    useEffect(() => {
      if (!boardRef?.current) return;

      const board = boardRef.current;

      let flag = false;
      function handleMouseDown(e) {
        flag = true;
        status === "draw"
          ? e.target.setAttribute("data-fill", colorBox)
          : e.target.removeAttribute("data-fill", colorBox);
      }

      function handleMouseUpAndLeave() {
        flag = false;
      }

      function handleMouseMove(e) {
        if (!flag) return;
        status === "draw"
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
    }, [dependencies]);
  }

  return { createEffect };
}
