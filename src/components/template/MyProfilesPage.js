import DashboardCard from "../module/DashboardCard";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="text-red-600 bg-red-100 rounded-md p-1">
          هیچ آگهی ثبت نشده است
        </p>
      )}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
