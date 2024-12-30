"use client";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState } from "react";
import { deleteTodoAction } from "../lib/action";

type TodoDeleteButtonProps = {
  id: string;
};

const TodoDeleteButton = ({ id }: TodoDeleteButtonProps) => {
  const initialState = {
    error: undefined,
    success: false,
  };
  const deleteTodoActionBind = deleteTodoAction.bind(null, id);
  const [state, formAction] = useActionState(
    deleteTodoActionBind,
    initialState
  );
  return (
    <>
      <form action={formAction}>
        <button>
          <FontAwesomeIcon icon={faDeleteLeft} />
        </button>
      </form>
      {state.error && <p className="text-red-600 mt-2">{state.error}</p>}
    </>
  );
};

export default TodoDeleteButton;
