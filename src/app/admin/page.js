import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import { redirect } from "next/navigation";
import RealStateUser from "@/models/RealStateUser";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import AdminPage from "@/components/template/AdminPage";
import Profile from "@/models/Profile";

export const metadata = {
  title: " پنل ادمین املاک | ایران ملک",
};

async function Admin() {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await RealStateUser.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({ published: false });

  return (
    <DashboardSidebar role={user.role} email={user.email}>
      <AdminPage profiles={profiles} />
    </DashboardSidebar>
  );
}

export default Admin;
