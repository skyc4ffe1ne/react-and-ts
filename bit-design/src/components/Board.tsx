import { useBoard } from "../contexts/BoardProvider";

export default function Board() {
  const { sizeBoard, boardRef } = useBoard();
  const defaultStyle = "border-border my-4 grid border size-[512px] ";
  const style = {
    "8": "grid-cols-8 grid-rows-8",
    "16": "grid-cols-16 grid-rows-16",
    "32": "grid-cols-32 grid-rows-32",
  };

  return (
    <div className={defaultStyle + style[sizeBoard]} ref={boardRef}>
      {Array.from({ length: Math.pow(sizeBoard, 2) }, (_, idx) => (
        <div className="bg-background border border-gray-300" key={idx} />
      ))}
    </div>
  );
}
