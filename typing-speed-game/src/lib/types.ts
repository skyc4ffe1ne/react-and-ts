export interface State {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  text: string;
  status: "default" | "typing" | "finish";
  currIdx: number;
  userTypng: string[];
  userTypngAll: string[];
  precision: number;
}

export type Action =
  | { type: "RESTART" }
  | { type: "TYPING"; payload: string }
  | { type: "REMOVE" }
  | { type: "FINISH" };

export interface FinishScreenProps {
  timer: number;
  userTypngAll: string[];
  dispatch: React.Dispatch<Action>;
  precision: number;
}
export interface StartScreenProps {
  chooseTime: number;
  setChooseTime: (el: number) => void;
  handleKey: (e: any) => void;
  introContRef: React.RefObject<HTMLHeadingElement | null>;
  text: string;
}

export interface TextScreenProps {
  timer: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  handleKey: (e: any) => void;
  text: string;
  currIdx: number;
  userTypng: string[];
}
