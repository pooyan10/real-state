import Card from "../module/Card";
import Sidebar from "../module/Sidebar";

function BuyResidentialPage({ data }) {
  return (
    <div className="sm:relative flex flex-col items-center ">
      <div className="w-full sm:absolute right-5 mt-10 sm:w-fit">
        <Sidebar />
      </div>
      {data.length ? null : (
        <p className="bg-red-100 text-red-600 px-2 py-1 rounded-md">
          هیچ آگهی ثبت نشده است
        </p>
      )}
      <div className="gap-4 sm:mt-10 overflow-y-auto  sm:max-h-screen md:gap-6 lg:gap-8 sm:absolute right-[200px] sm:w-[400px] md:w-[600px] lg:w-[800px] mx-auto  w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 items-center">
        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialPage;
