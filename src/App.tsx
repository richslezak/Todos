import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import './App.css';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <h1>Todo List</h1>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
