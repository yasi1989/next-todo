import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import TodoList from "@/features/todos/components/TodoList";
import TodoPageLayout from "@/features/todos/components/TodoPageLayout";
import Link from "next/link";
import prisma from "@/utils/prisma";
import { TODO_NEW_URL } from "@/utils/config";

const Todo = async () => {
  const todos = await prisma.todo.findMany();
  const createBtnRender = () => (
    <Link
      href={TODO_NEW_URL}
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
