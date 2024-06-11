export const IntialResponse = {
  todos: [],
  total: 0,
  skip: 0,
  limit: 0,
};
export interface ITodo {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
