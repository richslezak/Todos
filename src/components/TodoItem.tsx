import classes from './TodoItem.module.css';
const TodoItem: React.FC<{ text: string; removeTodo: () => void }> = (props) => {
  return (
    <li className={classes.item}>
      {props.text}
      <button onClick={props.removeTodo}>remove</button>
    </li>
  );
};

export default TodoItem;
