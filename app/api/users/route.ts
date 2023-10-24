import { NextRequest, NextResponse } from "@/node_modules/next/server";
import prisma from "@/prisma/client";

interface User {
  id?: number;
  name: string;
  email: string;
  active: boolean;
}

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const currentUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (currentUser) {
    return NextResponse.json(
      { error: `User already Exist with this email address :${body.email}` },
      { status: 400 }
    );
  }
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      active: body.active,
    },
  });
  if (body.name == "") {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  return NextResponse.json([{ user }, { status: 201 }]);
}
