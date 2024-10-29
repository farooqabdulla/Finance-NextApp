import { db_connect } from "@/helper/db_connect";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  await db_connect();

  const { email, password } = await request.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        {
          success: false,
          message: "Incorrect password",
        },
        {
          status: 401,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: { email: user.email, name: user.name },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      {
        status: 500,
      }
    );
  }
}
