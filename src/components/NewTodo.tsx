import { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value ?? '';

    const clearInput = () => {
      return (todoTextInputRef.current!.value = '');
    };

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);

    clearInput();
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Enter a Task</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add</button>
    </form>
  );
};

export default NewTodo;
