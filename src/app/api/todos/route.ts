import prisma from "@/utils/prisma";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: Request, res: NextApiResponse) => {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    NextResponse.json(error);
  }
};
