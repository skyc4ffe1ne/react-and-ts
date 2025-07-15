import type { StartScreenProps } from "../lib/types";

const allTime: number[] = [15, 30, 60, 120];
export default function StartScreen({
  chooseTime,
  setChooseTime,
  handleKey,
  introContRef,
  text,
}: StartScreenProps) {
  return (
    <div className="flex w-full justify-center items-center flex-col">
      <div className="bg-stone-100 flex gap-2 px-3 py-1 rounded-md items-center w-fit">
        <h4 className="text-gray-800 pr-2"> time: </h4>
        {allTime.map((el, idx) => (
          <button
            key={idx}
            onClick={() => setChooseTime(el)}
            className="cursor-pointer px-2 hover:bg-white rounded-md"
          >
            <span
              className={
                el === chooseTime
                  ? "text-lime-400 font-semibold"
                  : "text-gray-500"
              }
            >
              {el}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-4 py-2 px-4 bg-lime-400 text-black text-xl rounded-xl font-medium">
        <span className="pr-2">CapsLock</span>
        <kbd className="font-sans">⇪</kbd>
      </div>
      <h2
        className="text-6xl/20 text-gray-500 outline-none text-center text-balance pt-8"
        tabIndex={0}
        onKeyDown={(e) => handleKey(e)}
        ref={introContRef}
      >
        {text}
      </h2>
    </div>
  );
}
