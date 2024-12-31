"use client";
import { useActionState } from "react";
import { deleteTodoAction } from "../lib/action";
import DeleteButton from "@/components/DeleteButton";

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
        <DeleteButton />
      </form>
      {state.error && <p className="text-red-600 mt-2">{state.error}</p>}
    </>
  );
};

export default TodoDeleteButton;
