export type TaskTypes =
  | "creativity"
  | "intelligence"
  | "discipline"
  | "strenght"
  | "emotonial"
  | "social";

export interface Task {
  task: "" | string;
  duration: "" | string;
  reward: "" | string;
  type: TaskTypes;
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
  promptTask: boolean;
  setAllTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface TaskListProps {
  setPromptTask: (b: boolean) => void;
  promptTask: boolean;
  setAllTask: React.Dispatch<React.SetStateAction<Task[]>>;
  allTask: Task[];
}
export interface ListTaskProps {
  allTask: Task[];
  handleChecked: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: TaskTypes,
    reward: string,
    id: number,
  ) => void;
}
