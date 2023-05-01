import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  return (
    <>
      <h1>Todo List</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </>
  );
}

export default App;
