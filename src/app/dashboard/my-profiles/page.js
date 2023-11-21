import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyProfilesPage from "@/components/template/MyProfilesPage";
import Realstateuser from "@/models/Realstateuser";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function Myprofiles() {
  await connectDB();
  const session = await getServerSession(authOptions);
  console.log(session.user.email);

  const [user] = await Realstateuser.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        localField: "_id",
        foreignField: "realstateuserId",
        as: "profiles",
      },
    },
  ]);
  console.log(user.profiles);
  return <MyProfilesPage profiles={user.profiles} />;
}

export default Myprofiles;
