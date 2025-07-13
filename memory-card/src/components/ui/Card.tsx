import type { CardProps } from "../../lib/types";
export default function Card({
  idx,
  card,
  flipped,
  handleFlippedCards,
}: CardProps) {
  return (
    <>
      {card.matched ? (
        <div className="size-24 rounded cursor-pointer bg-green-800 text-green-400 flex justify-center items-center text-4xl">
          {card.img}
        </div>
      ) : (
        <div
          className="size-24 rounded cursor-pointer bg-[#003049] text-[#669bbc] flex justify-center items-center text-4xl"
          onClick={() => handleFlippedCards(idx)}
        >
          {flipped ? card.img : "?"}
        </div>
      )}
    </>
  );
}
