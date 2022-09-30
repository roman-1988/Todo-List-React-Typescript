import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";
interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  const {items, removeTodo, toggleTodo} = props;
  return (
    <>
      {items.map((todo) => (
        <TodoItem 
        key={todo.id} 
        toggleTodo={toggleTodo} 
        removeTodo={removeTodo}
        {...todo} 
        />
      ))}
    </>
  );
};

export { TodoList };