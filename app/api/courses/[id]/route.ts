import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
interface Course {
  id?: number;
  title: string;
  body: string;
  image: string;
  active: boolean;
}
interface Props {
  params: { id: string };
}
export async function GET(request: NextRequest, { params }: Props) {
  const course = await prisma.course.findUnique({
    where: {
      id: +params.id,
    },
  });
  if (!course) {
    return NextResponse.json({ error: "course not found" }, { status: 404 });
  }
  return NextResponse.json({ course }, { status: 200 });
}
export async function PUT(request: NextRequest, { params }: Props) {
  const currentcourse = await prisma.course.findUnique({
    where: {
      id: +params.id,
    },
  });
  if (!currentcourse) {
    return NextResponse.json({ error: "course not found" }, { status: 404 });
  }
  const body = await request.json();
  const course: Course = await prisma.course.update({
    data: {
      title: body.title,
      body: body.body,
      image: body.image,
      active: body.active,
    },
    where: {
      id: +params.id,
    },
  });

  return NextResponse.json({ course }, { status: 202 });
}
export async function DELETE(request: NextRequest, { params }: Props) {
  const currentcourse = await prisma.course.findUnique({
    where: {
      id: +params.id,
    },
  });
  if (!currentcourse) {
    return NextResponse.json({ error: "course not found" }, { status: 404 });
  }
  await prisma.course.delete({
    where: {
      id: +params.id,
    },
  });
  return new Response(null, { status: 204 });
}
