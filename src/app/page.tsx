import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TodoList from "@/features/todos/components/TodoList";
import TodoPageLayout from "@/features/todos/components/TodoPageLayout";
import Link from "next/link";

const Todo = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/todos/`, { cache: "no-store" });
  const todos = await res.json();
  const createBtnRender = () => (
    <Link
      href="/todos/new/"
      className="text-gray-500 hover:text-gray-800 transition-colors"
    >
      <FontAwesomeIcon icon={faPlus} size="lg" />
    </Link>
  );
  return (
    <TodoPageLayout btn={createBtnRender()} title="Todo">
      <TodoList todos={todos} />
    </TodoPageLayout>
  );
};

export default Todo;
