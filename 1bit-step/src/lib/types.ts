export type Task = {
  task: string;
  duration: number;
  reward: number;
  type:
  | "creativity"
  | "intelligence"
  | "discipline"
  | "strenght"
  | "emotonial"
  | "social";
};

export type allTask = Task[];

export type ToastProviderProps = {
  toast: boolean;
  setToast: (b: boolean) => void;
};

export type UserStats = {
  strength: number;
  discipline: number;
  inteliggence: number;
  emotional: number;
  social: number;
  creativity: number;
};

export type UserProviderProps = {
  userStats: UserStats;
  setUserStats: (user: UserStats) => void;
};

export type Status =
  | "strength"
  | "discipline"
  | "inteliggence"
  | "emotional"
  | "social"
  | "creativity";

export interface ToastProps {
  title: string;
  duration: number;
  dX: "right" | "left";
  dY: "top" | "bottom";
}

export interface PromptTaskProps {
  setPromptTask: (b: boolean) => void;
  setAllTask: (t: Task[]) => void;
}
