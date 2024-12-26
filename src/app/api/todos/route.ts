import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    NextResponse.json(error);
  }
};
