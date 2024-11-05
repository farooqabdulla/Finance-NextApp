import { db_connect } from "@/helper/db_connect";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  await db_connect();

  const { name, email, phone, password } = await request.json();

  try {
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          success: false,
          message: "Use a different Email address",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, phone, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign(
      {
        user: {
          id: newUser._id,
          email: newUser.email,
          name: newUser.name, 
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      success: true,
      message: "Registered Successfully",
    });
    response.cookies.set("tokenLog", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 604800, // 7 days in seconds
      sameSite: "strict",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      {
        status: 500,
      }
    );
  }
}
