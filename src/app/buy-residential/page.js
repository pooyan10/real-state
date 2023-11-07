import BuyResidentialPage from "@/components/template/BuyResidentialPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

async function BuyResidential(props) {
  const { searchParams } = props;

  //بهتر است در کامپوننت های سرور ساید از ای پی ای روت استفاده نکنیم (ایت مورد  حالت تمرینی دارد)
  // const res = await fetch("http://localhost:3000/api/profile", {
  //   cache: "no-store",
  // });
  // const data = await res.json();

  await connectDB();
  const profiles = await Profile.find().select("-userId");
  let finalData = profiles;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialPage data={finalData} />;
}

export default BuyResidential;
