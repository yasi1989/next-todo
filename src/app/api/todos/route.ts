import { supabase } from "@/utils/supabaseClient";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: Request, res: NextApiResponse) => {
  const { data, error } = await supabase.from("todos").select("*");
  if (error) {
    NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
};
