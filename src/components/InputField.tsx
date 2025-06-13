interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form
      onSubmit={handleAdd}
      className="border border-white rounded-4xl text-white space-x-5 p-4 flex flex-wrap"
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Put those magical ideas in writing..."
        className="p-2 flex-3/5 outline-0 text-xl"
      />
      <button className="shadow transition duration-300 hover:bg-orange-600 cursor-pointer bg-orange-500 p-2 font-bold rounded-full flex-">
        GO
      </button>
    </form>
  );
};
