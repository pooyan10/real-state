function DashboardPage({ createdAt }) {
  console.log(createdAt);
  return (
    <div>
      <h3 className="">سلام 👋</h3>
      <p className="">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند
      </p>
      <div className="mt-12 flex bg-blue-100 w-fit px-2 rounded-md py-1 gap-1">
        <p className="font-bold">تاریخ عضویت:</p>
        <span className="text-blue1">
          {new Date(createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
    </div>
  );
}

export default DashboardPage;
