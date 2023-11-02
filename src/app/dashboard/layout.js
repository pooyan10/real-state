import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return <DashboardSidebar>{children}</DashboardSidebar>;
}

export default DashboardLayout;
