import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import LogoutButton from "../module/LogoutButton";

async function DashboardSidebar({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <div className=" flex flex-col mt-8 sm:flex-row sm:mt-20 sm:mr-3 gap-8">
      <div className=" w-[100%] flex flex-col items-center h-fit py-10 px-4 rounded-lg  sm:w-[200px] shadow-3xl shadow-blue1/40 ">
        <CgProfile className="text-[45px] text-blue1" />
        <p className="font-bold text-gray-600 mt-2">{session?.user.email}</p>
        <span className="bg-[#304ffe] w-[100%] h-[1px] mb-8"></span>
        <div className="flex flex-col w-full gap-1">
          <Link className="font-bold mb-1" href="/dashboard">
            حساب کاربری
          </Link>
          <Link className="font-bold mb-1" href="/dashboard/my-profiles">
            آگهی های من
          </Link>
          <Link className="font-bold mb-1" href="/dashboard/add">
            ثبت آگهی
          </Link>
          <LogoutButton />
        </div>
      </div>
      <div className="sm:flex-1">{children}</div>
    </div>
  );
}

export default DashboardSidebar;
