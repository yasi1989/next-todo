import { Todo } from "../types";
import TodoEditButton from "./TodoEditButton";
import TodoDeleteButton from "./TodoDeleteButton";

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <li
      className="grid grid-cols-[auto_1fr_auto_auto] gap-5 w-full"
      key={todo.id}
    >
      <input
        type="checkbox"
        name="isCompleted"
        id="isCompleted"
        disabled
        checked={todo.isCompleted}
      />
      <div>{todo.content}</div>
      <TodoEditButton id={todo.id} />
      <TodoDeleteButton id={todo.id} />
    </li>
  );
};

export default TodoCard;
