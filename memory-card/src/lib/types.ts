export interface CardType {
  id: number;
  img: string;
  matched: boolean;
}

export interface CardProps {
  idx: number;
  card: CardType;
  flipped: boolean;
  handleFlippedCards: (idx: number) => void;
}

export interface State {
  status: "default" | "play" | "finish";
}

export interface Action {
  type: "retry" | "play" | "finish";
}
