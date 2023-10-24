import { NextRequest, NextResponse } from "@/node_modules/next/server";
import prisma from "@/prisma/client";

interface Course {
  id?: number;
  title: string;
  body: string;
  image: string;
  active: boolean;
}

export async function GET(request: NextRequest) {
  const course = await prisma.course.findMany();

  return NextResponse.json(course);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const currentCourse = await prisma.course.findUnique({
    where: {
      title: body.title,
    },
  });
  if (currentCourse) {
    return NextResponse.json(
      { error: `Course already Exist with this title  :${body.title}` },
      { status: 400 }
    );
  }
  const course = await prisma.course.create({
    data: {
      title: body.title,
      body: body.body,
      image: body.image,
      active: body.active,
    },
  });
  if (body.title == "") {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }
  return NextResponse.json([{ course }, { status: 201 }]);
}
