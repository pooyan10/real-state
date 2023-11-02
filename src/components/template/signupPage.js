"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BeatLoader } from "react-spinners";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);

    if (res.status === 201) {
      router.push("/signin");
      toast.success("کاربر ایجاد شد");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="text-2xl font-black mb-4 text-blue1">فرم ثبت نام</h4>
      <form className="flex flex-col p-12 border-2 rounded-xl border-blue1 shadow-3xl shadow-blue1/60 gap-2 text-blue1">
        <label htmlFor="">ایمیل:</label>
        <input
          className="border-2 border-dotted rounded-md border-gray-300"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">رمز عبور:</label>
        <input
          className="border-2 border-dotted rounded-md border-gray-300"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor=""> تکرار رمز عبور:</label>
        <input
          className="border-2 border-dotted rounded-md border-gray-300 mb-5"
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {loading ? (
          <BeatLoader
            color="#304ffe"
            margin={3}
            cssOverride={{ margin: "auto" }}
            speedMultiplier={0.8}
          />
        ) : (
          <button
            onClick={signupHandler}
            className="bg-blue1 text-white rounded-md py-1 -mb-2"
          >
            ثبت نام
          </button>
        )}
      </form>
      <p className="mt-5">
        حساب کاربری دارید؟
        <Link
          href="/signin"
          className="mr-1 text-blue-500 underline underline-offset-8 decoration-2"
        >
          ورود
        </Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SignupPage;
