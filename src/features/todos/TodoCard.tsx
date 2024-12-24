import { faDeleteLeft, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TodoCardProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <li
      className="grid grid-cols-[auto_1fr_auto_auto] gap-3 w-full"
      key={todo.id}
    >
      <input
        type="checkbox"
        name="isCompleted"
        id="isCompleted"
        disabled
        checked={todo.completed}
      />
      <div>{todo.content}</div>
      <button>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
    </li>
  );
};

export default TodoCard;
