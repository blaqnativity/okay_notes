import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useState } from "react";
import type { Todo } from "../model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoItem: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.todo);

  const handleDone = (id: string) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setTodos(todos.filter((item) => item.id !== id));
    }
  };

  const handleEdit = () => {
    if (!todo.isDone) {
      setIsEditing(true);
    }
  };

  const handleSubmit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, todo: editValue } : item
      )
    );
    setIsEditing(false);
  };

  return (
    <form
      className="flex flex-wrap gap-2 w-[40%] rounded p-5 mt-5 bg-yellow-300 items-start justify-between"
      onSubmit={(e) => handleSubmit(e, todo.id)}
    >
      {isEditing ? (
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={() => setIsEditing(false)}
          className="grow text-start text-md rounded p-1"
          autoFocus
        />
      ) : todo.isDone ? (
        <span className="grow text-start text-md line-through">
          {todo.todo}
        </span>
      ) : (
        <span className="grow text-start text-md">{todo.todo}</span>
      )}

      {/* icons */}
      <div className="flex items-center gap-2">
        <span className="text-lg cursor-pointer" onClick={handleEdit}>
          <AiFillEdit />
        </span>
        <span
          onClick={() => handleDelete(todo.id)}
          className="text-lg cursor-pointer"
        >
          <AiFillDelete />
        </span>
        <span
          onClick={() => handleDone(todo.id)}
          className="text-lg cursor-pointer"
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};
