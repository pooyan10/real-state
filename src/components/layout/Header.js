"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { FiLogIn } from "react-icons/Fi";
import { FaUserAlt } from "react-icons/Fa";

function Header() {
  const { data } = useSession();
  return (
    <header className="flex justify-between my-6 p-6 bg-blue1 text-white sm:rounded-md sm:mx-4 font-semibold sm:text-lg text-base">
      <div className="flex ">
        <ul className="flex items-center justify-between gap-5 ">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>

      {data ? (
        <div className=" bg-white p-1 rounded-md px-2 group hover:bg-blue1 cursor-pointer">
          <Link href="/dashboard">
            <FaUserAlt className="text-blue1 group-hover:text-white" />
          </Link>
        </div>
      ) : (
        <div className="flex space-x-2 bg-white rounded-md">
          <Link
            href="/signin"
            className="flex items-center text-blue1 font-extrabold py-1 px-2 "
          >
            <FiLogIn className="text-[24px] ml-1" />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
