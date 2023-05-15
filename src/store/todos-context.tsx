import { createContext, useState, ReactNode } from 'react';
import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

type ProviderProps = {
  children?: ReactNode;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {
    // adds todo to list
    // note to self: need to add comment otherwise eslint will throw an error on emply method
  },
  removeTodo: () => {
    // removes todo from list
  },
});

const TodosContextProvider = ({ children }: ProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
