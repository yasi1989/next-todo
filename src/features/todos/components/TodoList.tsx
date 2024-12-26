import TodoCard from "./TodoCard";

type TodoListProps = {
  todos: Todo[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="flex flex-col text-xl w-full gap-2">
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
