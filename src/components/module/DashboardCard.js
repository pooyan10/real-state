"use client";

import Card from "./Card";
import { FiEdit } from "react-icons/Fi";
import { AiOutlineDelete } from "react-icons/ai";

function DashboardCard({ data }) {
  const editHandler = () => {};

  const deleteHandler = () => {};

  return (
    <div className="shadow-gray-300 shadow-lg mb-4 flex flex-col sm:flex-row sm:items-end items-center p-4 rounded-md">
      <Card data={data} />
      <div className="w-[40%] sm:w-full sm:flex">
        <button
          className=" hover:bg-green-100 text-green-700 border-2 rounded-md sm:mr-4 w-full flex px-2 py-1 items-center justify-center border-green-500 mt-2"
          onClick={editHandler}
        >
          ویرایش
          <FiEdit />
        </button>
        <button
          className="hover:bg-red-100 text-red-700 border-2 rounded-md sm:mr-4 w-full flex px-2 py-1 items-center justify-center border-red-600 mt-2"
          onClick={deleteHandler}
        >
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;
