export type Task = {
  task: string;
  time: number;
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
