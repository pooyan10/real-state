import AdminCard from "../module/AdminCard";

function AdminPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="p-2 rounded-md bg-red-100 text-red-700">
          هیچ آگهی در انتظار تایید وجود ندارد
        </p>
      )}
      {profiles.map((i) => (
        <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default AdminPage;
