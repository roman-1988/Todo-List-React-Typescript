import { useState, useEffect, useRef } from "react";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { ITodo } from "../types/data";
import "../styles.css";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false
        }
      ]);
      setValue("");
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  };

const toggleTodo = (id: number): void => {
  setTodos(todos.map(todo => {
    if (todo.id !== id) return todo;
    return {
      ...todo,
      complete: !todo.complete
    }
  }))
};
  
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className="App">
      <div>
        <h1>Список дел</h1>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />&nbsp;
        <button 
        onClick={addTodo}
        style={{
          borderRadius: 5,
        }}
        >Add</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export { App };