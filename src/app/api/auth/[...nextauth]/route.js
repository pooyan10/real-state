import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import RealStateUser from "@/models/Realstateuser";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور پیش امده");
        }
        if (!email || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید");
        }

        const user = await RealStateUser.findOne({ email });
        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
