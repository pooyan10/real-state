import DashboardPage from "@/components/template/DashboardPage";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import Realstateuser from "@/models/Realstateuser";

async function Dashboard() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await Realstateuser.findOne({ email: session.user.email });
  return <DashboardPage createdAt={user?.createdAt} />;
}

export default Dashboard;
