import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

async function Myprofiles() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return <div>Myprofiles</div>;
}

export default Myprofiles;
