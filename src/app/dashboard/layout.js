import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import Realstateuser from "@/models/Realstateuser";

export const metadata = {
  title: " پنل کاربری املاک | ایران ملک",
};

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  await connectDB();
  const user = await Realstateuser.findOne({ email: session.user.email });

  if (!user) {
    <h3 className="">مشکلی پیش آمده است</h3>;
  }

  return (
    <DashboardSidebar role={user.role} email={user.email}>
      {children}
    </DashboardSidebar>
  );
}

export default DashboardLayout;
