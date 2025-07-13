import { useEffect, useState } from "react";
import { createMemoryCards } from "../utils/createMemoryCards";
import type { CardType } from "../lib/types";

export function useMemoryGame(cardsLength: number) {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  useEffect(
    function() {
      const initialCards = createMemoryCards(cardsLength);
      setCards(initialCards);
      setFlippedCards([]);
    },
    [cardsLength],
  );

  function handleFlippedCards(idx: number) {
    if (flippedCards.length < 2 && !flippedCards.includes(idx)) {
      setFlippedCards((fc) => (fc = [...fc, idx]));
    }
  }

  useEffect(
    function() {
      const [a, b] = flippedCards;
      if (flippedCards.length === 2) {
        if (cards[a].id === cards[b].id) {
          setTimeout(() => {
            setCards((c) =>
              c.map((el) =>
                el.img === cards[a].img ? { ...el, matched: true } : el,
              ),
            );
          }, 1000);
        }
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    },
    [flippedCards],
  );

  return { cards, flippedCards, handleFlippedCards };
}
