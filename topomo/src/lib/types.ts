export interface Task {
  createdAt: Date;
  name: string;
  checked: boolean;
  expiration: Date;
}

export interface ListTaskProps {
  allTask: Task[];
  handleChecked: (idx: number) => void;
  handleRemoveTask: (idx: number) => void;
}

export interface HeaderTodoProps {
  handleInput: () => void;
  handleTask: (idx: number) => void;
  inputValue: string;
}
