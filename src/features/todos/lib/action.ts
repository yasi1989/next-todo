"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

type State = {
  error?: string | undefined;
  success: boolean;
};

const contentSchema = z.string().min(1, "タスクを入力してください。");

export async function addTodoAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const content = formData.get("content") as string;
    const validatedContent = contentSchema.parse(content);
    await prisma.todo.create({
      data: {
        content: validatedContent,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: error.errors.map((e) => e.message).join(", "),
        success: false,
      };
    } else if (error instanceof Error) {
      return {
        error: error.message,
        success: false,
      };
    } else {
      return {
        error: "システム異常が発生しました。",
        success: false,
      };
    }
  }
  redirect("/");
}

export async function editTodoAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  try {
    const id = formData.get("id") as string;
    const content = formData.get("content") as string;
    const isCompleted = formData.get("isCompleted") !== null;
    const validatedContent = contentSchema.parse(content);
    await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        content: validatedContent,
        isCompleted: isCompleted,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: error.errors.map((e) => e.message).join(", "),
        success: false,
      };
    } else if (error instanceof Error) {
      return {
        error: error.message,
        success: false,
      };
    } else {
      return {
        error: "システム異常が発生しました。",
        success: false,
      };
    }
  }
  redirect("/");
}

export async function deleteTodoAction(id: string): Promise<State> {
  try {
    await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/");
    return {
      error: "",
      success: true,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: error.errors.map((e) => e.message).join(", "),
        success: false,
      };
    } else if (error instanceof Error) {
      return {
        error: error.message,
        success: false,
      };
    } else {
      return {
        error: "システム異常が発生しました。",
        success: false,
      };
    }
  }
}
