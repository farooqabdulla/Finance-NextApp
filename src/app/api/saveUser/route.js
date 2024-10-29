import { db_connect } from "@/helper/db_connect";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

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

    return NextResponse.json(
      {
        success: true,
        message: "Registered Successfully",
      },
      {
        status: 201,
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
