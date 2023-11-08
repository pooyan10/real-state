"use client";

import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className="shadow-lg my-4 rounded-md p-4">
      <h3 className="text-xl font-bold text-blue1 mb-4">{title}</h3>
      <p className="">{description}</p>
      <div className="flex gap-3 mt-4 mb-6 items-center">
        <span className="bg-blue1/30 rounded-md px-2 py-1 text-blue1">
          {location}
        </span>
        <span className="bg-blue1/30 rounded-md px-2 py-1 text-blue1">
          {sp(price)}
        </span>
      </div>
      <button
        className="bg-green-500 px-2 py-1 rounded-md text-white hover:text-green-800 hover:shadow-3xl shadow-green-800"
        onClick={publishHandler}
      >
        انتشار
      </button>
      <div className="bg-blue1 h-[1px] mt-5 rounded-full"></div>
      <Toaster />
    </div>
  );
}

export default AdminCard;
