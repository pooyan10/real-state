import Profile from "@/models/Profile";
import RealStateUser from "@/models/Realstateuser";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = body;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری شوید" },
        { status: 401 }
      );
    }

    const user = RealStateUser.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری شما یافت نشد" },
        {
          status: 404,
        }
      );
    } else {
      console.log(new Types.ObjectId(user._id));
    }

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "اطلاعات را به درستی وارد کنید" },
        { status: 400 }
      );
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProfile);

    return NextResponse.json(
      { message: "آگهی جدید ایجاد شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور  رخ  داده است" },
      { status: 500 }
    );
  }
}

export async function PATCH() {
  try {
    await connectDB();

    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری شوید" },
        { status: 401 }
      );
    }

    const user = RealStateUser.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری شما یافت نشد" },
        {
          status: 404,
        }
      );
    }

    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "اطلاعات را کامل وارد کنید" },
        { status: 400 }
      );
    }

    const profile = await Profile.findOne({ _id });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور  رخ  داده است" },
      { status: 500 }
    );
  }
}
