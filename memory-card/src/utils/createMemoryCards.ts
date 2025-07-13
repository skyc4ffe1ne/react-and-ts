import type { CardType } from "../lib/types";

export function createMemoryCards(size: number): CardType[] {
  // Arr of index [0,...,15]
  const randomIndex = Array.from({ length: size }, (_, idx) => idx);

  const cardImgs = ["1", "2 ", "3 ", "4", "5", "6", "7", "8"];

  let temp = 0;
  const cards = Array.from({ length: size }, (_, idx) => {
    // Same id for 2 el
    if (idx % 2 === 0) {
      temp += 1;
    }
    return {
      id: temp,
      img: cardImgs[temp - 1],
      matched: false,
    };
  });

  return shuffleMemoryCards(cards, randomIndex);
}

function shuffleMemoryCards(
  cards: CardType[],
  randomIndex: number[],
): CardType[] {
  // Create a new array for making card shuflled
  const cardShuffled: CardType[] = Array.from({ length: cards.length });

  for (let i = 0; i < cards.length; i++) {
    // Get a random index but based on the Arr of index number[]
    let getRandomIndex = Math.floor(Math.random() * randomIndex.length);
    // Get the new index
    let getRandom = randomIndex[getRandomIndex];
    // Splice the arr
    randomIndex.splice(getRandomIndex, 1);
    // Assign it
    cardShuffled[getRandom] = cards[i];
  }

  return cardShuffled;
}

// [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] -> rapresent all the index avaible
// Lenght:16-> Math.floor(Math.random) max 15 (index) -> take the index avaible
// newArray[3] = cards[i] (oldArray) -> assign the new index
