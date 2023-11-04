import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyProfilesPage from "@/components/template/MyProfilesPage";
import RealStateUser from "@/models/Realstateuser";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function Myprofiles() {
  await connectDB();
  const session = await getServerSession(authOptions);

  const [user] = await RealStateUser.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);
  console.log(user);
  return <MyProfilesPage profiles={user.profiles} />;
}

export default Myprofiles;
