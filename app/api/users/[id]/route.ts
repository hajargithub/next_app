import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
interface User {
  id?: number;
  name: string;
  email: string;
  active: boolean;
}
interface Props {
  params: { id: string };
}
export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      // id: parseInt(params.id),
      id: +params.id,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json({ user }, { status: 200 });
}
export async function PUT(request: NextRequest, { params }: Props) {
  const currentuser = await prisma.user.findUnique({
    where: {
      id: +params.id,
    },
  });
  if (!currentuser) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  const body = await request.json();
  const user: User = await prisma.user.update({
    data: {
      name: body.name,
      email: body.email,
      active: body.active,
    },
    where: {
      id: +params.id,
    },
  });

  return NextResponse.json({ user }, { status: 202 });
}
export async function DELETE(request: NextRequest, { params }: Props) {
  const currentuser = await prisma.user.findUnique({
    where: {
      id: +params.id,
    },
  });
  if (!currentuser) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  await prisma.user.delete({
    where: {
      id: +params.id,
    },
  });
  return new Response(null, { status: 204 });
  // return NextResponse.json({ message: "User is deleted" });
}
