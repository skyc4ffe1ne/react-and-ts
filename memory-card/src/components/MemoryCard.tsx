import Card from "./ui/Card";
import { useEffect } from "react";

export default function MemoryCard({
  handleStatus,
  cards,
  flippedCards,
  handleFlippedCards,
}) {
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      handleStatus("finish");
    }
  }, [cards]);

  return (
    <div className="grid w-full h-auto grid-cols-[_repeat(4,_minmax(0,96px))] gap-x-4 gap-y-4 place-content-center mt-20">
      {cards.map((card, idx: number) => (
        <Card
          key={idx}
          idx={idx}
          card={card}
          flipped={flippedCards.includes(idx) || card.matched}
          handleFlippedCards={handleFlippedCards}
        />
      ))}
    </div>
  );
}
