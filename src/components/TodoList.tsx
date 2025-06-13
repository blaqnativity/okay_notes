import type { Todo } from "../model";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="flex justify-evenly flex-wrap w-[90%] mx-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};
