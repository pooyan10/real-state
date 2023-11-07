import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";
import RealStateUser from "@/models/RealStateUser";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    console.log({ email, password });
    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }
    const existingUser = await RealStateUser.findOne({ email: email });
    if (existingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await RealStateUser.create({
      email: email,
      password: hashedPassword,
    });
    console.log(newUser);

    return NextResponse.json(
      { message: "حساب کاربری ایجاد شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
