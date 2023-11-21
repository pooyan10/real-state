"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
function LogoutButton() {
  return (
    <button
      className="flex mt-3 text-red-700 gap-1 font-bold"
      onClick={signOut}
    >
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
