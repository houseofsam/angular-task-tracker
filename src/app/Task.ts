// Create interface (similar to class) for Task object template/model and what it should contain

export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
