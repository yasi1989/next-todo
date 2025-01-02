"use client";
import React, { useActionState } from "react";
import { addTodoAction } from "../lib/action";
import SubmitButton from "@/components/SubmitButton";
import CancelButton from "@/components/CancelButton";
import { initialState } from "../lib/todoTypes";

const TodoNewForm = () => {
  const [state, formAction, pending] = useActionState(
    addTodoAction,
    initialState
  );
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
            className="border border-gray-300 rounded-md focus:outline-none p-1"
          />
          {state.error && (
            <p className="col-span-2 text-red-600">{state.error}</p>
          )}
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-2">
          <SubmitButton pending={pending} />
          <CancelButton />
        </div>
      </div>
    </form>
  );
};

export default TodoNewForm;
