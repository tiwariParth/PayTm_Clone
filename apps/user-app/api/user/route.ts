import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const GET = async () => {
  await client.user.create({
    data: {
      email: "asdf",
      name: "asdf",
      password: "asdf",
      age: 1,
    },
  });
  return NextResponse.json({ message: "Hello" });
};
