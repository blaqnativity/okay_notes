import { InputField } from "./components/InputField";
import { TodoList } from "./components/TodoList";
import { useState } from "react";
import type { Todo } from "./model";
import { nanoid } from "nanoid";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...todos, { id: nanoid(), todo, isDone: false }]);
    setTodo("");
  };

  return (
    <div className="mt-20 max-w-3xl mx-auto text-center flex flex-col gap-10 p-4 md:p-0">
      <h2 className="uppercase font-medium text-3xl md:text-6xl text-orange-100">
        Okay_Notes
      </h2>
      <span className="font-bold text-orange-100 tracking-wider">
        "Pen down one idea today, become tomorrow's leader"
      </span>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
