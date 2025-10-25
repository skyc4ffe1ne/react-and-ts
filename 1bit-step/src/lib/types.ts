export type Status =
  | "strength"
  | "creativity"
  | "intelligence"
  | "discipline"
  | "emotional"
  | "social";

export interface Task {
  task: "" | string;
  duration: "" | string;
  reward: "" | string;
  type: Status;
  isChecked: boolean;
}

export type allTask = Task[];

export type ToastProviderProps = {
  toast: boolean;
  setToast: (b: boolean) => void;
};

export type UserStats = {
  strength: number;
  discipline: number;
  intelligence: number;
  emotional: number;
  social: number;
  creativity: number;
};

export type UserProviderProps = {
  userStats: UserStats;
  setUserStats: (user: UserStats) => void;
};

export interface ToastProps {
  title: string;
  duration: number;
  dX: "right" | "left";
  dY: "top" | "bottom";
}

export interface PromptTaskProps {
  setPromptTask: (b: boolean) => void;
  promptTask: boolean;
  setAllTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface TaskListProps {
  setPromptTask: (b: boolean) => void;
  setAllTask: React.Dispatch<React.SetStateAction<Task[]>>;
  allTask: Task[];
}
export interface ListTaskProps {
  allTask: Task[];
  handleChecked: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: Status,
    reward: string,
    id: number,
  ) => void;
}
