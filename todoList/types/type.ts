export  interface Todo {
  id: number;
  task: string;
  description: string;
  status: string;
}


export interface TodoList {
  todos: React.Dispatch<React.SetStateAction<Todo[] | undefined>>;
}