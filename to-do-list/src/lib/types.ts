export interface Task {
  id: number;
  text: string;
}

export interface BodyToDoProps {
  allTask: Task[];
  handleDeleteTask: (id: number) => void;
}

export interface HeaderToDoProps {
  handleTask: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTask: () => void;
}
