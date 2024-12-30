"use client";
import React, { useActionState } from "react";
import { editTodoAction } from "../lib/action";
import Link from "next/link";
import { Todo } from "../types";

type TodoEditFormProps = {
  todo: Todo;
};

const TodoEditForm = ({ todo }: TodoEditFormProps) => {
  const initialState = {
    error: undefined,
    success: false,
  };
  const [state, formAction] = useActionState(editTodoAction, initialState);
  return (
    <form action={formAction} className="w-full">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-[auto_1fr] justify-center items-center w-full gap-4 px-2">
          <label htmlFor="content" className="text-xl font-semibold">
            Task
          </label>
          <input
            type="text"
            name="content"
            id="content"
            defaultValue={todo.content ?? ""}
            className="border border-gray-300 rounded-md focus:outline-none p-1"
          />
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] justify-center items-center w-full gap-4 px-2">
          <label htmlFor="isCompleted" className="col-start-2">
            Task is completed.
          </label>
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted"
            defaultChecked={todo.isCompleted}
            className="mr-2 w-4 h-4 col-start-3"
          />
          <input type="hidden" name="id" id="id" value={todo.id} />
        </div>
        {state.error && (
          <p className="col-span-2 text-red-600">{state.error}</p>
        )}
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-2">
          <button className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300 col-start-2">
            送信
          </button>
          <Link
            href={"/"}
            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-400 transition-all duration-300 col-start-3"
          >
            キャンセル
          </Link>
        </div>
      </div>
    </form>
  );
};

export default TodoEditForm;
