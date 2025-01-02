"use client";
import { useActionState } from "react";
import { deleteTodoAction } from "../lib/action";
import DeleteButton from "@/components/DeleteButton";
import { initialState, TodoState } from "../lib/todoTypes";

type TodoDeleteButtonProps = {
  id: string;
};

const TodoDeleteButton = ({ id }: TodoDeleteButtonProps) => {
  const deleteTodoActionBind = deleteTodoAction.bind(null, id);
  const [state, formAction, pending] = useActionState<TodoState>(
    deleteTodoActionBind,
    initialState
  );
  return (
    <>
      <form action={formAction}>
        <DeleteButton pending={pending} />
      </form>
      {state.error && <p className="text-red-600 mt-2">{state.error}</p>}
    </>
  );
};

export default TodoDeleteButton;
