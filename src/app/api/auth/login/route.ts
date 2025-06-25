import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import z from "zod";
import jwt from "jsonwebtoken";

const schema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password must be 6 or more characters long" }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Validation vailed",
        },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const token = generateToken(user.id);

    return NextResponse.json({ token }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

const SECRET_KEY = process.env.JWT_SECRET_KEY || "secretjwt123";

function generateToken(userId: number) {
  const payload = { userId };
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
}
