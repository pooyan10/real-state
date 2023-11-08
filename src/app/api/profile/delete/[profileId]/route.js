import Profile from "@/models/Profile";
import RealStateUser from "@/models/RealStateUser";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await connectDB();
    const id = context.params.profileId;
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

    const profile = await Profile.findOne({ _id: id });
    // if (!user._id.equals(profile.userId)) {
    //   return NextResponse.json(
    //     {
    //       error: "دستری شما به این آگهی محدود شده است",
    //     },
    //     { status: 403 }
    //   );
    // }

    if (user.role === "ADMIN") {
      await Profile.deleteOne({ _id: id });
      return NextResponse.json(
        { message: "آگهی مورد نظر حذف شد" },
        { status: 200 }
      );
    }

    await Profile.deleteOne({ _id: id });
    return NextResponse.json(
      { message: "آگهی مورد نظر حذف شد" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور  رخ  داده است" },
      { status: 500 }
    );
  }
}
