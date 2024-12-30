import Link from "next/link";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TodoEditButtonProps = {
  id: string;
};

const TodoEditButton = ({ id }: TodoEditButtonProps) => {
  return (
    <Link href={`/todos/${id}`}>
      <FontAwesomeIcon icon={faEdit} />
    </Link>
  );
};

export default TodoEditButton;
