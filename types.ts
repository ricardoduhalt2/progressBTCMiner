
export interface Task {
  id: string;
  text: string;
  checked: boolean;
  isMetadata: boolean;
  children: Task[];
}
