import classes from './TodoItem.module.css';
type todoItemProps = {
  text?: string;
  removeTodo: () => void;
};

const TodoItem = ({ text, removeTodo }: todoItemProps) => {
  return (
    <li className={classes.item}>
      {text}
      <button onClick={removeTodo}>remove</button>
    </li>
  );
};

export default TodoItem;
