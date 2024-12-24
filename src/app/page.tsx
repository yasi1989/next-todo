import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TodoList from "@/features/todos/TodoList";

const Todo = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/todos/`, { cache: "no-store" });
  const todos = await res.json();
  return (
    <div className="flex flex-col justify-center items-center p-5 rounded-lg bg-white gap-8 w-full mx-8 md:mx-16 lg:mx-24 max-w-3xl">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-3xl font-bold">Todo</h2>
        <button>
          <FontAwesomeIcon icon={faPlus} className="text-xl mr-2" />
        </button>
      </div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="検索"
        className="border rounded-md text-xl w-full p-1"
      />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
