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

export type Months = {
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
};

export type Week = {
  mon: boolean,
  tue: boolean,
  wed: boolean,
  thu: boolean,
  fri: boolean,
  sat: boolean,
  sun: boolean,
};

export type Year<S> = {
  T: S;
}

export interface User {
  stats: UserStats;
  year: Year<Months>;
  week: Week;
}

export type UserProviderProps = {
  user: User,
  handleUserStats: (reward: string, operation: "add" | "remove", type: Status) => void,
  handleUserYear: (reward: string, operation: "add" | "remove") => void,
  activeYear: string,
  setActiveYear: (year: string) => void,
};
