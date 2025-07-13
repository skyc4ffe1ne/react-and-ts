import { useEffect, useState } from "react";
import { createMemoryCards } from "../utils/createMemoryCards";
import type { CardType } from "../lib/types";

export function useMemoryGame(cardsLength: number) {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  useEffect(
    function () {
      const initialCards = createMemoryCards(cardsLength);
      setCards(initialCards);
      setFlippedCards([]);
    },
    [cardsLength],
  );
}
