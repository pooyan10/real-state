"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import Loader from "../module/Loader";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="text-2xl font-black mb-4 text-blue1">فرم ورود </h4>
      <form className="flex flex-col p-12 border-2 rounded-xl border-blue1 shadow-3xl shadow-blue1/60 gap-2 ">
        <label htmlFor="" className="text-blue1">
          ایمیل:
        </label>
        <input
          className="border-2 border-dotted rounded-md border-gray-300"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" className="text-blue1">
          رمز عبور:
        </label>
        <input
          className="border-2 border-dotted rounded-md border-gray-300"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
          <div className="-mb-2 mt-8 mx-auto">
            <Loader />
          </div>
        ) : (
          <button
            onClick={signinHandler}
            className="bg-blue1 text-white rounded-md py-1 -mb-2 mt-8"
          >
            ورود{" "}
          </button>
        )}
      </form>
      <p className="mt-5">
        حساب کاربری ندارید؟
        <Link
          href="/signup"
          className="mr-1 text-blue-500 underline underline-offset-8 decoration-2"
        >
          ثبت نام
        </Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SigninPage;
